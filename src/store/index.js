import { createStore } from "vuex";

export default createStore({
  state: {
    orderCardItems: [],
    isDone: true,
  },
  mutations: {
    setItem: (state, { name, value }) => {
      const item = state.orderCardItems.find((item) => item.name === name);
      if (item) {
        item.value = value;
      } else {
        state.orderCardItems.push({
          name: name,
          value: value,
        });
      }
    },
  },
  getters: {
    isDone(state) {
      return state.isDone;
    },
  },
  actions: {},
  modules: {},
});
