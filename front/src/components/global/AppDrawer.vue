<template>
  <v-navigation-drawer app width="240" class="app-nav surface-on7" hide-overlay clipped
    v-model="navModel" :mini-variant.sync="navMini">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="app-trans">
              kohana
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.stop="setNavbarMini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>what</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AppDrawer',
  computed: {
    ...mapGetters('app', {
      optsModel: 'GET_NAVBAR_MODEL',
      optsMini: 'GET_NAVBAR_MINI'
    }),
    navModel: {
      get () {
        return this.optsModel
      },
      set (val) {
        this.setNavBar(val)
      }
    },
    navMini: {
      get () {
        return this.optsMini
      },
      set (val) {
        this.setNavMini(val)
      }
    }
  },
  methods: {
    ...mapActions('app', {
      setNavBar: 'SET_NAVBAR_MODEL',
      setNavMini: 'SET_NAVBAR_MINI'
    }),
    setNavbarMini () {
      this.setNavMini(!this.optsMini)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-nav {
  // transition-delay: 0.1s;
  &.v-navigation-drawer--mini-variant {
    &:hover {
      width: 240px !important;
      .v-list__tile__content, .v-list__tile::after {
        opacity: 1 !important;
      }
    }
  }
}
</style>
