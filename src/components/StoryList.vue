<template>
  <div class="story-list">
    <div 
      v-for="(story, index) in latestStories" 
      :key="story.title"
      :class="`story${index}`"
    >
      <StoryCard :story="story"/>
    </div>
  </div>
</template>

<script>
import { computed } from "vue"
import StoryCard from '../components/StoryCard.vue'
import stories from '../composables/stories'
export default {
  components: { StoryCard },
  setup() {

    const latestStories = computed(() => {
      let latest = []
      for (let i = 0; i < 4; i++) {
        latest.push(stories[i])
      }
      return latest
    })

    return { latestStories }
  }
}
</script>

<style lang="scss">
.story-list {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  > * {
    width: 375px;
    .story-card {
      margin: 0 auto;
      min-height:100%;
    }

    img {
       min-height:100%;
    }
  }
}

@media only screen and (max-width:900px) {
  .story-list {
    flex-wrap:wrap;
    .btn-arrow {
      font-size: 12px;

      svg {
        width: 32px;
      }
    }

    h3 { font-size: 16px;}

    story-card {
      p, span {
        font-size: 13px;
      }
    }

    > * {
      flex-basis: 375px;
      max-width: 33% ;
    }
  }
}

@media only screen and (max-width:820px) {
  .story-list > * {
    max-width: 50%;
  }
}

@media only screen and (max-width: 450px) {
  .story-list > * {
    max-width: 100%;
  }
}
</style>