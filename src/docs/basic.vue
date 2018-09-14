<script lang="ts">
import Vue from 'vue'
import FPMoney, {lowestCommonToFormat} from '@/fp-money/fp-money.ts'

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
.basic {
  #example {
    width: 250px;
    margin: 0 auto;
    margin-bottom: var(--spacing);
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
        new FPMoney({
          container: document.querySelector('#example') as HTMLDivElement,
          // value: 86753.09, // optional
          // locale: 'en-us', // optional
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
