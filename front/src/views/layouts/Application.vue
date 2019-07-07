<template>
  <div class="layouts-application flex layout-row tw-flex tw-max-w-full tw-max-h-full tw-overflow-hidden">
    <v-app dark class="layouts-app tw-w-full">
      <GAppDrawer v-if="appDrawer" />
      <GAppToolbar v-if="appTopbar" />
      <g-app-content contentClass="tw-h-full img-placeholder" wrapClass="tw-overflow-auto">
        <GAppView class="tw-flex-noshrink view-wrapper tw-relative tw-block tw-container-fluid" />
      </g-app-content>
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LayoutsApplication',
  computed: {
    ...mapGetters('app', {
      appDrawer: 'GET_NAVBAR_MODEL',
      appTopbar: 'GET_TOPBAR_MODEL'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
