<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav__left">
          <li> <router-link to='/'>首页</router-link> </li>
          <li> <router-link to='/admin'>管理</router-link> </li>
          <li> <router-link to='/cart'>购物车</router-link> </li>

        </ul>
      </div>
    </nav>

    <router-view/>

    <div class="abc" v-show='showLoader'>
      <img id='loadingimg' src='./assets/loading.jpg' />
    </div>


  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    showLoader () {
      return this.$store.state.showLoader
    }
  }
}

</script>

<style>

#app{
  position:relative;
}

.abc {
  position:absolute;
  top:50%;
  left:50%;
  padding:0px;
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
}

#loadingimg {
  width: 300px;
  height: 150px;
}

</style>
