const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const Item = require("../models/ItemModel");
const dotenv = require("dotenv")
dotenv.config()

// @desc    Get all goods
// @route   GET /api/items
// @access  Public
const getItems = asyncHandler(async (req, res) => {
    let items;
    try {
        items = await Item.find({});
    } catch (error) {
        console.log(error);
        items = error;
    }
    res.json(items);
}
);

// @desc    Get item by ID
// @route   GET /api/items/id/:id
// @access  Public
const getItemById = asyncHandler(async (req, res) => {
    let item;
    try {
        item = await Item.findById(req.params.id);
    } catch (error) {
        console.log(error);
        item = error;
    }
    res.json(item);
});

// @desc    Get items by category
// @route   GET /api/items/category/:category
// @access  Public
const getItemsByCategory = asyncHandler(async (req, res) => {
    let items;
    console.log(req.params.category)
    try {
        items = await Item.find({category: req.params.category});
    } catch (error) {
        console.log(error);
        items = error;
    }
    res.json(items);
});

module.exports = {
    getItems,
    getItemById,
    getItemsByCategory
};