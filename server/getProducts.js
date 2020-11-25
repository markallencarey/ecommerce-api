const products = require('../products.json')

const getProducts = (req, res) => {
  const {price} = req.query
  if (!price) {
    res.status(200).send(products)
  } else {
    const filteredProducts = products.filter((val) => 
    val.price >= parseInt(req.query.price)
    )
    res.status(200).send(filteredProducts)
  }
}

module.exports = getProducts