<template>
  <div>
    <label class="switch">
      <input 
        type="checkbox" 
        v-model="checked"
        @change="$emit('switched', checked)"
      >
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  emits: ['switched'],
  setup() {
    const checked = ref(false)
    
    return { checked }
  }
}
</script>

<style lang="scss">
@import '../assets/styles.scss';

.switch {
  position: relative;
  display: block;
  width: 64px;
  height: 32px;
}

.switch input { display: none}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left:0;
  bottom:0;
  right: 0;
  background: $secondary;
  transition: .5s;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, .5);
}
.slider:before {
  position: absolute;
  content:'';
  bottom: 14px;
  background-color: black;
  transition: .5s;
}
input:checked + .slider {
  background-color:black;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, .5);
}
input:checked + .slider::before {
  transform: translate(32px, -50%);
  background: $secondary;
}

.slider.round {
  border-radius: 30px;
}
.slider.round:before {
  width: 40%;
  height: 75%;
  top:50%;
  left:3px;
  transform: translateY(-50%);
  border-radius: 50% ;
}
</style>