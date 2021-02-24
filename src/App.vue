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
import Footer from './components/shared/Footer.vue'
import NavBar from './components/shared/NavBar.vue'
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

#nav {
  position: sticky;
  top: 0;
  background: white;
  z-index: 90000;
}
</style>
