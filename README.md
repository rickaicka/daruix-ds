# Daruix Design System

Biblioteca de componentes, tokens e estilos compartilhados da Daruix Engenharia.

Este projeto centraliza a base visual utilizada nos produtos Daruix, incluindo componentes Angular, tokens de design, utilitários SCSS, estilos globais e ambiente de documentação/testes com Storybook.

## Pacote

```bash
npm install @daruix/ui
```

## Tecnologias

* Angular 21
* TypeScript
* SCSS
* Storybook
* ng-packagr
* npm package publishing

## Estrutura do projeto

```txt
daruix-ds/
  projects/
    ui/
      src/
        lib/
          button/
        styles/
          base/
          components/
          tokens/
          tools/
          utilities/
          _index.scss
        public-api.ts

    ds-playground/
      src/
        app/
        stories/
        styles.scss
```

## Projetos internos

### `ui`

Biblioteca principal do design system.

Contém:

* Componentes Angular standalone
* Tokens SCSS
* Estilos base
* Utilitários
* Estilos de componentes
* Arquivos exportados para publicação no npm

### `ds-playground`

Aplicação Angular usada como ambiente de testes visuais e consumo local da lib.

Também serve como base para o Storybook.

## Scripts principais

### Rodar o playground

```bash
npm run start:playground
```

### Rodar o Storybook

```bash
npm run storybook
```

### Buildar a lib

```bash
npm run build:ui
```

### Buildar o Storybook

```bash
npm run build:storybook
```

### Gerar pacote local

```bash
npm run pack:ui
```

## Como usar em um projeto Angular

### 1. Instalar o pacote

```bash
npm install @daruix/ui
```

### 2. Importar os estilos globais

No arquivo global de estilos do projeto consumidor, por exemplo `styles.scss`:

```scss
@use '@daruix/ui/styles/index';
```

Esse import carrega:

* Tokens
* Reset
* Estilos globais
* Estilos de componentes
* Utilitários de tipografia
* Utilitários de layout
* Utilitários de botão

### 3. Usar um componente

Exemplo com o botão:

```ts
import { Component } from '@angular/core';
import { ButtonComponent } from '@daruix/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <drx-button>
      Salvar
    </drx-button>
  `,
})
export class ExampleComponent {}
```

## Button

Componente base de botão do design system.

### Uso básico

```html
<drx-button>
  Botão Primário
</drx-button>
```

### Variantes

```html
<drx-button variant="primary">
  Primário
</drx-button>

<drx-button variant="secondary">
  Secundário
</drx-button>

<drx-button variant="tertiary">
  Terciário
</drx-button>
```

### Tamanhos

```html
<drx-button size="medium">
  Médio
</drx-button>

<drx-button size="small">
  Pequeno
</drx-button>
```

### Tipografia

```html
<drx-button font="quicksand">
  Quicksand
</drx-button>

<drx-button font="gothic">
  Science Gothic
</drx-button>

<drx-button font="raleway">
  Raleway
</drx-button>
```

### Disabled

```html
<drx-button [disabled]="true">
  Desabilitado
</drx-button>
```

### Type

```html
<drx-button type="submit">
  Enviar
</drx-button>
```

## Estilos e tokens

Os estilos ficam em:

```txt
projects/ui/src/styles/
```

Principais grupos:

```txt
base/
  _fonts.scss
  _global.scss
  _reset.scss

components/
  _button.scss
  _divider.scss
  _status.scss

tokens/
  _colors.scss
  _typography.scss
  _breakpoints.scss
  _sizes.scss

tools/
  _functions.scss
  _responsive.scss
  _scrollbar.scss

utilities/
  _typography-utilities.scss
  _layout-utilities.scss
  _button-utilities.scss
```

## Tokens de tipografia

As famílias principais são:

```scss
$drx-font-family-raleway: "Raleway", sans-serif;
$drx-font-family-quicksand: "Quicksand", sans-serif;
$drx-font-family-gothic: "Science Gothic", sans-serif;
```

Tamanhos disponíveis:

```scss
$drx-font-sizes: (
  'caption': 10px,
  'label': 12px,
  'body-sm': 14px,
  'body': 16px,
  'body-lg': 18px,
  'subtitle': 20px,
  'title-sm': 24px,
  'title': 32px,
  'heading-sm': 40px,
  'heading': 50px,
  'display': 60px,
);
```

## Classes utilitárias de fonte

Exemplos:

```html
<p class="drx-font-quicksand-body">
  Texto Quicksand
</p>

<h1 class="drx-font-gothic-heading">
  Título Science Gothic
</h1>

<span class="drx-font-raleway-label">
  Label Raleway
</span>
```

Pesos:

```html
<p class="drx-font-regular">
  Texto regular
</p>

<p class="drx-font-semibold">
  Texto semibold
</p>
```

Alinhamento:

```html
<p class="drx-text-center">
  Texto centralizado
</p>
```

## Build da biblioteca

```bash
npm run build:ui
```

O build gera o pacote em:

```txt
dist/ui/
```

Estrutura esperada:

```txt
dist/ui/
  fesm2022/
  styles/
  types/
  package.json
  README.md
```

## Publicação no npm

A publicação é feita a partir da pasta `dist/ui`.

```bash
npm run build:ui
cd dist/ui
npm publish --access public
```

Como o pacote é scoped:

```txt
@daruix/ui
```

a publicação pública precisa usar:

```bash
--access public
```

## Versionamento

A versão da lib fica em:

```txt
projects/ui/package.json
```

Para nova versão patch:

```bash
npm version patch --prefix projects/ui --no-git-tag-version
```

Depois:

```bash
git add .
git commit -m "chore(release): ui v0.0.X"
git tag v0.0.X
git push origin main
git push origin v0.0.X
```

## CI/CD

O projeto usa GitHub Actions.

### CI

Roda em push para `main` e em Pull Requests.

Responsável por:

* Instalar dependências
* Buildar a lib
* Buildar o Storybook

### Publish NPM

Roda quando uma tag no padrão abaixo é enviada:

```txt
v*.*.*
```

Exemplo:

```bash
git tag v0.0.4
git push origin v0.0.4
```

Esse fluxo builda a lib e publica o pacote no npm.

## Desenvolvimento de novos componentes

Sugestão de estrutura:

```txt
projects/ui/src/lib/nome-do-componente/
  nome-do-componente.component.ts
  nome-do-componente.component.html
  nome-do-componente.component.scss
  nome-do-componente.component.spec.ts
```

Depois exporte no arquivo:

```txt
projects/ui/src/public-api.ts
```

Exemplo:

```ts
export * from './lib/button/button.component';
```

As stories do componente podem ficar no playground:

```txt
projects/ds-playground/src/stories/
```

## Convenções

* Componentes Angular devem ser standalone.
* Prefixo dos componentes: `drx`.
* Tokens devem ficar em `styles/tokens`.
* Estilos globais devem ser importados pelo `styles/_index.scss`.
* Componentes devem ter estilos próprios e não depender exclusivamente de classes utilitárias globais.
* Utilitários devem ser usados para composição visual fora dos componentes base.

## Licença

MIT

## Autor

Daruix Engenharia
