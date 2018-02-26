'use strict'
const pkg = require('../../package')

module.exports = {
  modules: [
    ['nuxt-matomo', { matomoUrl: '//analytics.weekly-output.com/', siteId: 1 }],
  ],
  port: 4000,
  title: 'The Weekly Output',

  publicPath: process.env.NODE_ENV === 'production' ? '/static' : ''
}