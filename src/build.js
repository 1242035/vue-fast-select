import VueFastSelect from './VueFastSelect.vue'

const install = (Vue, opts = {}) => {
  Vue.component(VueFastSelect.name, VueFastSelect)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { VueFastSelect, install }
