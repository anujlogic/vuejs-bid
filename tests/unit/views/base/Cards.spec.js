import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Codelgniter from '@/views/base/Codelgniter'

Vue.use(CoreuiVue)

describe('Codelgniter.vue', () => {
  it('has a name', () => {
    expect(Codelgniter.name).toBe('Codelgniter')
  })
  it('has a created hook', () => {
    expect(typeof Codelgniter.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Codelgniter.data).toMatch('function')
    const defaultData = Codelgniter.data()
    expect(defaultData.show).toBe(true)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Codelgniter)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Codelgniter', () => {
    const wrapper = shallowMount(Codelgniter)
    expect(wrapper.is(Codelgniter)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = mount(Codelgniter)
    expect(wrapper.element).toMatchSnapshot()
  })
})
