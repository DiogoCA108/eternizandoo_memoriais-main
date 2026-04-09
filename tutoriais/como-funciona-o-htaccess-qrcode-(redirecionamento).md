# Guia Rápido: Cadastro de QR Code

Este guia explica como ativar o redirecionamento de um novo QR Code usando o arquivo `.htaccess`.

## 1. O que você precisa
- **CÓDIGO:** Os 6 caracteres do QR (ex: `7r26gz`).
- **SLUG:** A parte final da URL do memorial (ex: `maria-helena-01-01-1901`).

## 2. Passo a Passo

1. Abra o arquivo `public/.htaccess`.
2. Vá até a seção `# CLIENTES REAIS`.
3. Adicione a nova regra seguindo este padrão:
   ```apache
   # NOME DO CLIENTE
   RewriteRule ^m/CÓDIGO/?$ https://www.eternizandoo.com/memorial/SLUG [R=302,L,NE]
   ```
4. Salve o arquivo.

## 3. Exemplo Prático
Se o código for `abc123` e o memorial for `joao-heleno-da-silva-01-01-1901`:
```apache
RewriteRule ^m/abc123/?$ https://www.eternizandoo.com/memorial/joao-heleno-da-silva-01-01-1901 [R=302,L,NE]
```
---
**Atenção:** Sempre adicione as regras **antes** do bloco "FALLBACK DO SITE".
