const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const Item = require('../models/ItemModel')
const User = require('../models/UserModel')
const dotenv = require('dotenv')
dotenv.config()

// @desc    Get all goods
// @route   GET /api/items
// @query  pageNumber
// @access  Public
// example of query: /api/items?pageNumber=2
const getItems = asyncHandler(async (req, res) => {
  // should not return all items, but return them in pages
  const page = Number(req.query.pageNumber) || 1
  const pageSize = 10
  const count = await Item.countDocuments()
  const items = await Item.find({}).limit(pageSize).skip(pageSize * (page - 1))
  res.json({ items, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Get item by ID
// @route   GET /api/items/id/:id
// @access  Public
// @returns item
const getItemById = asyncHandler(async (req, res) => {
  let item
  try {
    item = await Item.findById(req.params.id)
  } catch (error) {
    console.log(error)
    item = error
  }
  res.json(item)
})

// @desc    Get items by category
// @route   GET /api/items/category/:category
// @query  pageNumber
// @access  Public
// @returns array of items
// example of query: /api/items/category/desktops?pageNumber=2
const getItemsByCategory = asyncHandler(async (req, res) => {
  const page = Number(req.query.pageNumber) || 1
  const pageSize = 10
  const count = await Item.countDocuments({ category: req.params.category })
  const items = await Item.find({ category: req.params.category }).limit(pageSize).skip(pageSize * (page - 1))
  res.json({ items, page, pages: Math.ceil(count / pageSize) })
})

// @desc add item to user cart
// @route POST /api/items/cart/:id
// @access Private (only logged in users can add items to cart)
// @returns user.cart
const addItemToCart = asyncHandler(async (req, res) => {
  // get current user (the one that's posting the book)
  const token = req.headers.authorization.split(' ')[1]
  if (!token) {
    return res.status(403).json({ message: 'user not authorized' })
  }
  const decodedData = jwt.verify(token, process.env.SECRET_TOKEN)
  const user = await User.findById(decodedData.id)
  // get the item
  const item = await Item.findById(req.params.id)
  // add item to user cart
  user.cart.push(item)
  // save user
  await user.save()
  const updatedUser = await User.findById(decodedData.id)
    .populate('cart')
  res.json(updatedUser.cart)
})

module.exports = {
  getItems,
  getItemById,
  getItemsByCategory,
  addItemToCart
}
