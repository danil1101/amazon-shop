const express = require('express')
const router = express.Router()
const { getItems, getItemById, getItemsByCategory, addItemToCart } = require('../controllers/itemsController')
//
router.route('/')
  .get(getItems)

router.route('/id/:id')
  .get(getItemById)

router.route('/category/:category')
  .get(getItemsByCategory)

router.route('/cart/:id')
  .post(addItemToCart)

module.exports = router
