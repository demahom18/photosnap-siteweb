<template>
  <transition
    name="reveal"
    appear
    mode="out-in"
  >
    <slot />
  </transition>
</template>

<style>
.reveal-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}

.reveal-enter-active{
  transition: all 1s;
}

</style>
