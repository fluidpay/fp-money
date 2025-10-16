<script lang="ts">
import { defineComponent } from 'vue'
import { Values, Currencies } from '../fp-money/fp-money'
import FPMoneyComp from '../fp-money/vue/component.vue'
import ShikiStyle from './components/shiki_style.vue'
import { fetchFunc } from 'gofakeit'

export default defineComponent({
  components: { FPMoneyComp, ShikiStyle },
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
      locale: 'en-US',

      intervalId: null as ReturnType<typeof setInterval> | null
    }
  },
  mounted() {
    this.intervalId = setInterval(() => {
      fetchFunc('number', { min: 1000, max: 100000 }).then((res) => {
        this.value = Number(res.result)
      })
    }, 5000)
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
  unmounted() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
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

    <ShikiStyle language="javascript">
      <pre>
import FPMoney from 'fp-money/vue'

export default {
  components: { FPMoney },
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
      </pre>
    </ShikiStyle>
    <ShikiStyle language="vue">
      <pre>
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
      </pre>
    </ShikiStyle>
  </div>
</template>
