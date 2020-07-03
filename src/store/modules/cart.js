
const state= {
  cartList: JSON.parse(localStorage.getItem('cartList'))? JSON.parse(localStorage.getItem('cartList')):[]
}

const mutations = {
  setCartList: (state,cartList) => {
    state.cartList = cartList
    localStorage.setItem('cartList',JSON.stringify(cartList))
  }
}


export default {
  namespaced: true,
  state,
  mutations
}