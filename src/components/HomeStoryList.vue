<template>
  <GroupTransition
    tag="div"
    class="story-list"
    appear
  >
    <template v-if="isVisible">
      <div
        v-for="(story, index) in latestStories"
        :key="story.title"
        :class="`story${index}`"
        :data-index="index"
      >
        <StoryCard :story="story" />
      </div>
    </template>
  </GroupTransition>
</template>

<script>
import { computed, ref } from 'vue'
import StoryCard from '../components/StoryCard.vue'
import stories from '../composables/stories'
import GroupTransition from './shared/GroupTransition.vue'
export default {
  components: { StoryCard, GroupTransition },
  setup () {
    const isVisible = ref()
    const latestStories = computed(() => {
      const latest = []
      for (let i = 0; i < 4; i++) {
        latest.push(stories[i])
      }
      return latest
    })
    const observer = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio >= 0.2) isVisible.value = true
    }, { threshold: 0.2 })

    setTimeout(() => {
      const storylist = window.document.querySelector('.story-list')
      observer.observe(storylist)
      if (isVisible.value === true) observer.unobserve(storylist)
    }, 500)

    return {
      latestStories,
      isVisible,
      observer
    }
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
