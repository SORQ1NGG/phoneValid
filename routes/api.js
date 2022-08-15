const express = require('express')const router = express.Router();const Phones = require('../models/phones.js')router.get('/', (req, res) => {    Phones.find({})        .then((data) => {            console.log('Data: ', data)            res.json(data)        })        .catch((error) => {            console.log('Error: ', error)        })})router.post('/save', (req, res) => {    const data = req.body    const newPhones = new Phones(data)    console.log('Body: ', req.body)    newPhones.save((error) => {        if (error) {            res.status(500).json({ message: 'Sorry, internal server errors' })            return        }        return res.json({            message: 'Your phone has been saved!'        })    })})module.exports = router;