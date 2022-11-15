# Ethos Connect: Vue Plugin

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
