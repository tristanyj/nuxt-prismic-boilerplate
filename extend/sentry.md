# Extend | Sentry

This config is supposed to be quite minimalistic, and therefore purposefully lacks somes features. Follow this guide to use Sentry in this project.

## Installation

First, install the [Nuxt Sentry module](https://github.com/nuxt-community/sentry-module) :

```bash
# install package as a dependency
$ yarn add @nuxtjs/sentry
```

## Setup

Add your Sentry DSN key to the `.env` config :

```env
SENTRY_DSN=""
```

In `nuxt.config.js`, add the package to modules array and the configuration object to go along with it :

```js
modules: [
	'@nuxtjs/sentry',
],
sentry: {
    dsn: process.env.SENTRY_DSN
    config: {} // Additional config
}
```

Create a Sentry account [here](https://sentry.io/signup/).
To activate your account, create an error in any `.vue` or `.js` file by calling any undefined function :

```js
someUndefinedFunction();
```
