<template>
  <PricingHero class="pricing-hero"/>
  <PlanOption/>
  <CompareTable/>
  <BottomPage/>
</template>

<script>
import PricingHero from '../components/PricingHero.vue'
import CompareTable from '../components/CompareTable.vue'
import PlanOption from '../components/PlanOption.vue'
import BottomPage from '../components/BottomPage.vue'

export default {
  components: { PricingHero, PlanOption, BottomPage, CompareTable },
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