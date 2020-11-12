// components util
import ListBox from './ListBox'

const components = {
  ListBox
}

const install = function(Vue) {
  for (let key in components) {
    Vue.component(components[key].name, components[key])
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

components.install = install

export default components
