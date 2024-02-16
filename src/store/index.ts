import { reactive } from "vue";

const state = reactive({
  wishlist: [],
});

const methods = {
  addwishlist(item) {
    state.wishlist.push({ ...item, count: 1 });
  },
  removewishlist(id) {
    state.wishlist = state.wishlist.filter((i) => i.id !== id);
  },
  countChangeHandler(id, count) {
    if (count < 1) {
      this.removewishlist(id);
    }
    state.wishlist = state.wishlist.map((item) => {
      return item.id === id ? { ...item, count } : item;
    });
  },
};

const getters = {
  totalPrice(id) {
    const product = state.wishlist.find((i) => i.id === id);
    return product.price * product.count;
  },
  totalOfCard() {
    return state.wishlist.reduce(
      (acc, item) => acc + item.price * item.count,
      0,
    );
  },
};

export default {
  state,
  methods,
  getters,
};
