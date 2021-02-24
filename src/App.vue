<template>
  <div id="nav">
    <NavBar />
  </div>
  <div id="page">
    <router-view />
  </div>
  <Footer />
</template>
<script>

import { provide } from 'vue'
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
import stories from './composables/stories'
export default {
  components: {
    NavBar,
    Footer
  },
  setup () {
    provide('stories', stories)
  }
}
</script>

<style lang="scss">
#page {
  max-width: 1440px;
  margin: 0 auto;;
}

</style>
