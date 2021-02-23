<template>
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
      >
    </picture>
    <transition-group
      name="list"
      tag="div"
      appear
    >
      <span
        key="1"
        class="hero-title"
      >Last month's featured story</span>
      <h2 key="2">
        Hazy Full moon of appalachia
      </h2>
      <span key="3">March 2nd 2020 by John Appleseed</span>
      <p key="5">
        The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged
      </p>
      <ArrowButton
        key="6"
        btn-text="Read the story"
      />
    </transition-group>
  </div>
</template>

<script>
import ArrowButton from '../components/ArrowButton.vue'
export default {
  components: {
    ArrowButton
  }
}
</script>

<style lang="scss">
@import '../assets/mixins.scss';

.featured-story {
  @include flexBox(column);

  div {
    background:black;
    color:white;
    padding: 24px;
    > * {
      max-width: 400px;
      margin: 2rem 0;
    }
  }

  .hero-title {
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: bold;
    letter-spacing: 1.4px;
  }

  .btn-arrow path {
    stroke: white !important;
  }

  .btn-arrow span:hover {
    border-color: white;
  }

  p { opacity: .6}
}

@media only screen and (max-width:1100px) {
  .featured-story div > * {
    margin:1rem 0;
  }
}

@media only screen and (min-width: 750px) {
  .featured-story {
    position: relative;

    div {
      position: absolute;
      background: none;
      top: 50%;
      left: 8vw;
      transform: translateY(-50%);
    }
  }
}

/**Transition */
.list-enter-from,
.list-leave-to {
  opacity: .0;
  transform: translateY(-30px)
}

.list-leave-active,
.list-enter-active {
  transition: all 1s ease;
}
</style>
