<template>
  <div class="story-card">
    <div class="story-infos">
      <div class="text">
        <span v-if="showDate">{{ myStory.date}}</span>
        <h3>{{ myStory.title }}</h3>
        <p>by {{ myStory.author }}</p>
      </div>
      <hr> 
      <ArrowButton btnText="Read the story"/>
    </div>
    <div class="story-img">
      <picture>
        <source 
          media="(max-width: 900px)" 
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
import { ref } from 'vue'
import ArrowButton from './ArrowButton.vue'
export default {
  components: { ArrowButton },
  props: {
    story: {
      type: Object,
      required: true
    },
    showDate: {
      type: Boolean,
      default: false
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

  p, span {
    font-size: .9em;
  }

  &:after {
    content: '';
    position:absolute;
    bottom: 0px;
    width: 100%;
    height: 10px;
    z-index: -5;
    transform: translateY(-100%);
    background: $accent;
    transition: .3s;
  }

  &:hover {
    transform: translateY(-8px);

    &:after {
      transform: translateY(2px);
    }
  }
  .story-infos, hr {
    position: absolute;
    bottom: 2.3em;
    width:100%;
    padding: 0 2.3em;
  }

  hr { 
      max-width: 80%; 
      opacity:.6;
      height: 1px;
    }

  h3 { text-transform: initial;}
  .text{
    padding-bottom: 1em;
    margin-bottom: 1em;
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

    span:hover {
      border-color: white;
    }
  }
}
</style>