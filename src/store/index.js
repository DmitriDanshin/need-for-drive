import { createStore } from "vuex";

export default createStore({
  state: {
    orderCardItems: [],
    price: {
      min: 0,
      max: 0,
    },
    carData: {
      number: "",
      tank: 0,
      colors: [],
    },
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
    setPrice: (state, { priceMin, priceMax }) => {
      state.price.min = priceMin;
      state.price.max = priceMax;
    },
    setCarData: (state, { number, tank, colors }) => {
      state.carData.number = number ?? "";
      state.carData.tank = tank ?? 0;
      state.carData.colors = colors;
    },
  },
  actions: {},
  modules: {},
});
