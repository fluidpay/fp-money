<script lang="ts">
import { defineComponent } from 'vue'
import { Currencies, Values } from '@/fp-money/fp-money'
import fpmoney from '@/fp-money/component.vue'
import Chance from 'chance'
const chance = new Chance()

export default defineComponent({
  name: 'Vue',
  components: { fpmoney },
  data () {
    return {
      value: 8675309 as any,
      int: '',
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
  mounted () {
    // setInterval(() => {
    //   // this.value = Math.random() * 1000
    //   this.value = chance.integer({ min: 1000, max: 100000 })
    // }, 5000)

    setTimeout(() => {
      this.currencies = {
        PER: {
          symbol: '%',
          fraction: 2
        },
        CAD: {
          symbol: '$',
          fraction: 2
        }
      }

      this.currency = 'CAD'

      // setTimeout(() => {
      //   this.value = 500
      // }, 1000)

      // setTimeout(() => {
      //   this.currency = 'cad'
      // }, 2000)

      // setTimeout(() => {
      //   this.currency = 'per'
      // }, 3000)
    }, 1000)
  },
  methods: {
    change (values: Values) {
      // console.log(values)
    }
  }
})
</script>

<style lang="scss">
  @import './assets/scss/_variables.scss';

  .vue {
    #example {
      width: 250px;
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
  <div class="vue">
    <fpmoney
      id="example"
      v-model="value"
      v-model:value="int"
      v-model:format="format"
      v-model:display="display"
      v-model:currency="currency"
      v-model:locale="locale"
      :currencies="currencies"
      :onChange="change"
      :show-selection="true"
      value-format="int"
    />
    <!-- <fpmoney id="example" v-model="value" valueFormat="int" /> -->

    <div class="outputs">
      Value: {{ int }}<br>
      Format: {{ format }}<br>
      Display: {{ display }}<br>
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
          v-model="value"
          :value.sync="int"           &lt;-- Optional
          :format.sync="format"       &lt;-- Optional
          :display.sync="display"     &lt;-- Optional
          :currency.sync="currency"   &lt;-- Optional
          :locale="locale"            &lt;-- Optional
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
