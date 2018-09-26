import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    message: '',
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  mutations: {
    increment (state, payload) {
      //console.log('incrementAsync three : ' + payload.amount)
      state.count += payload.amount
    },
    decrement (state, payload) {
      state.count -= payload.amount
    },
    updateMessage (state, val) {
      state.message = val
    }
  },
  actions: {
    incrementAsync (context, payload) {
      //console.log('incrementAsync two : ' + payload.amount)
      setTimeout(() => {
        context.commit('increment', payload)
      }, 1000)
    }

  }
})
