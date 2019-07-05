<template>
  <div class="layouts-landing landing__wrapper tw-h-full tw-relative tw-bg-center tw-bg-no-repeat tw-bg-cover">
    <v-img contain height="100%" :src="require('../../assets/img/svg/landing.svg')"></v-img>
  </div>
</template>

<script>
export default {
  name: 'LayoutsLanding',
  metaInfo () {
    return {
      htmlAttrs: {
        'is-landing': true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.landing {
  &__wrapper {
  }
}
</style>
