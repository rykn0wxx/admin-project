<template>
  <div class="layouts-application flex layout-row tw-flex tw-max-w-full tw-max-h-full tw-overflow-hidden">
    <v-app dark class="layouts-app tw-w-full">
      <v-toolbar app dark class="app-toolbar glow-z1">
        <v-toolbar-title>Boards</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items color="transparent">
        </v-toolbar-items>
      </v-toolbar>
      <g-app-content contentClass="tw-h-full img-placeholder" wrapClass="tw-overflow-auto tw-px-6">
        <GAppView class="tw-flex-noshrink view-wrapper tw-relative tw-block" />
      </g-app-content>
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Boards',
  computed: {
    ...mapGetters('app', {
      appDrawer: 'GET_NAVBAR_MODEL',
      appTopbar: 'GET_TOPBAR_MODEL'
    })
  }
}
</script>

<style lang="scss" scoped></style>
