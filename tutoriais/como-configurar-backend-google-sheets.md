# Tutorial: Como Configurar o Backend de Homenagens (Google Sheets + Apps Script)

Este tutorial documenta a implementação do sistema de backend leve para as homenagens, permitindo que as mensagens enviadas pelo site sejam salvas em uma planilha do Google e posteriormente lidas pelo site após aprovação.

## 1. Configuração da Planilha

A planilha **NÃO** é gerada automaticamente. Ela atua como seu banco de dados e painel de moderação. 
Para configurá-la do zero:

1. Acesse [sheets.new](https://sheets.new) e crie uma planilha nova.
2. Na primeira linha, escreva os exatos títulos das colunas (de A até F): 
   **data | nome | vinculo | mensagem | slug | status**
3. *(Opcional, mas recomendado)* Na coluna de `status`, crie uma "Validação de dados" tipo Menu Suspenso contendo as opções `Aprovado`, `Pendente` e `Rejeitado`. Isso evita erros de digitação.

## 2. Configurando o Google Apps Script (Versão 2 - Leitura e Escrita)

O código abaixo permite receber as mensagens vindas do formulário do site e enviar de volta para o site (somente os arquivos que tiverem `Aprovado` na coluna de status).

1. Na sua planilha, vá no menu **Extensões > Apps Script**.
2. Apague tudo o que estiver lá e cole o código completo abaixo.
3. Se for a primeira vez:
   * Clique em **Implantar > Nova Implantação > App da Web**.
   * Em "Quem pode acessar", escolha **Qualquer pessoa**.
4. Se você estiver **atualizando** o código:
   * Clique em **Implantar > Gerenciar Implantações**.
   * Clique no ícone de **lápis (Editar)** no canto superior direito.
   * Onde diz "Versão", mude sempre para **"Nova Versão"** (se não fizer isso, o Google não atualiza o código no ar).
   * Clique em **Implantar**.

## Código do Apps Script

```javascript
// Recebe mensagens do site (Enviadas pelo formulário)
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data;
  
  try {
    data = JSON.parse(e.postData.contents);
  } catch(err) {
    // Fallback caso não venha como JSON puro
    data = e.parameter;
  }
  
  sheet.appendRow([
    new Date(), 
    data.nome || "Anônimo", 
    data.vinculo || "Visitante", 
    data.mensagem || "", 
    data.slug || "geral", 
    "Pendente" // Status inicial padrão para moderação manual
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Envia mensagens aprovadas de volta para o site (Leitura na página)
function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rows = sheet.getDataRange().getValues();
  var slugFilter = e.parameter.slug;
  var results = [];
  
  // Pula a primeira linha (cabeçalho)
  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    // Coluna E: Slug (índice 4), Coluna F: Status (índice 5)
    if (row[4] === slugFilter && row[5] === "Aprovado") {
      results.push({
        nome: row[1],
        vinculo: row[2],
        mensagem: row[3],
        data: row[0]
      });
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify({ "status": "success", "data": results }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Lida com checagens automáticas (CORS Preflight)
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## Como o site lê e envia os dados

* **Envio:** O site envia um corpo `JSON` com `{ nome, vinculo, mensagem, slug }` via requisição `POST` com modo `no-cors`. O script capta os dados, adiciona a data atual e insere a linha na planilha como `Pendente`.
* **Leitura:** O site faz um `fetch(GET)` na mesma URL passando o parâmetro `?slug=NOME_MEMORIAL` na inicialização do componente de exibição. O script lê a planilha ignorando todas as linhas cujo `status` seja diferente de `Aprovado` ou que pertençam a outro slug, garantindo uma moderação segura da URL sem expor outras mensagens.
