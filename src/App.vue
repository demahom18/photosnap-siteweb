<template>
  <div id="nav">
    <NavBar/>
  </div>
  <div id="page">
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar },
}
</script>
<style lang="scss">
#page { 
  max-width: 1440px;
  margin: 0 auto;;
}

</style>
