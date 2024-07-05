import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Comp from './component.vue'
import { nextTick } from 'vue'

describe('Component', () => {
  it('Mounts properly', () => {
    const wrapper = mount(Comp, { props: {
      modelValue: 0
    } })

    expect(wrapper).toBeTruthy()

    // Make sure the input is in the DOM
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('Make sure defaults are set', async () => {
    const props = {
      modelValue: 0,

    }
    const wrapper = mount(Comp, { props: {
      modelValue: 0,
    } })
    await nextTick()

    const data = JSON.parse(JSON.stringify(wrapper.vm))

    expect(data.modelValue).toBe(0)
    expect(data.valueFormat).toBe('float')
    expect(data.currency).toBe('USD')
    expect(data.locale).toBe('')
  })

  // it('Set initial value and update with new value', async () => {
  //   const wrapper = mount(Comp, { props: {
  //     modelValue: 1,
  //   } })

  //   expect(wrapper.props('modelValue')).toBe(1)

  //   const input = wrapper.find('input')
  //   await input.trigger('keydown', {
  //     key: '5'
  //   })
  //   expect(input.element.value).toBe('5.00')
  //   expect(wrapper.props('modelValue')).toBe(5.00)
  // })

  // it('Set value to 5.00 and get 500 back', () => {
  //   const wrapper = mount(Comp, { props: {
  //     modelValue: 5.00,
  //     valueFormat: 'int'
  //   } })

  //   expect(wrapper.vm.modelValue).toBe(500)
  // })
})
