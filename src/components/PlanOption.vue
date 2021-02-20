<template>
  <div class="frequency">
    <span :class="{ bold: !isYearly }">Monthly</span>
    <Switcher @switched="getCheckValue"/>
    <span :class="{ bold: isYearly }">Yearly</span>
  </div>

  <div class="plans">
    <div class="option" v-for="plan in plans">
      <h3>{{ plan[0] }}</h3>
      <p>{{ plan[1].description }}</p>
      <span v-if="!isYearly" class="price">
        {{ plan[1].price.monthly }}
      </span>
      <span v-else class="price">
        {{ plan[1].price.yearly }}
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { pricing } from '../composables/pricing'
import Switcher from './Switcher.vue'
export default {
  components: { Switcher },
  setup() {    
    const isYearly = ref(false)

    const getCheckValue = checked =>{
      checked === true 
        ? isYearly.value = true 
        : isYearly.value = false 
      
    }
    const plans =  Object.entries(pricing)
    console.log(typeof plans[1][1].price.monthly)

    return {
      plans,  
      isYearly, 
      getCheckValue 
    }
  }
}
</script>
<style lang="scss" scoped>
  .frequency {
    display: flex;
    > * {
      padding: 30px;
      display: block;
    }
    span { 
      opacity: .6;
      font-size: 1.5rem;
      font-weight: bold;
    }
    span.bold  {
      opacity:1
    }
  }
</style>
