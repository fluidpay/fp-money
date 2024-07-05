<script lang="ts">
import { defineComponent } from 'vue'
import { Values, Currencies } from '../fp-money/fp-money'
import FPMoneyComp from '../fp-money/component.vue'

export default defineComponent({
  components: { FPMoneyComp },
  data() {
    return {
      value: 100000 as number,
      format: '',
      display: '',
      currency: '',
      currencies: {
        KFL: {
          symbol: '%',
          fraction: 3
        },
        PER: {
          symbol: '%',
          fraction: 2
        },
        CAD: {
          symbol: '$',
          fraction: 2
        }
      } as Currencies,
      locale: 'en-US'
    }
  },
  mounted() {
    // setInterval(() => {
    //   // this.value = Math.random() * 1000
    //   this.value = chance.integer({ min: 1000, max: 100000 })
    // }, 5000)
    // setTimeout(() => {
    //   this.currencies = {
    //     PER: {
    //       symbol: '%',
    //       fraction: 2
    //     },
    //     CAD: {
    //       symbol: '$',
    //       fraction: 2
    //     }
    //   }
    //   this.currency = 'CAD'
    // setTimeout(() => {
    //   this.value = 500
    // }, 1000)
    // setTimeout(() => {
    //   this.currency = 'cad'
    // }, 2000)
    // setTimeout(() => {
    //   this.currency = 'per'
    // }, 3000)
    // }, 3000)
  },
  methods: {
    change(values: Values) {
      // console.log('onChange', values)
    }
  }
})
</script>

<style lang="scss">
.vue {
  #example {
    width: 250px;
    margin: 0 auto;
    margin-bottom: var(--spacing-l);
  }

  .outputs {
    padding: 0 0 var(--spacing-l) 0;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
  }
}
</style>

<template>
  <div class="vue">
    <FPMoneyComp
      id="example"
      v-model="value"
      v-model:format="format"
      v-model:display="display"
      v-model:currency="currency"
      v-model:locale="locale"
      :currencies="currencies"
      :on-change="change"
      :show-selection="true"
    />
    <!-- <FPMoneyComp id="example" v-model="value" valueFormat="int" /> -->

    <div class="outputs">
      Value: {{ value }}<br />
      Format: {{ format }}<br />
      Display: {{ display }}<br />
      Currency: {{ currency }}
    </div>

    <pre>
      <code class="language-javascript">
        import fpmoney from 'fp-money/dist/fp-money-vue.js'

        export default {
          components: { fpmoney },
          data() {
            return {
              value: 86753.09,
              int: '',
              format: '',
              display: '',
              currency: '',
              locale: 'en-us'
            }
          },
          methods: {
            change(values) {
              console.log(values)
            }
          }
        }
      </code>
    </pre>
    <pre>
      <code class="language-html">
        &lt;fpmoney id="example"
          // Dynamic, and will emit an update
          v-model="value"             &lt;-- Required
          v-model:format="format"     &lt;-- Optional
          v-model:display="display"   &lt;-- Optional
          v-model:currency="currency" &lt;-- Optional
          v-model:locale="locale"     &lt;-- Optional

          // Static, only initially set
          :currencies="currencies"    &lt;-- Optional
          :disabled="false"           &lt;-- Optional
          :displayOnly="false"        &lt;-- Optional
          valueFormat="float | int"   &lt;-- Optional - default float
          :minValue="minValue"        &lt;-- Optional
          :maxValue="maxValue"        &lt;-- Optional
          :step="step"                &lt;-- Optional
          :onChange="change"          &lt;-- Optional
          :showSelection="false"      &lt;-- Optional
        /&gt;
      </code>
    </pre>
  </div>
</template>
