![screenshot](/app/assets/logo.png?raw=true "Screenshot") # FFmpeg GUI

Basic Graphical UI that makes it easy for a user to work with FFmpeg CLI
<br><br>
![screenshot](/app/assets/ex.png?raw=true "Screenshot")

## Install FFmpeg
In order to run this app you need to have FFmpeg installed on your computer.
[Here is a guide to install FFmpeg](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg).

## Getting started

This project was generated with [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate).
Refer to the docs to find more information on how to perform common tasks.

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

Alternatively, you can run the renderer and main processes separately. This way, you can restart one process without waiting for the other. Run these two commands **simultaneously** in different console tabs:

```bash
$ yarn start-renderer-dev
$ yarn start-main-dev
```

If you don't need autofocus when your files was changed, then run `dev` with env `START_MINIMIZED=true`:

```bash
$ START_MINIMIZED=true yarn dev
```

## Packaging

To package apps for the local platform:

```bash
$ yarn package
```

To package apps for all platforms:

First, refer to [Multi Platform Build](https://www.electron.build/multi-platform-build) for dependencies.

Then,

```bash
$ yarn package-all
```

To package apps with options:

```bash
$ yarn package -- --[option]
```

:bulb: You can debug your production build with devtools by simply setting the `DEBUG_PROD` env variable:

```bash
DEBUG_PROD=true yarn package
```
