<template>
  <div>
    <PricingHero class="pricing-hero" />
    <PricingPlanOption />
    <PricingCompareTable />
    <BottomPage />
  </div>
</template>

<script>
import PricingHero from '../components/PricingHero.vue'
import PricingCompareTable from '../components/PricingCompareTable.vue'
import PricingPlanOption from '../components/PricingPlanOption.vue'
import BottomPage from '../components/shared/BottomPage.vue'

export default {
  components: { PricingHero, PricingPlanOption, BottomPage, PricingCompareTable }
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
