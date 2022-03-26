const express = require('express')
const languages = express.Router()
const Language = require('../models/language.js')

// INDEX
languages.get('/', (req, res) => {
  Language.find()
    .then(foundLanguages => {
      console.log(foundLanguages)
      res.json(foundLanguages)
    })
})

// RANDOM
languages.get('/random', (req, res) => {
  Language.find()
    .then(foundLanguages => {
      let randomLanguage = foundLanguages[Math.floor(Math.random() * foundLanguages.length)]
      res.json(randomLanguage)
    })
})

// SHOW
languages.get('/:name', (req, res) => {
  Language.findOne({ name: req.params.name .toLocaleLowerCase() })
    .then(foundLanguage => {
      res.json(foundLanguage)
    })
})

module.exports = languages