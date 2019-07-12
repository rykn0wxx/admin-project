import { initPlugin } from '@/services/utils'
import Sidebar from './Sidebar.vue'
import SidebarHeader from './SidebarHeader.vue'

const plugin = {
  install (vm) {
    vm.component('m-sidebar', Sidebar)
    vm.component('m-sidebar-header', SidebarHeader)
  }
}

export default plugin

initPlugin(plugin)
