'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  // Below is transformToRequire before I changed to
  // this bootstrap-vue fix: 
  // https://bootstrap-vue.js.org/docs/reference/images/
  // transformToRequire: {
  //   video: ['src', 'poster'],
  //   source: 'src',
  //   img: 'src',
  //   image: 'xlink:href'
  // },
  transformToRequire: {
    'img': 'src',
    'image': 'xlink:href',
    'b-img': 'src',
    'b-img-lazy': ['src', 'blank-src'],
    'b-card': 'img-src',
    'b-card-img': 'img-src',
    'b-carousel-slide': 'img-src',
    'b-embed': 'src'
  }
}
