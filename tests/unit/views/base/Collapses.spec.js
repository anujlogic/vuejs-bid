import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Wordpress from '@/views/base/Wordpress'

Vue.use(CoreuiVue)

describe('Wordpress.vue', () => {
  it('has a name', () => {
    expect(Wordpress.name).toBe('Wordpress')
  })
  it('has a created hook', () => {
    expect(typeof Wordpress.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Wordpress.data).toMatch('function')
    const defaultData = Wordpress.data()
    expect(defaultData.showCollapse).toBe(true)
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Wordpress)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  // it('is Wordpress', () => {
  //   const wrapper = shallowMount(Wordpress)
  //   expect(wrapper.is(Wordpress)).toBe(true)
  // })
  // it('should render correct content', () => {
  //   const wrapper = mount(Wordpress)
  //   expect(wrapper.find('header.card-header > div > strong').text()).toMatch('Bootstrap Wordpress')
  // })
  test('renders correctly', () => {
    const wrapper = mount(Wordpress)
    expect(wrapper.element).toMatchSnapshot()
  })
})
