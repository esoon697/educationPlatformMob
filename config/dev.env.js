'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
var active = 0

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
