<template>
  <div class='stories-page'>
    <div class="featured-story">
      <picture class="img">
        <source 
          srcset="../assets/img/stories/desktop/moon-of-appalacia.jpg"
          media="(min-width: 940px)" 
        >
        <source 
          srcset="../assets/img/stories/tablet/moon-of-appalacia2.jpg"
          media="(max-width: 940px)" 
        >
        <source 
          srcset="../assets/img/stories/mobile/moon-of-appalacia.jpg"
          media="(max-width: 400px)" 
        >
        <img 
          src="../assets/img/stories/mobile/moon-of-appalacia.jpg" 
          alt="mount appalachia"
        />
      </picture>
      <div>
        <span class="hero-title">Last month's featured story</span>
        <h2>Hazy Full moon of appalachia</h2>
        <span>March 2nd 2020 by John Appleseed</span>
        <p>
          The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged
        </p>
        <ArrowButton btnText="Read the story" />
      </div>
    </div>
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
import ArrowButton from '../components/ArrowButton.vue'
export default {
  components: { 
    StoryCard,
    ArrowButton 
  },
  setup() {
    const stories = inject('stories')
    return { stories }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

.featured-story {
  @include flexBox(column)
}
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