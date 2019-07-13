import Sidebar from './Sidebar.vue'
import SidebarHeader from './SidebarHeader.vue'
import SidebarMenu from './SidebarMenu.vue'
import SidebarMenuLink from './SidebarMenuLink.vue'

const sidebar = function (vm) {
  vm.component('AppSidebar', Sidebar)
  vm.component('AppSidebarHeader', SidebarHeader)
  vm.component('AppSidebarMenu', SidebarMenu)
  vm.component('AppSidebarMenuLink', SidebarMenuLink)
}

export default sidebar
