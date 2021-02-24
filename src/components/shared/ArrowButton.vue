<template>
  <span class="btn btn-arrow">
    <span>{{ btnText }}</span>
    <!-- eslint-disable-next-line vue/max-attributes-per-line -->
    <svg width="42" height="12" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 7H41.864" stroke="black" /><path d="M35.4282 1L41.4282 7L35.4282 13" stroke="black" /></svg>
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
  padding:0 !important;
  position: relative;

  svg {
    transform: translate(10px, 2px);
  }

  span {
    width:fit-content;
    border-bottom: 1px solid transparent;

  }

  span:hover {
    transition: .3s;
    border-color: black;
  }
}

</style>
