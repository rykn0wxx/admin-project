<template>
  <v-list dense class="sidebar-menu app-sidebar__menu transparent">
    <app-sidebar-menu-link />
  </v-list>
</template>

<script>
export default {
  name: 'SidebarMenu',
  inheritAttrs: false,
  inject: ['appSidebar'],
  data () {
    return {
      itemActive: false
    }
  },
  methods: {
    handleClick ($event) {
      console.log($event, this)
      // this.appSidebar.handleToggle(this.$data, 'itemActive')
    }
  },
  created: function () {
  }
}
</script>

<style lang="scss" scoped>
.sidebar-menu.app-sidebar__menu {
  color: #cfd2da;
}
</style>
