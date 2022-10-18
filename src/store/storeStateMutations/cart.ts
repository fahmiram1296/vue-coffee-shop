export const cartStates = [];

export const cartMutations = {
  addCart: function (state: any, payload: any) {
    state.cartStates = payload;
  },
};

export const cartGetters = {
  getCartCount: (state: any) => () => {
    return state?.cartStates?.length;
  },
};

export const cartActions = {
  addToCart({ commit, state }: any, payload: any) {
    const newCart = [...state.cartStates, payload];
    commit("addCart", newCart);
  },
};
