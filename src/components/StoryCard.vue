<template>
  <div class="story-card">
    <div class="story-infos">
      <div class="text">
        <h3>{{ myStory.title }}</h3>
        <p>by {{ myStory.author }}</p>
      </div>
      <hr> 
      <ArrowButton btnText="Read the story"/>
    </div>
    <div class="story-img">
      <picture>
        <source 
          media="(max-width: 420px)" 
          :srcset="require(`../assets/img/stories/mobile/${myStory.img}`)"
        >
        <img 
          :src="require(`../assets/img/stories/desktop/${myStory.img}`)" 
          :alt="myStory.title"
        />
      </picture>
    </div> 
    
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import ArrowButton from './ArrowButton.vue'
export default {
  components: { ArrowButton },
  props: {
    story: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const myStory = ref(props.story)

    return {
      myStory
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles.scss';

.story-card {
  position: relative;
  width: fit-content;
  color: white;
  transition: .3s;

  &:after {
    content: '';
    position:absolute;
    bottom: 0px;
    width: 100%;
    transform: translateY(-100%);
    background: $accent;
  }

  &:hover {
    transform: translateY(-6px);

    &:after {
      height: 10px;
      transform: translateY(2px);
    }
  }
  .story-infos, hr {
    position: absolute;
    bottom: 40px;
    width:100%;
    padding: 0 40px;
  }

  hr { 
      max-width: 80%; 
      opacity:.6;
      height: 1px;
    }

  h3 { text-transform: initial;}
  .text{
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  .btn { 
    position: relative; 
    display: inline-block;
    width: 100%;

    path {
      stroke: white;
    }

    svg {
      position: absolute;
      right: 0;
    }
  }

  // img {
  //   width: min(375px, 100vw);
  // }
}
</style>