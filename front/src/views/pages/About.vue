<template>
  <v-container fluid class="pages-about">
    <div class="surface-container">
      <v-layout align-center justify-space-around row fill-height>
        <div class="item elevation-5 dp01">dp01</div>
        <div class="item elevation-5 dp02">dp02</div>
        <div class="item elevation-5 dp03">dp03</div>
        <div class="item elevation-5 dp04">dp04</div>
        <div class="item elevation-5 dp05">dp05</div>
        <div class="item elevation-5 dp06">dp06</div>
        <div class="item elevation-5 dp08">dp08</div>
        <div class="item elevation-5 dp12">dp12</div>
        <div class="item elevation-5 dp16">dp16</div>
        <div class="item elevation-5 dp24">dp24</div>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'About'
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
