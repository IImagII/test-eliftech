const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   number: {
      type: String,
      required: true,
   },
   address: {
      type: String,
      required: true,
   },
   addCount: {
      type: String,
      required: true,
   },
   totalPrice: {
      type: String,
      required: true,
   },
})

module.exports = mongoose.model('Order', orderSchema)
