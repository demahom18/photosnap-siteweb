
<template>
  <div>
    <SectionBlock
      title="Pricing"
      resume="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
      :has-button="false"
    >
      <template #image>
        <picture>
          <source
            media="(max-width: 420px)"
            srcset="../assets/img/pricing/mobile/hero.jpg"
          >
          <source
            media="(max-width: 800px)"
            srcset="../assets/img/pricing/tablet/hero.jpg"
          >
          <img
            src="../assets/img/pricing/desktop/hero.jpg"
            alt="photograph"
          >
        </picture>
      </template>
    </SectionBlock>
  </div>
</template>

<script>
import SectionBlock from './SectionBlock.vue'
export default {
  components: { SectionBlock }
}
</script>

<style lang="scss">
</style>
