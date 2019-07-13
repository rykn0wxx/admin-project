<template>
  <v-list-tile :value="linkActive" :class="{ 'item-active': linkActive }" class="sidebar-menu-link app-sidebar__item tw-rounded" @click="handleMenuClick">
    <v-list-tile-action class="app-sidebar__item-action">
      <svg class="tw-ml-4 tw-h-4 tw-w-auto tw-fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" />
      </svg>
    </v-list-tile-action>
    <v-list-tile-content class="app-sidebar__item-content">
      <v-list-tile-title>
        <span class="app-sidebar__item-link tw-text-base tw-tracking-extended tw-block">
          App Sidebar Menu
        </span>
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: 'SidebarMenuLink',
  inheritAttrs: false,
  inject: ['appSidebar'],
  data () {
    return {
      linkActive: false
    }
  },
  methods: {
    handleMenuClick () {
      this.appSidebar.toggler(this.$data, 'linkActive')
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-menu-link.app-sidebar__item {
  // .app-sidebar__item-action {
  //   min-width: 40px;
  // }
  &.item-active {
    background-color: #1997c6;
    .app-sidebar__item {
      &-action, &-content {
        color: #f8f9fa;
      }
      &-link {
        font-weight: 500;
      }
    }
  }
}
</style>
