import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    VistorName: prompt("Please, Enter Full Name"),
    data_about: [],
    data_services: [],
    data_works: [],
  },

  mutations: {
    set_data_about(state, data_about) {
      state.data_about = data_about;
    },

    set_data_services(state, data_services) {
      state.data_services = data_services;
    },

    set_data_works(state, data_works) {
      state.data_works = data_works;
    },
  },

  actions: {
    async get_data_about({ commit }) {
      await axios
        .get(
          "https://my-json-server.typicode.com/ABDALLAHMETWALLY250/about-data/description"
        )
        .then((res) => {
          commit("set_data_about", res.data);
        });
    },

    async get_data_services({ commit }) {
      await axios
        .get(
          "https://my-json-server.typicode.com/ABDALLAHMETWALLY250/services-data/description"
        )
        .then((res) => {
          commit("set_data_services", res.data);
        });
    },
  },

  async get_data_works({ commit }) {
    await axios
      .get(
        "https://my-json-server.typicode.com/ABDALLAHMETWALLY250/work-dp/works"
      )
      .then((res) => {
        commit("set_data_works", res.data);
      });
  },
});
