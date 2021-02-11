<template>
  <SectionBlock 
    :title="blockContent.title" 
    :resume="blockContent.resume"
    class="story" 
  >
    <template #image>
      <picture>
        <source media="(max-width: 400px)" srcset="../assets/img/home/mobile/beautiful-stories.jpg">
        <source media="(max-width: 800px)" srcset="../assets/img/home/tablet/beautiful-stories.jpg">
        <!-- <source media="(min-width: 1200px)" srcset="../assets/img/home/tablet/beautiful-stories.jpg"> -->
        <img src="../assets/img/home/desktop/beautiful-stories.jpg" :alt="blockContent.alt">
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
      title: 'Beautiful stories every time',
      resume: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
      alt: 'laptop on a desk'
    }

    return { blockContent }
  }
}
</script>
<style lang="scss">
.story {
  max-height:600px;
  flex-direction: row-reverse;
  
}
</style>