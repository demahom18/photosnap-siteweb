<template>
  <SectionBlock 
    :title="blockContent.title" 
    :resume="blockContent.resume" 
    class="design"
  >
    <template #image>
      <picture>
        <source media="(max-width: 400px)" srcset="../assets/img/home/mobile/designed-for-everyone.jpg">
        <source media="(max-width: 800px)" srcset="../assets/img/home/tablet/designed-for-everyone.jpg">
        <img src="../assets/img/home/desktop/designed-for-everyone.jpg" :alt="blockContent.alt">
      </picture>
    </template>
  </SectionBlock>
</template>

<script>

import SectionBlock from './SectionBlock.vue'
export default {
  name: 'Home',
  components: { SectionBlock },
  setup() {
    const blockContent = {
      title: 'Designed for everyone',
      resume: 'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
      alt: 'man with a camera'
    }

    return { blockContent }
  }
}
</script>
<style lang="scss">
.design {
  max-height:600px;
}
</style>