<template>
  <v-container fluid class="tw-h-full tw-p-0">
    <v-layout align-center justify-center row fill-height>
      <v-flex xs5>
        <v-img cover :src="require('../../assets/img/svg/boards-overview.svg')" />
      </v-flex>
      <v-flex xs7 class="tw-h-full tw-pt-8">
        <div>
          <h3 class="md-subhead">My Boards</h3>
          <v-container fluid grid-list-lg class="tw-px-0 tw-py-4">
            <v-layout row wrap>
              <v-flex xs4 v-for="(kard, i) in kards" :key="i">
                <v-card>
                  {{ kard }}
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
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
      accentColor: '#53f2e2',
      kards: ['a', 'b', 'c', 'd']
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
