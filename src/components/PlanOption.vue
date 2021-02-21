<template>
  <div class="plan-options">
    <div class="frequency">
      <span :class="{ bold: !isYearly }">Monthly</span>
      <Switcher @switched="getCheckValue"/>
      <span :class="{ bold: isYearly }">Yearly</span>
    </div>

    <div class="plans">
      <div 
        v-for="plan in plans" 
        :key="plan[0]"
        class="option" 
        :class="{ selected: plan[0].toLowerCase() === 'pro' }"
      >
        <h3>{{ plan[0] }}</h3>
        <span class="description">{{ plan[1].description }}</span>
        <p v-if="!isYearly">
          <span class="price">${{ plan[1].price.monthly }}.00</span>
          <span>per month</span>
        </p>
        <p v-else>
          <span  class="price">${{ plan[1].price.yearly }}.00</span>
          <span>per year</span>
        </p>
        <span @click="setSelected" class="btn btn-black btn-pricing">Pick plan</span>
      </div>
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
    
    const setSelected = e => {
      const options = document.getElementsByClassName('option')

      //remove the selected class on every elements
      Array.from(options).forEach(opt => opt.classList.remove('selected'))

      //add selected class on the element clicked
      e.target.parentElement.classList.add('selected')
    }

    return {
      plans,  
      isYearly, 
      setSelected, 
      getCheckValue,
    }
  }
}
</script>
<style lang="scss">
@import '../assets/styles.scss';

  .plan-options {
    margin: 120px 50px;
  }
  .frequency {
    @include flexBox($just: center);
    margin-bottom: 20px;
    > * {
      padding: 30px;
      display: block;
    }
    span:not(.slider) { 
      opacity: .6;
      font-size: 1.5rem;
      font-weight: bold;
      transition: opacity .5s;
    }
    span.bold  {
      opacity:1
    }
  }

  .plans {
    @include flexBox($just: center);
    flex-shrink: 2;
    gap: 30px;
    
    .description { 
      opacity: .7;
    }
    .option {
      height: 410px;
      background: $secondary;
      transition: all .3s ease-out;
      max-width: 350px;
      flex-basis: 350px;
      @include flexBox(column,$al:center, $just: space-around);
      text-align: center;
      padding: 20px;

      &.selected {
        background: black;
        color: white;
        transform: scale(1.1);
        transition: all .3s ease-in;
        .btn {
          background: $secondary;
          color: black
        }
      }

      h3 { 
        text-transform: capitalize;
        font-size: 1.5rem
      }
      p { 
        @include flexBox(column); 
        gap: 20px;

        span:not(.price) { opacity: .7; }
      }
      .price {
        font-size: 3.7rem;
        font-weight: bold;
      }
    }

    .btn.btn-pricing:hover {
      background: #aaa;
    }
  }

@media only screen and (max-width:990px) and (min-width: 690px) {
  .plans {
    flex-direction: column;
    justify-content: flex-start;
    .option {
      text-align: left;
      max-width: 100%;
      position: relative;
      > * {
        position: absolute;
      }

      h3, .description, .btn {
        left:40px;
        top:15%;
      }
      .description {
        top:35%;
        max-width: 270px;
      }

      .btn {
        top: 70%;
      }
      span + p {
        top: 20%;
        right: 50px;
        align-items:flex-end;

        .price { font-size: 3.2rem;}
      }
    }
  }
 }

@media only screen and (max-width:690px) {
  .plan-options {
    margin: 80px 20px;

    .option.selected {
      transform: scale(1);
    }
  }

  .frequency {
    span:not(.slider) {
      font-size: 1.3rem;
      padding: 30px 10px
    }
  }

  .plans {
    flex-direction: column;

    .option {
      max-width: 100%;
      flex-basis: 410px;

      .description {
        width: min(100%, 400px)
      }
      .price { font-size: 3.4rem;}
    }
  }
}
</style>
