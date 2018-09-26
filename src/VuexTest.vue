<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
    <button @click="incrementAsync({amount: 10})">delay +</button>
    <p>{{ doneTodosCount }}</p>
    <p>message: <input type="text" v-model='message'></p>

  </div>

</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  computed: {
      message: {
        get () {
          return this.$store.state.message
        },
        set (val) {
          this.$store.commit('updateMessage', val)
        }
      },
      ...mapState({
        count: state => state.count
      }),
      /* count () {
        return this.$store.state.count
      }, */
      ...mapGetters({
        doneTodosCount: 'doneTodosCount'
      })
      /* doneTodosCount () {
        return this.$store.getters.doneTodosCount
      } */
  },
  methods: {
    /*
    ...mapMutations([
      'increment',
      'decrement'
    ])*/
    increment () {
      this.$store.commit('increment', {amount: 10})
    },
    decrement () {
      this.$store.commit('decrement', {amount: 10})
    },
    incrementAsync (payload) {
      //console.log('incrementAsync one : ' + payload.amount)
      this.$store.dispatch('incrementAsync', payload)
    }
  }
}
</script>
