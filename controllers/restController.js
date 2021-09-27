const db = require('../models')
const restaurant = require('../models/restaurant')
const Restaurant = db.Restaurant

const restController = {
  getRestaurants: (req, res) => {
    return Restaurant.findAll({ raw: true }).then(restaurants =>{
      res.render('admin/restaurants', {restaurant: restaurant })
    })  
  }
}

module.exports = restController