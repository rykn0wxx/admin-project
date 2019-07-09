<template>
  <v-container fluid grid-list-lg class="all-boards boards boards_container tw-px-0 tw-pt-8">
    <v-layout row>
      <v-flex sm4 class="boards_image">
        <v-img contain height="300" :src="require('../../assets/img/svg/boards-overview.svg')" />
      </v-flex>
      <v-flex class="boards_wrapper">
        <div class="boards_section">
          <h3 class="md-subhead">My Fav Boards</h3>
          <v-container fluid grid-list-md class="tw-px-0 tw-py-2">
            <v-layout row wrap class="layout-row">
              <v-flex shrink>
                <v-card class="board_card elevation-1">
                  qqwfef
                </v-card>
              </v-flex>
              <v-flex shrink>
                <v-card class="board_card elevation-1">
                  qqwfef
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
        <div class="boards_section">
          <h3 class="md-subhead">My Collection</h3>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'AllBoards',
  data () {
    return {
      surfaceColor: '#242528',
      primaryColor: '#264fc1',
      whiteColor: '#f2f2f2',
      darkenColor: '#2f2e41',
      skinColor: '#a0616a',
      lightenColor: '#d0cde1',
      accentColor: '#53f2e2'
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.board {
  &_card {
    min-width: 225px;
    max-width: 225px;
    width: 225px;
    @apply tw-bg-surface-dp01 #{!important};
  }
}
</style>
