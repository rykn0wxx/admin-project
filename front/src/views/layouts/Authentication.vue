<template>
  <v-app dark class="layouts-authentication app-trans tw-max-h-screen tw-h-full tw-w-full tw-relative" :class="authpage === 'authlogin' ? 'authlogin' : 'authregister'">
    <g-app-content contentClass="tw-h-full img-placeholder" wrapClass="tw-overflow-auto">
      <GAppView class="flex-noshrink view-wrapper tw-relative tw-block tw-container-fluid img-placeholder__after" />
    </g-app-content>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      authpage: ''
    }
  },
  watch: {
    '$route': {
      handler: 'routeHandler',
      immediate: true
    }
  },
  methods: {
    routeHandler (newVal, oldVal) {
      this.authpage = newVal.name.toLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.layouts-authentication {
  z-index: 2;
  .view-wrapper {
    padding-left: 0;
    padding-right: 0;
  }
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100%;
  }
  &::before {
    background-size: cover cover;
    filter: blur(3px);
    z-index: 1;
  }
  &.authlogin::before {
    background: url('../../assets/img/bg003.jpg') no-repeat center center fixed, linear-gradient(to top right, rgba(#FF5630, 1), rgba(#343538,0.5));
  }
  &.authregister::before {
    background: url('../../assets/img/bg003.jpg') no-repeat center center fixed, linear-gradient(to top right, rgba(#4A4D51, 0.7), rgba(#264fc1,0.3));
  }
  &::after {
    background-color: rgba(0,0,0,0.3);
    // z-index: 0;
  }
  .app-content {
    z-index: 5;
  }
}
</style>
