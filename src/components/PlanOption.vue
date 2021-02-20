<template>
  <div class="frequency">
    <span >Monthly</span>
    <Switcher @switched="getSwitchValue"/>
    <span>Yearly</span>
  </div>
</template>

<script>
import { pricing } from '../composables/pricing'
import Switcher from './Switcher.vue'
export default {
  components: { Switcher },
  setup() {
    const getSwitchValue = checked => console.log('in plan option',checked)
    return { getSwitchValue }
  }
}
</script>
<style lang="scss">
  .frequency {
    display: flex;
    > * {
      margin: 30px;
    }
  }
</style>
