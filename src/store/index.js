import {createStore} from 'vuex';

export default createStore({
  state: {
    orderCardItems: []
  },
  mutations: {
    setItem: (state, {name, value}) => {
      const item = state.orderCardItems.find(item => item.name === name);
      if (item) {
        item.value = value;
      } else {
        state.orderCardItems.push({
          'name': name,
          'value': value,
        });
      }
    },
  },
  actions: {},
  modules: {}
});
