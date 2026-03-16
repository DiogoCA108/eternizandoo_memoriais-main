# Documentação: Como as Rotas e URLs dos Memoriais Funcionam

Este guia explica como a estrutura de URLs (links) do projeto funciona nos bastidores. 

---

## 🔗 Onde as rotas ficam definidas?

No projeto React, as rotas (os endereços da aplicação) ficam todas definidas no arquivo principal de roteamento: **`src/App.tsx`**.

A estrutura básica lá dentro é a seguinte:

```tsx
<Routes>
  {/* A página inicial (Home) */}
  <Route path="/" element={<Index />} />
  
  {/* A página dos memoriais */}
  <Route path="/memoriais/:slug" element={<MemorialPage />} />

  {/* Página de "Não Encontrado" (Erro 404) para links inválidos */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

## ⚙️ Como a rota dos Memoriais funciona na prática?

O React não cria uma página separada (`.html` ou equivalente) para o memorial do "João", outra para a "Maria", etc. Em vez disso, a aplicação possui **uma única página** chamada `MemorialPage`, e utiliza o que chamamos de **rota dinâmica**.

Note que a rota utiliza o formato `/memoriais/:slug`. Esse termo `:slug` atua como um espaço reservado (variável).

**O fluxo passo a passo quando alguém acessa um link:**

1. **Acesso:** Um visitante digita ou clica em um link como `http://localhost:8080/memoriais/maria`.
2. **Reconhecimento da Rota:** O arquivo `App.tsx` enxerga a requisição e sabe que ela pertence ao formato `/memoriais/:slug`. Ele então passa o controle para o componente `MemorialPage`.
3. **Leitura da URL:** A `MemorialPage` "captura" a variável atual da URL, enxergando que o ":slug" nesse caso específico é a palavra `"maria"`.
4. **Busca dos Dados:** Sabendo que o slug é "maria", a página pesquisa no catálogo (o arquivo `src/data/memoriais/index.ts`): *"Existe algum registro com a chave 'maria'?"*
5. **Renderização:** A aplicação encontra os dados que você configurou (no arquivo `maria.ts`) e preenche dinamicamente a estrutura visual padrão do template do Memorial com as fotos, textos históricos, hábitos e mensagens pertinentes à Maria.

## 📝 Resumo

- **As "regras e endereços" de rotação:** Estão no `src/App.tsx`.
- **A interface única que desenha as páginas:** Está em `src/pages/MemorialPage.tsx`.
- **As chaves (slugs) válidas na URL:** São lidas e validadas a partir do arquivo central de registros: `src/data/memoriais/index.ts`. 

Qualquer memorial novo inserido no array do `index.ts` automaticamente ganha vida própria na URL sem necessidade de modificar nada no `App.tsx`!
