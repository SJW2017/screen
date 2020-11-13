// components util
import ListBox from './ListBox'
import OrderDialog from './OrderDialog'
import DeclarationDialog from './DeclarationDialog'
import StoreDialog from './StoreDialog'
import BrokenLine from './BrokenLine'
import BrokenLineb from './BrokenLineb'
import BrokenLineYear from './BrokenLineYear'
import BarChartx from './BarChartx'

const components = {
  ListBox,
  OrderDialog,
  BrokenLine,
  BrokenLineb,
  BrokenLineYear,
  BarChartx,
  DeclarationDialog,
  StoreDialog
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
