import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Shopify from '@/views/base/Shopify'

Vue.use(CoreuiVue)

describe('Shopify.vue', () => {
  it('has a name', () => {
    expect(Shopify.name).toBe('Shopify')
  })
  it('is Shopify', () => {
    const wrapper = shallowMount(Shopify)
    expect(wrapper.is(Shopify)).toBe(true)
  })
  // render random chackboxes
  // test('renders correctly', () => {
  //   const wrapper = shallowMount(Shopify)
  //   expect(wrapper.element).toMatchSnapshot()
  // })
})
