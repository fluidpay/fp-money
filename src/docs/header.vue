<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss">
  @import './assets/scss/_variables.scss';

  .header {
    display: flex;
    flex-direction: column;
    width: 100%;

    .title {
      font-size: 42px;
      font-weight: bold;
      color: $color-white;
      text-align: center;
      padding: $spacing-half 0 $spacing-quarter 0;
    }

    .menu {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: $spacing;

      a {
        color: $color-white;
        font-size: 16px;
        font-weight: bold;
        margin: 0 $spacing-half 0 $spacing-half;
      }
    }
  }
</style>

<template>
  <div class="header">
    <div class="title">FluidPay Money Formatter</div>
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/examples">Examples</router-link>
      <router-link to="/functions">Functions</router-link>
      <router-link to="/vue">Vue</router-link>
      <a target="_blank" href="http://github.com/fluidpay/fp-money">
        <img height="20" alt="Github Logomark" :src="require('@/docs/assets/images/github.png')" />
      </a>
    </div>
  </div>
</template>
