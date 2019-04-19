<script lang="ts">
import Vue from 'vue'
import FPMoney from '@/fp-money/fp-money.ts'

export default Vue.extend({
  data() {
    return {
      disabled: null as any,
      displayOnly: null as any
    }
  },
  mounted() {
    new FPMoney({
      container: document.querySelector('#exampleBasic') as HTMLDivElement
    })

    new FPMoney({
      container: document.querySelector('#exampleSelection') as HTMLDivElement,
      showSelection: true
    })

    this.disabled = new FPMoney({
      container: document.querySelector('#exampleDisabled') as HTMLDivElement,
      value: 86753.09,
      disabled: true
    })

    this.displayOnly = new FPMoney({
      container: document.querySelector('#exampleDisplayOnly') as HTMLDivElement,
      value: 86753.09,
      displayOnly: true
    })
  },
  methods: {
    toggleDisabled() {
      this.disabled.setDisabled(!this.disabled.disabled)
    },
    toggleDisplayOnly() {
      this.displayOnly.setDisplayOnly(!this.displayOnly.displayOnly)
    }
  }
})
</script>

<style lang="scss">
  @import './assets/scss/_variables.scss';
    
  .examples {
    .section {
      margin-bottom: $spacing;
      padding: $spacing-half $spacing-half $spacing-quarter $spacing-half;
      background-color: rgba(255, 255, 255, .7);
      border-radius: $border-radius;

      .header {
        font-size: 24px;
        font-weight: $font-weight-bold;
        margin: 0 0 $spacing-half 0;
        padding: 0 0 $spacing-quarter 0;
        border-bottom: solid 1px $color-font;
      }

      .example {
        width: 250px;
        margin-bottom: $spacing-half;
      }

      .row {
        display: flex;
        flex-direction: row;
      }

      button {
        margin: 0 0 0 $spacing-half;
      }
    }
  }
</style>

<template>
  <div class="examples">
    <div class="section">
      <div class="header">Basic</div>
      <div class="example" id="exampleBasic"></div>
      <pre>
        <code class="language-javascript">
          new FPMoney({
            container: document.querySelector('#example')
          })
        </code>
      </pre>
    </div>

    <div class="section">
      <div class="header">Currency Selection</div>
      <div class="example" id="exampleSelection"></div>
      <pre>
        <code class="language-javascript">
          new FPMoney({
            container: document.querySelector('#example'),
            showSelection: true
          })
        </code>
      </pre>
    </div>

    <div class="section">
      <div class="header">Disabled</div>
      <div class="row example">
        <div id="exampleDisabled"></div>
        <button v-if="disabled" @click="toggleDisabled()">{{disabled.disabled ? 'Enable': 'Disable'}}</button>
      </div>
      <pre>
        <code class="language-javascript">
          new FPMoney({
            container: document.querySelector('#example'),
            disabled: true
          })

          // Or

          var fp = new FPMoney({ container: document.querySelector('#example') })
          fp.setDisabled(true)
        </code>
      </pre>
    </div>

    <div class="section">
      <div class="header">Display Only</div>
      <div class="example row">
        <div id="exampleDisplayOnly"></div>
        <button v-if="disabled" @click="toggleDisplayOnly()">{{displayOnly.displayOnly ? 'Enable': 'Disable'}}</button>
      </div>
      <pre>
        <code class="language-javascript">
          new FPMoney({
            container: document.querySelector('#example'),
            displayOnly: true
          })

          // Or

          var fp = new FPMoney({ container: document.querySelector('#example') })
          fp.setDisplayOnly(true)
        </code>
      </pre>
    </div>

  </div>
</template>