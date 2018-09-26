import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {API_BASE} from '../config'
import toastr from 'toastr'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    products: [],
    product: {},
    showLoader: false
  },
  getters: {

  },
  mutations: {
    add_product(state){
      state.showLoader = true
    },
    add_product_success (state, payload) {
      //console.log('--------add_product-------')
      state.showLoader = false
      state.product = payload
      state.products.push(payload)

    }
  },
  actions: {
    addProduct ({commit}, payload) {
      console.log('--------addProduct-------')
      commit('add_product');
      axios.post(`${API_BASE}/products`, payload).then(response => {
        //console.log(response.data);
        //console.log(response.status);
        //console.log(response.statusText);
        //console.log(response.headers);
        //console.log(response.config);
        //console.log(response.data)
        commit('add_product_success', response.data)
        toastr.success('添加产品', '成功！')
        
      }).catch(function (error) {
        toastr.error('添加产品', '失败！')
        console.log(error);
      });

    }
  }
})
