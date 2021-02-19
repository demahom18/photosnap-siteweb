<template>
  <div class='stories-page'>
    <div class="featured-story">
      <div>
        <span class="hero-title">Last month's featured story</span>
        <h2>Hazy Full moon of appalachia</h2>
        <span>date+author</span>
        <p>
          The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged
        </p>
        <ArrowButton btnText="Read the story" />
      </div>
      <picture class="img">
        <source 
          srcset="../assets/img/stories/tablet/moon-of-appalacia1.jpg"
          media="(max-width: 1200px)" 
        >
        <source 
          srcset="../assets/img/stories/tablet/moon-of-appalacia2.jpg"
          media="(max-width: 940px)" 
        >
        <source 
          srcset="../assets/img/stories/tablet/moon-of-appalacia3.jpg"
          media="(max-width: 768px)" 
        >
        <source 
          srcset="../assets/img/stories/mobile/moon-of-appalacia.jpg"
          media="(max-width: 375px)" 
        >
        <img 
          src="../assets/img/stories/desktop/moon-of-appalacia.jpg" 
          alt="mount appalachia"
        />
      </picture>
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

<style lang="scss">
@import '../assets/mixins.scss';
.stories-page {

  .featured-story {
    position: relative;
    width: 100%;

    div {
      position: absolute;
      color: white;
      top:50%;
      padding: 1em .5em;
      left: 0;
      transform: translate(120px, -50%);
      width: 400px;
      @include flexBox(column);
      gap: min(24px, 1.7vw);
      letter-spacing: 2px;
    }

    span.hero-title {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;      
    }

    h2 {
      font-size: min(2.8vw, 40px);
    }

    p {
      @include setTypo(min(1vw, 16px), 24px);
      letter-spacing: 1.3px;
      opacity: .6;
    }
    path { stroke: white;}

    .img {
      display: block;
    }

    .btn-arrow span:hover {
      border-color:white;
    }
  }
  .stories{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}

@media only screen and (max-width: 1080px){
  .stories-page .featured-story div{
   p {
     font-size: 11px !important;
   } 
  }
}
</style>