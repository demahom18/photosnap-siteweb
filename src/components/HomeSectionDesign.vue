<template>
  <SectionBlock
    :is-visible="isVisible"
    :title="blockContent.title"
    :resume="blockContent.resume"
    class="design"
  >
    <template #image>
      <picture>
        <source
          media="(max-width: 420px)"
          srcset="../assets/img/home/mobile/designed-for-everyone.jpg"
        >
        <source
          media="(max-width: 800px)"
          srcset="../assets/img/home/tablet/designed-for-everyone.jpg"
        >
        <img
          src="../assets/img/home/desktop/designed-for-everyone.jpg"
          :alt="blockContent.alt"
        >
      </picture>
    </template>
  </SectionBlock>
</template>

<script>
import { ref } from 'vue'
import SectionBlock from './SectionBlock.vue'
export default {
  name: 'Home',
  components: { SectionBlock },
  setup () {
    const isVisible = ref(false)
    const blockContent = {
      title: 'Designed for everyone',
      resume: 'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
      alt: 'man with a camera'
    }

    const observer = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio >= 0.2) isVisible.value = true
    }, { threshold: 0.2 })

    setTimeout(() => {
      const design = window.document.querySelector('.design')
      observer.observe(design)
      if (isVisible.value === true) observer.unobserve(design)
    }, 1000)

    return { blockContent, isVisible }
  }
}
</script>
<style lang="scss">
.design {
  max-height:600px;
}

@media only screen and (max-width:420px){
  .design { max-width: 100%;}
}
</style>
