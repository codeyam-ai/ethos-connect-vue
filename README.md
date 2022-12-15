# Ethos Connect: Vue Plugin

## Documentation

For full documentation on Ethos Connect please visit [Ethos Connect](https://ethoswallet.xyz/dev). The Vue-specific documentation can be found at [Ethos Connect: Vue](https://docs.ethoswallet.xyz/example-vue-app)

## Running locally

From the root folder of the project you are working on (*not* this project)

```bash
yarn remove ethos-connect-vue
```

From the root directory of *this* project:

```bash
yarn link
yarn install
yarn build
```

From the root folder of the project you are working on (*not* this project)

```bash
yarn link ethos-connect-vue
yarn
yarn dev
```

### To reset local

From the root folder of the project you are working on (*not* this project)

```bash
yarn unlink ethos-connect-vue
yarn add ethos-connect-vue
```

From the root directory of *this* project:

```bash
yarn unlink
```
