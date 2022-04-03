const ts_preset = require('ts-jest/jest-preset')
const puppeteer_preset = require('jest-puppeteer/jest-preset')

const preset = Object.assign(ts_preset, puppeteer_preset)

module.exports = preset
