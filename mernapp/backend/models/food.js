const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodItemsSchema = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: false
    },
    description: {
        type: String,
        required: true
    },
}, { timestamps: true });

const FoodCategorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
},{ timestamps: true });

const items = mongoose.model('food_items', FoodItemsSchema);
const category = mongoose.model('food_categories', FoodCategorySchema);

module.exports = {
    items,
    category
};