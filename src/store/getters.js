const getters =  {
  token: state => state.user.token,
  path: state => state.user.path,
  userinfo: state => state.user.userinfo,
  cartList: state => state.cart.cartList
}

export default getters