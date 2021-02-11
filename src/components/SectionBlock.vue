<template>
  <section class='section-block'>
    <div class="text-wrap">
      <div>
        <h2>{{ title }}</h2>
        <p>{{ resume }}</p>
        <span class="btn btn-arrow">
          {{ btnText }} 
          <svg width="42" height="12" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 7H41.864" stroke="black"/><path d="M35.4282 1L41.4282 7L35.4282 13" stroke="black"/></svg>
        </span>
      </div>
    </div>
    <div class="img">
      <slot name="image"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
     resume: {
      type: String,
      required: true
    },
    btnText: {
      type: String,
      default: 'View the stories'
    },
    isHero: {
      type: Boolean,
      default:false
    }
  }
}
</script>
<style lang='scss'>
@import '../assets/mixins.scss';
@import '../assets/styles.scss';

.section-block {
  @include flexBox();
  max-height:650px;
  .text-wrap {
    padding: 72px 33px;    
    width: min(610px, 40vw);
    display: grid;
    place-content: center;
    > * {
      max-width: 400px;
    }
    h2 { 
      @include setTypo(32px, 40px);
      letter-spacing: 3.33px;
    }
    p {
      padding: 16px 0;
      opacity:.6;
    }
    
  }
  img { 
    width: min(830px, 60vw);
    height:100%;
  }
}

.btn-arrow {
  padding:0;
  svg {
    transform: translateY(2px);
  }
} 

@media only screen and (max-width: 800px){

.section-block {

  .text-wrap {
    width: min(60vw, 500px)
  }
  img { 
    width: min(300px, 40vw);
  }
}
}

@media only screen and (max-width:420px) {
.section-block {
  flex-direction: column-reverse;

  .text-wrap {
    width: 100%;
    padding:0;
    > * {
      padding: 33px;
    }
  }
  picture {
    height:0;
  }
  img { 
    width: 100vw;
    height: auto;
  }
}
}
</style>