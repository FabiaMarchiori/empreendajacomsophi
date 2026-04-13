

## Diagnóstico

O problema é a **proporção da imagem**. A logo croppada tem 1373x593px (ratio ~2.3:1). Com `w-[240px]` e `h-auto`, a altura calculada fica ~104px — **maior que o header** (`h-24` = 96px). Por isso a logo "vaza" e come o texto da hero.

Definir apenas largura não funciona para essa imagem. Precisamos **limitar a altura** e deixar a largura se ajustar proporcionalmente.

## Plano

**Arquivo:** `src/components/Navbar.tsx` (único arquivo alterado)

1. Trocar a estratégia de sizing da logo de width-first para **height-first com max-width**:
   - `h-14` (56px) no mobile → `md:h-16` (64px) no desktop
   - `w-auto` para manter proporção
   - `max-w-[280px]` para não ultrapassar limite horizontal
   - Manter `object-contain`, `shrink-0`, `object-left`

2. Resultado esperado:
   - **Mobile:** ~56px de altura, ~130px de largura (cabe no header)
   - **Desktop:** ~64px de altura, ~148px de largura (presença sem dominar)
   - Logo inteira visível, sem corte, sem overflow, sem invadir a hero

3. Não mexer em nenhum outro componente.

