<template>
  <div class="home">
    <SectionHero />
    <SectionStory />
    <SectionDesign />
    <StoryList />
    <FeaturesSection />
  </div>
</template>

<script>

import FeaturesSection from '../components/FeaturesSection.vue'
import SectionDesign from '../components/SectionDesign.vue'
import SectionStory from '../components/SectionStory.vue'
import SectionHero from '../components/SectionHero.vue'
import StoryList from '../components/StoryList.vue'
export default {
  name: 'Home',
  components: {
    FeaturesSection,
    SectionDesign,
    SectionStory,
    SectionHero,
    StoryList
  }
}
</script>
