<script lang="ts">
import { defineComponent } from 'vue'
import Heading from './heading.vue'

export default defineComponent({
  name: 'App',
  components: {
    Heading
  }
})
</script>

<style lang="scss">
  @import './assets/scss/_variables.scss';

  .container {
    input {
      border-radius: 4px; // Just to test fp-money border radius override
    }

    .bluebar {
      position: absolute;
      top: -350px;
      height: 450px;
      width: 100%;
      background-color: $color-primary;
      transform: skewY(-20deg);
      box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, .4);
      z-index: 3;
    }
    .greenbar {
      position: absolute;
      top: 100px;
      height: 250px;
      width: 100%;
      background-color: $color-secondary;
      transform: skewY(-20deg);
      box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, .4);
      z-index: 2;
    }
    .orangebar {
      position: absolute;
      top: 350px;
      height: 250px;
      width: 100%;
      background-color: $color-tertiary;
      transform: skewY(-20deg);
      box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, .4);
      z-index: 1;
    }
  }
</style>

<template>
  <div class="container">
    <div class="bluebar"></div>
    <div class="greenbar"></div>
    <div class="orangebar"></div>
    <div class="app">
      <Heading></Heading>
      <transition mode="out-in" name="slide-left">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>