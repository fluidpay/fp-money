<script lang="ts">
import { defineComponent } from 'vue'
import FPMoney, { Values } from '@/fp-money/fp-money'

export default defineComponent({
  name: 'Examples',
  data () {
    return {
      disabled: null as FPMoney | null,
      displayOnly: null as FPMoney | null,

      curSelectionValues: {} as Values
    }
  },
  mounted () {
    new FPMoney({
      container: document.querySelector('#exampleBasic') as HTMLDivElement
    })

    new FPMoney({
      container: document.querySelector('#exampleSelection') as HTMLDivElement,
      showSelection: true,
      onChange: (values) => {
        this.curSelectionValues = values
      }
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

    new FPMoney({
      container: document.querySelector('#exampleMinValue') as HTMLDivElement,
      minValue: 0
    })
  },
  methods: {
    toggleDisabled () {
      if (this.disabled) {
        this.disabled.setDisabled(!this.disabled.disabled)
      }
    },
    toggleDisplayOnly () {
      if (this.displayOnly) {
        this.displayOnly.setDisplayOnly(!this.displayOnly.displayOnly)
      }
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
      <div class="header">
        Basic
      </div>
      <div id="exampleBasic" class="example" />
      <pre>
        <code class="language-javascript">
          new FPMoney({
            container: document.querySelector('#example')
          })
        </code>
      </pre>
    </div>

    <div class="section">
      <div class="header">
        Currency Selection
      </div>
      <div id="exampleSelection" class="example" />
      <div>{{ curSelectionValues }}</div>
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
      <div class="header">
        Disabled
      </div>
      <div class="row example">
        <div id="exampleDisabled" />
        <button v-if="disabled" @click="toggleDisabled()">
          {{ disabled.disabled ? 'Enable': 'Disable' }}
        </button>
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
      <div class="header">
        Display Only
      </div>
      <div class="example row">
        <div id="exampleDisplayOnly" />
        <button v-if="disabled" @click="toggleDisplayOnly()">
          {{ displayOnly.displayOnly ? 'Enable': 'Disable' }}
        </button>
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

    <div class="section">
      <div class="header">
        Min Value
      </div>
      <div class="example row">
        <div id="exampleMinValue" />
      </div>
      <pre>
        <code class="language-javascript">
          new FPMoney({
            container: document.querySelector('#example'),
            minValue: 0 // only positive numbers allowed
          })
        </code>
      </pre>
    </div>
  </div>
</template>
