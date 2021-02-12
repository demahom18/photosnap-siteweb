<template>
  <div v-for="story in stories" :key="story.title">
    <StoryCard :story="story"/>
  </div>
</template>

<script>
import { inject } from "vue"
import StoryCard from '../components/StoryCard.vue'
export default {
  components: { StoryCard },
  setup() {
    let stories = inject('stories')
  console.log(stories)
    return { stories}
  }
}
</script>

<style>

</style>