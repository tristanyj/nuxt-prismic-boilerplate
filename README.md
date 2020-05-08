# Nuxt Prismic Boilerplate

## Setup

Follow these steps to get the project up and running :

``` bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# static build
$ yarn generate
```

Rename `.env.example` to `.env` and fill in the following fields :

``` bash
# Site settings
SITE_LANG=
SITE_URL=
SITE_NAME=
SITE_DESCRIPTION=

# Prismic API endpoint
API_ENDPOINT=
```

## Git

This boilerplate uses Commitlint and Standard Version to enable commit linting based on the Conventional Commit specification and automatic CHANGELOG generation.

Here are some useful commands :

``` bash
# git add . && git commit, with conventional commit helper
$ yarn commit

# git push origin *branch*
$ yarn push *insert branch*

# create a new release and push to git
$ yarn release
```

## Plop

Follow these steps to be able to boostrap new files using plop :

``` bash
# install plop globally
$ npm install -g plop

# bootstrap a new component or page
$ plop
```

## Optional Commands

These commands provide additional information on the project :

``` bash
# analyze build size
$ yarn analyze
```

## Head Module

Plugin by [Edouard Haberer](https://github.com/lihbr)

Add this in prismic page json editor to enable dynamic head generation :

```json
"Meta" : {
    "meta_title" : {
      "type" : "Text",
      "config" : {
        "label" : "Title",
        "placeholder" : "Fallback to default one if empty (max. 50 characters)"
      }
    },
    "meta_description" : {
      "type" : "Text",
      "config" : {
        "label" : "Description",
        "placeholder" : "Fallback to default one if empty (max. 155 characters)"
      }
    },
    "meta_image" : {
      "type" : "Image",
      "config" : {
        "constraint" : {
          "width" : 1200,
          "height" : 630
        },
        "thumbnails" : [ {
          "name" : "twitter_variant",
          "width" : 1200,
          "height" : 600
        } ],
        "label" : "Image"
      }
    }
}
```

## Production

For production, don't forget to add the .env variables to your hosting provider environment variables.

## Help

- [Nuxt Documentation](https://nuxtjs.org/api)
- [Prismic Vue Documentation](https://prismic.io/docs/vuejs/getting-started/with-the-vuejs-starter)
- [Prismic Guides](https://user-guides.prismic.io/en/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
