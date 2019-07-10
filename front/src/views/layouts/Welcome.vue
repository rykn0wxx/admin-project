<template>
  <v-app dark class="layouts-welcome">
    <div class="overlay overlay-bg"></div>
    <g-app-content>
      <v-container fluid class="tw-h-full">
        <v-layout justify-center row fill-height>
          <v-flex lg12>
            <div class="content flex tw-h-full tw-flex layout-column tw-items-start tw-justify-center">
              <Animated enter="slideInLeft" appear>
                <div v-show="isVisible" class="content-text tw-w-full tw-p-4 tw-shadow-lg tw-rounded">
                  <h1 class="md-display-2 primary-variant--text">
                    Exhibition on the <span class="primary-light--text">Modern Era</span>
                  </h1>
                  <p class="md-title tw-m-0 tw-opacity-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, mollitia?
                  </p>
                  <v-btn to="/app" outline round dark color="primary">Get Started</v-btn>
                </div>
              </Animated>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </g-app-content>
  </v-app>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      isVisible: false
    }
  },
  created: function () {
    setTimeout(() => {
      this.isVisible = true
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.layouts-welcome {
  height: 100%;
  background: url('../../assets/img/parrot-glitch.jpg') no-repeat center center fixed;
  background-size: cover;
  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .overlay-bg {
    background: rgba(#000, .75);
  }
  .content-text {
    background-color: rgba(0,0,0,0.5);
  }
}
</style>
