<template>
  <PricingHero class="pricing-hero"/>
  <PlanOption/>
  <BottomPage/>
</template>

<script>
import PricingHero from '../components/PricingHero.vue'
import PlanOption from '../components/PlanOption.vue'
import { pricing } from '../composables/pricing'
import BottomPage from '../components/BottomPage.vue'

export default {
  components: { PricingHero, PlanOption, BottomPage },
  setup() {
    
  }
}
</script>

<style lang="scss">
.pricing-hero {
  .text-wrap {
    background:black;
    color:white;
  }  
}

</style>