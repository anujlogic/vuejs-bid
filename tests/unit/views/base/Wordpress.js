import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import CakePhp from '@/views/base/CakePhp'

Vue.use(CoreuiVue)

describe('CakePhp.vue', () => {
  it('has a name', () => {
    expect(CakePhp.name).toBe('CakePhp')
  })
  it('is CakePhp', () => {
    const wrapper = shallowMount(CakePhp)
    expect(wrapper.is(CakePhp)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = mount(CakePhp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
