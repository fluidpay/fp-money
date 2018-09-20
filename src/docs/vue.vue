<script lang="ts">
import Vue from 'vue'
import { Values } from '@/fp-money/fp-money.ts'
import fpmoney from '@/fp-money/component.vue'

export default Vue.extend({
  components: { fpmoney },
  methods: {
    change(values: Values) {
      console.log(values)
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
  }
</style>

<template>
  <div class="vue">
    <fpmoney id="example" value="85555" :onChange="change" />
    <pre>
      <code class="language-javascript">
        import fpmoney from 'fp-money/dist/fp-money-vue.js'

        export default {
          components: { fpmoney },
          methods: {
            change(values: Values) {
              console.log(values)
            }
          }
        }
      </code>
    </pre>
    <pre>
      <code class="language-html">
        &lt;fpmoney value="85555" :onChange="change" /&gt;
      </code>
    </pre>
  </div>
</template>
