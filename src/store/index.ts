import { createStore } from "vuex";
import {
  cartGetters,
  cartMutations,
  cartStates,
  cartActions,
} from "./storeStateMutations/cart";

export default createStore({
  state: {
    cartStates,
  },
  mutations: {
    ...cartMutations,
  },
  getters: {
    ...cartGetters,
  },
  actions: {
    ...cartActions,
  },
});
