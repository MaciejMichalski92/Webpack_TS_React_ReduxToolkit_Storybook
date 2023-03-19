# Webpack_TS_React_ReduxToolkit_Storybook

## Installation

Clone this repo and install.

`yarn install`

## Usage

Development server

`yarn dev`

You can view the development server at localhost:3003.

Also Webpack Bundle Analyzer at localhost:8888.

Production build

`yarn build`

open source project, by Maciej Michalski

## Caveats

- remember to use only explicit imports for importing modules/components, to awoid problems with automatic tree-shaking **_(due to split chunks, when you import implicit from one place (import \* from 'src/components') webpack can import everything, preventing lazy module import because code will be in a bundle already)_**
