import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Laravel from '@/views/base/Laravel'

Vue.use(CoreuiVue)

describe('Laravel.vue', () => {
  it('has a name', () => {
    expect(Laravel.name).toBe('Laravel')
  })
  it('has a created hook', () => {
    expect(typeof Laravel.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Laravel.data).toMatch('function')
    const defaultData = Laravel.data()
    expect(typeof defaultData.items).toMatch('object')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Laravel)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Laravel', () => {
    const wrapper = shallowMount(Laravel)
    expect(wrapper.is(Laravel)).toBe(true)
  })
  test('renders correctly', () => {
    const wrapper = mount(Laravel)
    expect(wrapper.element).toMatchSnapshot()
  })
})
