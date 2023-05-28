const mongoose = require('mongoose')

const goodsSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	category: {
		type: Number,
		required: true,
	}
})

module.exports = mongoose.model('Goods', goodsSchema)