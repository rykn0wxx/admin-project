<template>
  <router-link v-if="!item.children" :to="item.path" tag="button" :class="{ 'app__router--link--active': isActive }" class="app-trans onlight--text v-btn v-btn--flat app__router app__router--link theme--dark">
    {{ item.name }}
    <v-icon v-if="showIcon && item.icon" right dark>{{ item.icon }}</v-icon>
  </router-link>
  <div v-else class="tw-w-full tw-flex flex tw-items-center app__router app__router--group" :style="{ height: `${topbar}px`}">
    <v-menu :nudge-width="100" offset-y transition="slide-x-reverse-transition">
      <template v-slot:activator="{ on }">
        <button v-on="on" flat dark :class="{ 'app__router--link--active': isActive }" class="app-trans onlight--text v-btn v-btn--flat app__router app__router--link theme--dark">
          {{ item.name }}
          <v-icon dark right>arrow_drop_down</v-icon>
        </button>
      </template>
      <v-list dark dense class="app__router--menu">
        <v-list-tile v-for="(child, idx) in item.children" :key="idx" :to="child.path" active-class="accent-light--text">
          <v-list-tile-action >
            <v-icon v-if="child.icon">{{ child.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ child.name }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ToolbarItems',
  props: {
    item: {
      type: Object
    },
    showIcon: {
      type: Boolean
    },
    isActive: {
      type: Boolean
    }
  },
  data () {
    return {
      theitem: null
    }
  },
  computed: {
    ...mapGetters('app', {
      topbarModel: 'GET_TOPBAR_MODEL'
    }),
    topbar () {
      const { top } = this.$vuetify.application
      return top
    }
  }
}
</script>

<style lang="scss" scoped>
.app__router--group {
  .v-btn {
    &:hover {
      background: #444;
    }
    &::before {
      content: unset;
    }
  }
}
</style>
