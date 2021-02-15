<template>
  <div class="home">
    <SectionHero/>
    <SectionStory/>
    <SectionDesign/>
    <StoryList/>
  </div>
</template>

<script>

import SectionDesign from '../components/SectionDesign.vue'
import SectionHero from '../components/SectionHero.vue'
import SectionStory from '../components/SectionStory.vue'
import StoryList from '../components/StoryList.vue'
export default {
  name: 'Home',
  components: { 
    SectionDesign, 
    SectionHero, 
    SectionStory, 
    StoryList
  },
  setup() {
    const blockContent = {
      title: 'Create and share your photo stories.',
      resume: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
      alt: 'Man on a bridge`'
    }

    return { blockContent }
  }
}
</script>