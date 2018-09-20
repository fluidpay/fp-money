<script lang="ts">
import Vue from 'vue'
import FPMoney from '@/fp-money/fp-money.ts'

export default Vue.extend({
  mounted() {
    new FPMoney({
      container: document.querySelector('#example') as HTMLDivElement,
      value: 86753.09,
      onChange: (values) => {
        console.log(values)
      }
    })
  }
})
</script>

<style lang="scss">
  @import './assets/scss/_variables.scss';
    
  .basic {
    #example {
      width: 250px;
      margin: 0 auto;
      margin-bottom: $spacing;
    }
  }
</style>

<template>
  <div class="basic">
    <div id="example"></div>
    <pre>
      <code class="language-bash">
        npm install fp-money
      </code>
    </pre>
    <pre>
      <code class="language-html">
        &lt;div id="example"&gt;&lt;/div&gt;
      </code>
    </pre>
    <pre>
      <code class="language-javascript">
        import FPMoney from 'fp-money'
        import 'fp-money/dist/fp-money.css'

        new FPMoney({
          container: document.querySelector('#example'),
          // value: 86753.09, // optional - default ''
          // currency: 'usd', // optional - default 'usd'
          // locale: 'en-us', // optional - default navigator.language
          // showSelection: true, // optional - default true
          onChange: (values) => {
            console.log(values)
            // {
            // value: "8675309",
            // display: "$86,753.09",
            // format: "86753.09",
            // currency: "USD",
            // locale: "en-US"
            // }
          }
        })
      </code>
    </pre>
  </div>
</template>
