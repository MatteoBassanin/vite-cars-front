<script >
import AppNav from './components/AppNav.vue';
export default {

  components: {
    AppNav
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <AppNav></AppNav>
      <router-view></router-view>

    </div>
  </div>
</template>


<style lang="sass" >
@use 'bootstrap'
</style>
