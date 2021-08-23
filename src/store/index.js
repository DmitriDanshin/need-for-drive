import {createStore} from "vuex";

export default createStore({
  state: {
    orderCardItems: [],
    isDone: false,
    price: {
      min: 0,
      max: 0,
    },
    carData: {
      name: "Hyndai, i30 N",
      number: "K 761 HA 73",
      dateFrom: "12.06.2019 12:00",
      tank: 100,
      colors: [],
    },
  },
  mutations: {
    setItem: (state, {name, value}) => {
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
    deleteItem: (state, {name}) => {
      const index = state.orderCardItems.findIndex(
          (item) => item.name === name
      );
      state.orderCardItems.splice(index, 1);
    },
    setPrice: (state, {priceMin, priceMax}) => {
      state.price = {
        min: priceMin,
        max: priceMax,
      };
    },
    setCarData: (state, {number, tank, colors, name, dateFrom}) => {
      const carData = state.carData;
      state.carData = {
        number: number ?? carData.number,
        tank: tank ?? carData.tank,
        colors: colors ?? carData.colors,
        name: name ?? carData.name,
        dateFrom: dateFrom ?? carData.dateFrom
      };
    },
    setOrderState: (state, {orderState}) => {
      state.isDone = orderState;
    },
  },
  getters: {
    isDone(state) {
      return state.isDone;
    },
    price(state) {
      return {
        min: state.price.min,
        max: state.price.max,
      };
    },
    car(state) {
      return state.carData;
    }
  },
  actions: {},
  modules: {},
});
