<script lang="ts">
import Vue from 'vue'
import FPMoney from '@/fp-money'

export default Vue.extend({
  mounted() {
    new FPMoney({
      container: document.querySelector('#example') as HTMLDivElement,
      value: 5,
      currency: 'usd',
      // locale: 'ar-IQ',
      onChange: (values) => {
        console.log(values)
      }
    })
  }
})
</script>

<style lang="scss">
.basic {
  #example {
    width: 250px;
    margin: 0 auto;
  }
}
</style>

<template>
  <div class="basic">
    <div id="example"></div>
  </div>
</template>
