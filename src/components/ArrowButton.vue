<template>
   <span class="btn btn-arrow">
      <span>{{ btnText }}</span> 
      <svg width="42" height="12" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 7H41.864" stroke="black"/><path d="M35.4282 1L41.4282 7L35.4282 13" stroke="black"/></svg>
    </span>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: 'View the stories'
    }
  }
}
</script>

<style lang="scss">
.btn-arrow {
  padding:0;
  position: relative;

  svg {
    transform: translate(10px, 2px);
  }

  span {width:fit-content;}
  
  span:after {
    content:'';
    height:2px;
    background:white;
    opacity:0;
    width: 80%;
    transition: .3s;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
 

  span:hover:after {
    transition: .3s;
    opacity: .8;
  }
} 

@keyframes slide {
  0% {
    transform : translate(10px, 2px);
  }
  50% {
    transform : translate(0px, 2px);
  }
  100% {
    transform : translate(10px, 2px);
  }
}
</style>