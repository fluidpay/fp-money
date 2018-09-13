<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss">
  .header {
    display: flex;
    flex-direction: column;
    width: 100%;

    .title {
      font-size: 42px;
      font-weight: bold;
      color: var(--color-white);
      text-align: center;
      padding: var(--spacing-half) 0 var(--spacing-quarter) 0;
    }

    .menu {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: var(--spacing);

      a {
        color: var(--color-white);
        font-size: 16px;
        font-weight: bold;
        margin: 0 var(--spacing) 0 var(--spacing);
      }
    }
  }
</style>

<template>
  <div class="header">
    <div class="title">FluidPay Money Formatter</div>
    <div class="menu">
      <router-link to="/">Basic</router-link>
      <router-link to="/vue">Vue</router-link>
    </div>
  </div>
</template>
