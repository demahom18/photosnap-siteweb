<template>
  <div class="comparison">
    <h2>Compare</h2>
    <table>
      <thead>
        <tr>
          <th>Features</th>
          <th v-for="plan in plans" :key="plan[0]">{{ plan[0] }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="feat in features" :key="feat">
          <td>{{ feat }}</td>
          <template v-for="plan in plans" :key="plan[0]">
            <td v-if="plan[1].features.includes(feat)">
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
            </td>
            <td v-else></td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { pricing } from '../composables/pricing'
export default {
  setup() {
    const plans =  Object.entries(pricing)
    let features = Array.from(plans)[2][1].features
    
    return { plans, features }
  }
}
</script>

<style lang="scss">
.comparison {
  display: grid;
  place-content: center;
  margin: 0 0 50px;

  > * {
    text-align: center;
  }
  
  table {
    width: min(730px, 90vw);
    margin: 50px 0;
    text-align: left;
    border-collapse: collapse;
  }

  th {
    text-transform: capitalize;
    padding: 10px 0;
    font-size: 1rem;
    letter-spacing: 2px;
    transform: translateX(20px);
    border-bottom: 2px solid rgba($color: #000000, $alpha: .3);
    + th {
      transform: translateX(10px)
    }
  }
  td {
    border-bottom: 1px solid rgba($color: #000000, $alpha: .3);
    padding: 10px 0;
    transform: translateX(20px);
    text-transform: uppercase;
    font-weight: bold;
    font-size: .75rem;
    letter-spacing: 2px;
  }
}
</style>