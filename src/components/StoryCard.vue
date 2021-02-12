<template>
  <div>
    <img :src="story.img.desktop" :alt="story.title">
    <h3>{{ story.title }}</h3>
    <p>{{ story.author }}</p>
    <hr>
    <span class="btn-arrow"></span>
  </div>
</template>

<script>
export default {
  props: {
    story: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">

</style>