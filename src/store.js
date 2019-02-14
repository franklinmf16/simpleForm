import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [],
    pageTwo: [],
  },
  mutations: {
    addItem(state, value) {
      state.lists.push(value);
    },
    addItemPageTwo(state, value) {
      state.pageTwo.push(value);
    },
  },
  actions: {

  },
});
