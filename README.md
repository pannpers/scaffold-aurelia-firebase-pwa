<h1 align="center">Welcome to scaffold-aurelia-firebase-pwa 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D8.9.0-blue.svg" />
  <a href="https://github.com/pannpers/scaffold-aurelia-firebase-pwa#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/pannpers/scaffold-aurelia-firebase-pwa/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/pannpers/scaffold-aurelia-firebase-pwa/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://twitter.com/panchan9">
    <img alt="Twitter: panchan9" src="https://img.shields.io/twitter/follow/panchan9.svg?style=social" target="_blank" />
  </a>
</p>


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Features / Utilities](#features-utilities)
- [How to Set Up](#how-to-set-up)
  - [0. Prerequisites](#0-prerequisites)
  - [1. Fork Scaffold Repository](#1-fork-scaffold-repository)
  - [2. Launch Local Development Container](#2-launch-local-development-container)
  - [3. Initialize Aurelia Application using `aurelia-cli`.](#3-initialize-aurelia-application-using-aurelia-cli)
  - [4. Install Package Dependencies](#4-install-package-dependencies)
  - [5. Create `src` directory](#5-create-src-directory)
  - [6. Integrate ESLint and Prettier with VSCode](#6-integrate-eslint-and-prettier-with-vscode)
  - [7. Configure Webpack Dev Server for Docker](#7-configure-webpack-dev-server-for-docker)
  - [8. Login Firebase Project](#8-login-firebase-project)
  - [9. Add npm script](#9-add-npm-script)
- [Usage](#usage)
  - [Run dev app](#run-dev-app)
  - [Build for production](#build-for-production)
  - [Unit tests](#unit-tests)
  - [Integration (e2e) tests](#integration-e2e-tests)
  - [Author](#author)
  - [Show your support](#show-your-support)
  - [📝 License](#license)

<!-- /code_chunk_output -->


# Features / Utilities
- Application Features
  - [Firebase](https://firebase.google.com/) Integration
  - [Aurelia](https://aurelia.io) *hello world* app with Sign-In dialog using Firebase Auth
  - PWA (Progressive Web Apps) (comming soon)
- Development Environment
  - Dockernized Local Development using VSCode [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) extension
  - [VSCode ESLint](https://github.com/microsoft/vscode-eslint) Integration
  - [ESLint](https://eslint.org) Integration ([Airbnb's base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base))
  - [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint/tree/ecc96318f47d821c19513652f262b47b15fd8257) Integration
  - [Prettier](https://prettier.io) Integration
  - CI/CD Pipeline using [CircleCI](https://circleci.com) (comming soon)

# How to Set Up

## 0. Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/)
- [Extension: Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

For more details about VSCode Remote Development, see [the official docs](https://code.visualstudio.com/docs/remote/containers).


## 1. Fork Scaffold Repository
Fork this Scaffold and `git clone` it to your local.

```sh
$ git clone $YOUR_FORKED_PROJECT

# move project root directory
$ cd $YOUR_PROJECT_DIR
```

## 2. Launch Local Development Container
Launch VSCode workspace in your project root directory like this.
```sh
# launch VSCode workspace
$ code .
```

Then you can see the following dialog and press it.
<<<< Attach IMAGE >>>>

## 3. Initialize Aurelia Application using `aurelia-cli`.
After initializing your local development container, you can use [Firebase CLI](https://firebase.google.com/docs/cli/) and [Aurelia CLI](https://aurelia.io/docs/cli/basics/).
```sh
$ firebase -h

$ au help
No Aurelia project found.
Global aurelia-cli v1.2.0
                      _ _          ____ _     ___
  __ _ _   _ _ __ ___| (_) __ _   / ___| |   |_ _|
 / _` | | | | '__/ _ \ | |/ _` | | |   | |    | |
| (_| | |_| | | |  __/ | | (_| | | |___| |___ | |
 \__,_|\__,_|_|  \___|_|_|\__,_|  \____|_____|___|
```

This project was bootstrapped based on following selected features:
> webpack http2 web typescript htmlmin-max sass postcss-typical jest cypress vscode scaffold-minimum

Initialize Aurelia app like this.
```sh
# initialize interactively
$ au new --here

# or you can run with config options like this.
$ au new $YOUR_PROJECT --unattended \
  --here \
  --select http2,typescript,htmlmin-max,sass,postcss-typical,jest,cypress,vscode
```

## 4. Install Package Dependencies

```sh
npm install \
  firebase \
  firebaseui

npm install -D \
  eslint \
  eslint-config-airbnb-base \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-prettier \
  prettier \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser 
```


## 5. Create `src` directory
Replace `src` directory generated by `aulirea-cli` with one under `tmp` directory.
```sh
$ rm -rf src && mv tmp/src .
```

## 6. Integrate ESLint and Prettier with VSCode

Append additional settings to `.vscode/settings.json` like below to configure ESLint and Prettier extensions.
```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "html.suggest.angular1": false,
  "html.suggest.ionic": false,
  
  /// append the following line ///
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    {
      "language": "typescript",
      "autoFix": true
    }
  ],
  "prettier.eslintIntegration": true,
}
```

## 7. Configure Webpack Dev Server for Docker
Append `host: '0.0.0.0'` to Webpack's development server config in `webpack.config.js` like below.
```js
  devServer: {
    contentBase: outDir,
    // serve index.html for all 404 (required for push-state)
    historyApiFallback: true,
    // enable all network interfaces to allow access from out of Docker container
    host: '0.0.0.0',
  },
```

## 8. Login Firebase Project
```sh
$ firebase login
```

## 9. Add npm script

```sh
$ 
```

**That's all you need to do for local development!!** \
**Enjoy your awesome development life!!**

---

# Usage

## Run dev app

Run `au run`, then open `http://localhost:8080`

To open browser automatically, do `au run --open`.

To change dev server port, do `au run --port 8888`.

To enable Webpack Bundle Analyzer, do `au run --analyze`.

To enable hot module reload, do `au run --hmr`.


## Build for production

Run `au build --env prod`.

## Unit tests

Run `au test` (or `au jest`).

To run in watch mode, `au test --watch` or `au jest --watch`.

## Integration (e2e) tests

You need the app running for integration test.

First, run `au run` and keep it running.

Then run `au cypress` to run cypress in interactive mode.

To perform a test-run and reports the results, do `au cypress --run`.



## Author

👤 **pannpers**

* Twitter: [@panchan9](https://twitter.com/panchan9)
* Github: [@pannpers](https://github.com/pannpers)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [pannpers](https://github.com/pannpers).<br />
This project is [MIT](https://github.com/pannpers/scaffold-aurelia-firebase-pwa/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
