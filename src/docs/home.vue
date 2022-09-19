<script lang="ts">
import { defineComponent } from 'vue'
import FPMoney from '../fp-money/fp-money'

export default defineComponent({
  data() {
    return {
      value: '',
      format: '',
      display: '',
      currency: ''
    }
  },
  mounted() {
    const fp = new FPMoney({
      container: document.querySelector('#example') as HTMLDivElement,
      value: 86753.09,
      // minValue: 200.00,
      // maxValue: 500.00,
      // step: 0.01,
      onChange: (values) => {
        this.value = values.value
        this.format = values.format
        this.display = values.display
        this.currency = values.currency
      }
    })
    // setInterval(() => {
    //   fp.setDisplayOnly(!fp.displayOnly)
    // }, 5000)
  }
})
</script>

<style lang="scss">
  @import './assets/scss/_variables.scss';
    
  .basic {
    #example {
      width: 200px;
      margin: 0 auto;
      margin-bottom: $spacing;
    }

    .outputs {
      padding: 0 0 $spacing 0;
      color: #ffffff;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
    }
  }
</style>

<template>
  <div class="basic">
    <div id="example"></div>
    <div class="outputs">
      Value: {{value}}<br />
      Format: {{format}}<br />
      Display: {{display}}<br />
      Currency: {{currency}}
    </div>
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
          // value: 86753.09,     // optional - default ''
          // currencies: Object   // optional - {USD: {symbol: '$', fraction:2}}
          // currency: 'USD',     // optional - default 'USD'
          // locale: 'en-us',     // optional - default navigator.language
          // minValue: 999,       // optional - default no limit
          // maxValue: 999,       // optional - default no limit
          // step: 1.00,          // optional - set up/down increment
          // disabled: false,      // optional - default false
          // displayOnly: false,      // optional - default false
          // showSelection: false, // optional - default false

          onChange: (values) => {
            console.log(values)
            // {
            //   value: "8675309",
            //   format: "86753.09",
            //   display: "$86,753.09",
            //   currency: "USD",
            //   locale: "en-US"
            // }
          }
        })
      </code>
    </pre>
  </div>
</template>
