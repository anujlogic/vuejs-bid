import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import WooCommerce from '@/views/base/WooCommerce'

Vue.use(CoreuiVue)

describe('WooCommerce.vue', () => {
  it('has a name', () => {
    expect(WooCommerce.name).toBe('WooCommerce')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(WooCommerce)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is WooCommerce', () => {
    const wrapper = shallowMount(WooCommerce)
    expect(wrapper.is(WooCommerce)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(WooCommerce)
    expect(wrapper.element).toMatchSnapshot()
  })
})
