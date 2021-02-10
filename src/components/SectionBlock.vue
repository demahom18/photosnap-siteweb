<template>
  <div class="text">
    <h2>{{ title }}</h2>
    <p>{{ resume }}</p>
    <span class="btn">
      {{ btnText }} 
      <svg class="btn-arrow" width="42" height="12" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 7H41.864" stroke="black"/><path d="M35.4282 1L41.4282 7L35.4282 13" stroke="black"/></svg>
    </span>
  </div>
  <div class="img">
    <slot name="image"></slot>
  </div>
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
      required: true
    }
  }
}
</script>

<style>

</style>