<template>
  <div class="home">
    <HomeHero />
    <HomeSectionStory />
    <HomeSectionDesign />
    <HomeStoryList />
    <HomeFeaturesSection />
  </div>
</template>

<script>

import HomeFeaturesSection from '../components/HomeFeaturesSection.vue'
import HomeSectionDesign from '../components/HomeSectionDesign.vue'
import HomeSectionStory from '../components/HomeSectionStory.vue'
import HomeHero from '../components/HomeHero.vue'
import HomeStoryList from '../components/HomeStoryList.vue'
export default {
  name: 'Home',
  components: {
    HomeFeaturesSection,
    HomeSectionDesign,
    HomeSectionStory,
    HomeHero,
    HomeStoryList
  }
}
</script>
