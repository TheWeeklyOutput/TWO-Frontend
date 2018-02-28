'use strict'
const pkg = require('../../package')

module.exports = {
  port: 4000,
  title: 'The Weekly Output',

  publicPath: process.env.NODE_ENV === 'production' ? '/static/' : ''
}