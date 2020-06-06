![Javro](https://javro.github.io/assets/images/demo.gif)

## Install CLI

> You must have installed Javro first: https://javro.github.io

`npm i -g javro`

## Usage

`javro ~/Workspace/avro.json`

## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
yarn dev
```

## Packaging for Production

To package apps for the local platform:

```bash
yarn package
```

## Debug

```bash
DEBUG_PROD=true yarn build && DEBUG_PROD=true yarn start
```

## Publish

To publish CLI, go in `bin` folder, then `npm publish`

## Auto updater

`git clone https://github.com/zeit/hazel`

cd `hazel`

`vercel -e ACCOUNT="javro" -e REPOSITORY="javro"`
