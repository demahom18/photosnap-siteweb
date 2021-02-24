<template>
  <transition-group
    :tag="tag"
    @before-enter="beforeEnter"
    @enter="enter"
  >
    <slot />
  </transition-group>
</template>

<script>
import gsap from 'gsap'
export default {
  props: {
    tag: {
      type: String,
      required: false,
      default: undefined
    }
  },
  setup () {
    const beforeEnter = (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateY(50px)'
    }
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.3 * el.dataset.index,
        onComplete: done
      })
      // TODO USE DATASET TO SET THE OPACITY
      // if (el.tagName.toLowerCase() === 'p') {
      //   el.style.opacity = 0.6
      //   return el
      // }
    }
    return {
      beforeEnter,
      enter
    }
  }
}
</script>

<style>

</style>
