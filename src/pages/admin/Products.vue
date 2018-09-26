<template>
  <div class='col-lg-9 col-md-9 col-sm-12 col-xs-12'>
    <table class='table table-striped'>
      <thead>
        <tr>
          <th>名称</th>
          <th>价格</th>
          <th>厂家</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='product in products'>
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.manufacturer}}</td>
          <td>{{product.description}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    computed: {
      products () {
        return this.$store.state.products
      }
    }
  }
</script>
