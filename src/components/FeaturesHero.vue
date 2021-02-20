<template>
  <div>
    <SectionBlock 
      title="Features"  
      resume="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
      :hasButton="false"
    >
      <template #image>
        <picture>
          <source media="(max-width: 420px)" srcset="../assets/img/features/mobile/hero.jpg">
          <source media="(max-width: 800px)" srcset="../assets/img/features/tablet/hero.jpg">
          <img src="../assets/img/features/desktop/hero.jpg" alt="photograph">
        </picture>
      </template>
    </SectionBlock>
  </div>
</template>

<script>
import SectionBlock from './SectionBlock.vue'
export default {
  components: { SectionBlock },

}
</script>
