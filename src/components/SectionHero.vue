<template>
  <SectionBlock 
    :title="blockContent.title" 
    :resume="blockContent.resume" 
    btnText="Get an invite"
    class='hero'
  >
    <template #image>
      <picture>
        <source media="(max-width: 420px)" srcset="../assets/img/home/mobile/create-and-share.jpg">
        <source media="(max-width: 800px)" srcset="../assets/img/home/tablet/create-and-share.jpg">
        <img src="../assets/img/home/desktop/create-and-share.jpg" :alt="blockContent.alt">
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
      title: 'Create and share your photo stories.',
      resume: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
      alt: 'Man on a bridge`'
    }

    return { blockContent }
  }
}
</script>
<style lang="scss">
.hero {
  path {
    stroke: white;
  };
  .text-wrap {
    background: black;
    color:white;
  }
}

@media only screen and (max-width:420px) {
  .hero {
    padding: 0 0 30px;
    background: black;
  }
}
</style>