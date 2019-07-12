<template>
  <v-container fluid class="pages-about">
    <div class="surface-container">
      <v-layout align-center justify-space-around row fill-height>
        <div class="item elevation-5 dp01" v-bind:style="getStyledp01">
          <input type="text" v-model="dp01" class="tw-inline-block tw-w-full tw-px-2" />
        </div>
        <div class="item elevation-5 dp02">
          <input type="text" v-model="dp02" class="tw-inline-block tw-w-full tw-px-2" />
        </div>
        <div class="item elevation-5 dp03">
          <input type="text" v-model="dp03" class="tw-inline-block tw-w-full tw-px-2" />
        </div>
        <div class="item elevation-5 dp04">
          <input type="text" v-model="dp04" class="tw-inline-block tw-w-full tw-px-2" />
        </div>
        <div class="item elevation-5 dp05">
          <input type="text" v-model="dp05" class="tw-inline-block tw-w-full tw-px-2" />
        </div>
        <div class="item elevation-5 dp06">
          <input type="text" v-model="dp06" class="tw-inline-block tw-w-full tw-px-2" />
        </div>
        <div class="item elevation-5 dp08">
          <input type="text" v-model="dp08" class="tw-inline-block tw-w-full tw-px-2" />
        </div>
        <div class="item elevation-5 dp12">
          <input type="text" v-model="dp12" class="tw-inline-block tw-w-full tw-px-2" />
        </div>
        <div class="item elevation-5 dp16">
          <input type="text" v-model="dp16" class="tw-inline-block tw-w-full tw-px-2" />
        </div>
        <div class="item elevation-5 dp24">
          <input type="text" v-model="dp24" class="tw-inline-block tw-w-full tw-px-2" />
        </div>
      </v-layout>
    </div>
    <v-layout row>
      <v-flex xs1>
        <input type="text" v-model="dp01" class="tw-inline-block tw-w-full tw-px-2" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      dp01: '',
      dp02: '',
      dp03: '',
      dp04: '',
      dp05: '',
      dp06: '',
      dp08: '',
      dp12: '',
      dp16: '',
      dp24: ''
    }
  },
  computed: {
    getStyledp01() {
      return {
        'background-color': `${this.dp01};`
      }
    },
    getStyledp02() {
      return {
        'background-color': `${this.dp02};`
      }
    },
    getStyledp03() {
      return {
        'background-color': `${this.dp03};`
      }
    },
    getStyledp04() {
      return {
        'background-color': `${this.dp04};`
      }
    },
    getStyledp05() {
      return {
        'background-color': `${this.dp05};`
      }
    },
    getStyledp06() {
      return {
        'background-color': `${this.dp06};`
      }
    },
    getStyledp08() {
      return {
        'background-color': `${this.dp08};`
      }
    },
    getStyledp12() {
      return {
        'background-color': `${this.dp12};`
      }
    },
    getStyledp16() {
      return {
        'background-color': `${this.dp16};`
      }
    },
    getStyledp24() {
      return {
        'background-color': `${this.dp24};`
      }
    }
  },
  methods: {
    getStyle (color) {
      return {
        'background-color': `${this[color]}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pages-about {
  .surface-container {
    color: red;
    background: #18191c;
    min-height: 350px;
    max-width: 100%;
    height: 100%;
    padding: 10px;
  }
  .item {
    min-height: 50px;
    min-width: 80px;
    margin: 10px;
  }
  .dp01 { background: rgba(255,255,255,0.05); }
  .dp02 { background: rgba(255,255,255,0.07); }
  .dp03 { background: rgba(255,255,255,0.08); }
  .dp04 { background: rgba(255,255,255,0.09); }
  .dp05 { background: rgba(255,255,255,0.10); }
  .dp06 { background: rgba(255,255,255,0.11); }
  .dp08 { background: rgba(255,255,255,0.12); }
  .dp12 { background: rgba(255,255,255,0.14); }
  .dp16 { background: rgba(255,255,255,0.15); }
  .dp24 { background: rgba(255,255,255,0.16); }
}
</style>
