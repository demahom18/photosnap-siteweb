<template>
  <div class="comparison">
    <h2>Compare</h2>
    <table v-if="!isMobile">
      <thead>
        <tr>
          <th>The Features</th>
          <th
            v-for="plan in plans"
            :key="plan[0]"
          >
            {{ plan[0] }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="feat in features"
          :key="feat"
        >
          <td>{{ feat }}</td>
          <template
            v-for="plan in plans"
            :key="plan[0]"
          >
            <td v-if="plan[1].features.includes(feat)">
              <!-- eslint-disable -->
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
            </td>
            <td v-else></td>
          </template>
        </tr>
      </tbody>
    </table>
    <table v-else>
      <thead>
        <tr>
          <th>The Features </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="feat in features" :key="feat">
          <td>
            <div class="feat">
              {{ feat }}
            </div>
            <div>
              <div v-for="plan in plans" :key="plan[0]">
                <span class="plan">
                  {{ plan[0] }}
                </span>
                <span v-if="plan[1].features.includes(feat)">
                   <!-- eslint-disable-next-line vue/max-attributes-per-line -->
                  <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                </span>
                <span v-else></span>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue'
import { pricing } from '../composables/pricing'
export default {
  setup () {
    const isMobile = ref()
    const plans = Object.entries(pricing)
    const features = Array.from(plans)[2][1].features

    const checkWindowWidth = () => {
      window.innerWidth > 650
        ? isMobile.value = false
        : isMobile.value = true

      return isMobile.value
    }

    checkWindowWidth()
    window.addEventListener('resize', () => checkWindowWidth())

    return {
      plans,
      features,
      isMobile,
      checkWindowWidth
    }
  }
}
</script>

<style lang="scss">
@import '../assets/mixins.scss';

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
    text-transform: uppercase;
    padding: 20px 0;
    font-size: 1rem;
    letter-spacing: 2px;
    transform: translateX(20px);
    border-bottom: 2px solid rgba($color: #000000, $alpha: .6);
    + th {
      transform: translateX(10px);
    }
  }
  td {
    border-bottom: 1px solid rgba($color: #000000, $alpha: .3);
    padding: 20px 0;
    transform: translateX(20px);
    text-transform: uppercase;
    font-weight: 700;
    font-size: .75rem;
    letter-spacing: 2px;
    &:last-child {
      transform: translateX(40px);
    }
  }
}

@media only screen and (max-width: 650px) {
  .comparison {
    * { transform: translate(0) !important; }

    table td {
      @include flexBox(column);
      padding: 20px;
      gap: 10px;
      div + div {
        @include flexBox($just: space-between);

        div {
          @include flexBox(column, $al: center);
          .plan { opacity: .6 }
        }
      }
    }
    .feat { font-size: 1.1em;}
  }
}
</style>
