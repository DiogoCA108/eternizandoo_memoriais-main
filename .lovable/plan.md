
# Ajustes Visuais no Memorial

## 1. Hero Section -- Foto maior, nome menor e mais escuro, datas com icones, frase destacada

**Arquivo:** `src/components/HeroSection.tsx`

- **Foto:** Aumentar de `w-48 h-60 / md:w-56 md:h-72` para `w-56 h-72 / md:w-64 md:h-80`
- **Nome:** Reduzir de `text-4xl md:text-6xl` para `text-3xl md:text-5xl`, cor mais escura com sombra (`text-foreground drop-shadow-lg` em vez de `text-primary-foreground`)
- **Datas:** Adicionar icone `Star` (nascimento) e `Cross` (falecimento) antes de cada data; aumentar contraste com cor `text-gold-light` puro (sem opacidade)
- **Frase:** Aumentar tamanho para `text-xl md:text-2xl`, cor mais visivel `text-primary-foreground` sem reducao de opacidade

---

## 2. Espacamento entre secoes

**Arquivo:** `src/index.css`

- Reduzir `.memorial-section` de `py-16 md:py-24` para `py-12 md:py-16`

---

## 3. Divisor de secao -- maior e posicionado no final de cada secao

**Arquivo:** `src/components/SectionDivider.tsx`

- Aumentar icone Sparkles para `w-7 h-7`
- Aumentar linhas para `max-w-[180px]` e `h-[3px]`
- Aumentar opacidade para `primary/50`

**Arquivo:** `src/pages/Index.tsx`

- Mover cada `<SectionDivider />` para **dentro** do final de cada secao, em vez de entre as secoes. Isso garante que o divisor fique visualmente ancorado ao final do bloco anterior, nao flutuando entre dois fundos diferentes.

---

## 4. Arvore Genealogica -- redesign inspirado no print

**Arquivo:** `src/components/FamilyTreeSection.tsx`

Baseado no print enviado, a arvore tera:
- **Rotulos de grupo** com icone: "Pais" no topo, "Irmaos" no meio (adicionando suporte a `irmao` como relacao), "Filhos" embaixo
- **Card destacado** para Maria Helena: fundo bege com borda arredondada, sombra suave, icone maior, texto "In Memoriam" com cruz
- **Esposo** ao lado com cruz indicando falecimento (quando aplicavel)
- Linhas verticais conectoras entre cada grupo
- Layout vertical centralizado

**Arquivo:** `src/data/memorialData.ts`

- Adicionar membros do tipo `irmao` na arvore genealogica (3 irmaos conforme o print)

---

## 5. Animacoes mais rapidas

**Arquivo:** `src/components/AnimatedSection.tsx`

- Reduzir `duration` de `0.8` para `0.4`
- Reduzir `y` inicial de `40` para `20`
- Reduzir `margin` do IntersectionObserver de `-80px` para `-40px` (dispara mais cedo)

**Arquivo:** `src/components/HeroSection.tsx`

- Reduzir todos os delays pela metade (0.2 -> 0.1, 0.4 -> 0.2, 0.5 -> 0.25, etc.)

---

## Resumo dos arquivos modificados

| Arquivo | Alteracoes |
|---|---|
| `src/components/HeroSection.tsx` | Foto maior, nome menor/escuro, datas com icones, frase destacada, delays reduzidos |
| `src/index.css` | Reducao do padding das secoes |
| `src/components/SectionDivider.tsx` | Icone e linhas maiores/mais visiveis |
| `src/pages/Index.tsx` | Reposicionar divisores para o final de cada secao |
| `src/components/FamilyTreeSection.tsx` | Redesign com rotulos de grupo, card destacado, suporte a irmaos |
| `src/data/memorialData.ts` | Adicionar irmaos na arvore genealogica |
| `src/components/AnimatedSection.tsx` | Animacoes mais rapidas e com menor delay |
