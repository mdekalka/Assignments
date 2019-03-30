const { generateToken } = require('../utils/utils')

const token = generateToken()

const mockedProductList = [
  {
    id: 1,
    productName: 'Apples',
    price: 10,
    quantity: 5,
    icon: '/static/images/apple.svg'
  },
  {
    id: 2,
    productName: 'Fresh Orange Juice',
    price: 2,
    quantity: 2,
    icon: '/static/images/juice.svg'
  }
]

const defaultUser = {
  errorCode: 0,
  errorMessage: '',
  token,
  refreshToken: token,
  firstNameEng: 'Princess',
  lastNameEng: 'Bubblegum',
  image: '/static/images/defaultAvatar.png',
  position: 'Don\'t mess with me',
  profileId: 9999,
}

module.exports = {
  mockedProductList,
  defaultUser
}
