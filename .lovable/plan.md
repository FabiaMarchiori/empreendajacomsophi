
Objetivo: acertar o tamanho da logo do header sem mexer no restante da landing.

Diagnóstico
- O problema atual está concentrado em `src/components/Navbar.tsx`: a logo usa `w-[320px] lg:w-[400px]`.
- Esse salto direto para `400px` no breakpoint `lg` explica o efeito de “uma hora pequena, outra enorme”.
- Não encontrei uma herança global relevante para esse sizing: a navbar é usada na `Index.tsx`, e `src/App.css` nem está importado no app atual.

Plano de ajuste
1. Alterar somente `src/components/Navbar.tsx`.
2. Substituir o sizing atual por uma escala progressiva dentro da faixa que você pediu, tratando a arte como logo horizontal principal:
   - mobile: `w-[240px]`
   - `sm`: `w-[260px]`
   - `md`: `w-[280px]`
   - `lg`: `w-[300px]`
   - `xl`: `w-[320px]`
3. Manter `h-auto`, `object-contain`, `object-left` e `shrink-0` para preservar proporção, sem distorção, corte ou compressão.
4. Preservar o container do header como está; só ajustar levemente o gap dos links se `320px` no desktop amplo competir com a navegação.
5. Não mexer em hero, botões, layout geral, footer ou outras seções.

Resultado esperado
- A logo para de “saltar” entre pequena e gigante.
- Fica destacada, legível e premium, sem dominar a hero.
- O sizing passa a ser previsível por breakpoint, independente de outros contextos.

Entrega após implementação
- Arquivo alterado: `src/components/Navbar.tsx`
- Regra final aplicada na imagem
- Largura final no mobile e no desktop
- Confirmação de que a logo ficou dentro da faixa 220px–320px e visualmente equilibrada
