
const { mockedProductList } = require('../constants/constants')


const shopCart = {
  productList: mockedProductList,

  normalize(product) {

  },

  addProduct(product) {
    if (product) {
      this.productList.push(product)
    }
  },

  removeProduct(productId) {
    return this.productList.filter(product => product.id !== productId)
  },

  getLatest() {
    return this.productList[this.productList.length - 1]
  }
}

module.exports = shopCart
