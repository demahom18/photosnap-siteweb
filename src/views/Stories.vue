<template>
  <div class='stories-page'>
    <StoryFeatured />
    <div class="stories">
      <template v-for="story in stories" :key="story.title">
        <StoryCard :story="story" :showDate="true"/>  
      </template>
    </div>
  </div>
</template>

<script>
import { inject } from "vue"
import StoryCard from '../components/StoryCard.vue'
import StoryFeatured from '../components/StoryFeatured.vue'
export default {
  components: { 
    StoryCard,
    StoryFeatured 
  },
  setup() {
    const stories = inject('stories')
    return { stories }
  }
}
</script>

<style lang="scss">

.stories {
  display:grid;
  grid-template-columns: repeat(4, 1fr);
}

@media only screen and (max-width:940px) {
  .stories {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width:750px) {
  .stories {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width:480px)  {
  .stories {
    grid-template-columns: 1fr;
   
    > * {
      place-self: center;
    }
  }
}
</style>