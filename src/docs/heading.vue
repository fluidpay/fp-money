<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Heading'
})
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
      padding: var(--spacing-m) 0 var(--spacing-s) 0;
    }

    .menu {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: var(--spacing-l);

      a {
        color: var(--color-white);
        font-size: 16px;
        font-weight: bold;
        margin: 0 var(--spacing-m) 0 var(--spacing-m);
      }
    }
  }
</style>

<template>
  <div class="header">
    <div class="title">
      FluidPay Money Formatter
    </div>
    <div class="menu">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/examples">
        Examples
      </router-link>
      <router-link to="/functions">
        Functions
      </router-link>
      <router-link to="/vue">
        Vue
      </router-link>
      <a
        target="_blank"
        href="http://github.com/fluidpay/fp-money"
      >
        <img
          height="20"
          alt="Github Logomark"
          src="./assets/images/github.png"
        >
      </a>
    </div>
  </div>
</template>
