const express = require("express")
const router = express.Router()
const {getItems, getItemById, getItemsByCategory} = require("../controllers/itemsController")
// 
router.route("/")
.get(getItems)

router.route("/id/:id")
.get(getItemById)

router.route("/category/:category")
.get(getItemsByCategory)


module.exports = router