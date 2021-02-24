<template>
  <div id="nav">
    <NavBar />
  </div>
  <div id="page">
    <router-view v-slot="{ Component }">
      <transition
        name="route"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
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

/**route transition */
.route-enter-from {
  transform: translateX(100%);
}

.route-enter-active,
.route-leave-active {
  transition: transform .5s ease;
}

.route-leave-to {
  transform: translateX(-100%);
}
</style>
