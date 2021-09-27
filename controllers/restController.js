const db = require('../models')
const restaurant = require('../models/restaurant')
const Restaurant = db.Restaurant

const restController = {
  getRestaurants: (req, res) => {
    return res.render('restaurants')
  }
  
}

module.exports = restController