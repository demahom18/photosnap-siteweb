<template>
  <div class="story-list">
    <div v-for="story in latestStories" :key="story.title">
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
  }

  img {
    // transform: translateY(20px);
  }
}

@media only screen and (max-width:1000px) {
  .story-list {
    flex-wrap:wrap;
    // flex-grow: 1;
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

@media only screen and (max-width:780px) {
  .story-list > * {
    max-width: 50%;
  }
}

@media only screen and (max-width: 420px) {
  .story-list > * {
    max-width: 100%;
  }
}
</style>