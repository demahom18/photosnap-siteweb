<template>
  <div class="bottom-page">
    <picture>
      <source
        srcset="../assets/img/shared/mobile/bg-beta.jpg"
        media="(max-width:392px)"
      >
      <source
        srcset="../assets/img/shared/tablet/bg-beta.jpg"
        media="(max-width:780px)"
      >
      <img src="../assets/img/shared/desktop/bg-beta.jpg">
    </picture>
    <div>
      <h2 class="text">
        We're in beta. Get your invite today!
      </h2>
      <ArrowButton btn-text="Get an invite" />
    </div>
  </div>
</template>

<script>
import ArrowButton from './ArrowButton.vue'
export default {
  components: { ArrowButton }
}
</script>

<style lang="scss">
@import '../assets/mixins.scss';
.bottom-page {
  position: relative;
  width: 100%;
  display: block;
  color: white;

  div {
    position: absolute;
    width: 100%;
    padding: 0 34px;
    z-index: 5;
    top:50%;
    transform:translateY(-50%);
    @include flexBox($just:space-between,$al:center);
  }

  .text {
    max-width: 400px;
    line-height: 3rem
  }

  .btn-arrow span:hover {
    border-color: white;
  }

  path { stroke: white;}
}

@media only screen and (max-width:700px) {
  .bottom-page div {
    flex-direction: column;
    .text {
      margin-bottom: 5%;
      font-size: 28px;
    }

    img {
      width: 100vw;
      height: auto;
    }
  }
}
@media only screen and (max-width:392px) {
  .bottom-page div .text {
    margin-bottom: 10%;
  }
}
</style>
