<template>
  <div class="stories-page">
    <StoryFeatured />
    <div class="stories">
      <GroupTransition>
        <template
          v-for="(story, index) in stories"
          :key="story.title"
        >
          <StoryCard
            :story="story"
            :show-date="true"
            :data-index="index"
          />
        </template>
      </GroupTransition>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
import GroupTransition from '../components/shared/GroupTransition.vue'
import StoryCard from '../components/StoryCard.vue'
import StoryFeatured from '../components/StoryFeatured.vue'
export default {
  components: {
    StoryCard,
    StoryFeatured,
    GroupTransition
  },
  setup () {
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
