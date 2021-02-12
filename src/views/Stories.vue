<template>
  <StoryList/>
</template>

<script>
import StoryList from '../components/StoryList.vue'
import { inject } from 'vue'
export default {
  components: { StoryList },
  setup() {
    const stories = inject('stories')

    return { stories }
  }

}
</script>

<style>

</style>