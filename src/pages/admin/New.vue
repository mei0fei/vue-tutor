<template>
  <product-from  @save-product='addProduct' :model='model' :manufacturers='manufacturers'></product-from>
</template>

<script>
import ProductFrom from '../../components/product/ProductForm'

export default {
  data () {
    return {
      model: {},
      manufacturers: [
        {id: 1, name: 'apple'},
        {id: 2, name: '华为'}
      ]
    }

  },
  components: {
    'product-from': ProductFrom
  },
  methods: {
    addProduct (model) {
      console.log('model', model)
      this.$store.dispatch('addProduct', model)
      //this.$store.commit('add_product', model)
    }
  }
}

</script>
