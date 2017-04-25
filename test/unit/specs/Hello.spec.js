import Vue from 'vue'
import FirstComponent from '@/components/FirstComponent'

describe('FirstComponent.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(FirstComponent)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('p').textContent)
      .to.equal('Data Output: This is the default message')
  })
})
