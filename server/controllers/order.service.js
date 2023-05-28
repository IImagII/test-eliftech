const Order = require('../models/order')
const errorHandler = require('../utils/errorHandler')

const createOrder = async (req, res) => {
   try {
      const { name, email, number, address, addCount, totalPrice } = req.body
      const order = await Order.create({
         name,
         email,
         number,
         address,
         addCount,
         totalPrice,
      })

      res.status(201).json(order)
   } catch (e) {
      errorHandler(res, e)
   }
}

module.exports = {
   createOrder,
}
