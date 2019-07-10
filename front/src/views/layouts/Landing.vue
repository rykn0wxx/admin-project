<template>
  <div class="landing-page">
    <v-app dark id="app-layouts-landing" class="layouts-landing landing__wrapper tw-h-full tw-relative tw-bg-center tw-bg-no-repeat tw-bg-cover">
      <GAppParticles v-if="showParticles" />
      <g-app-content contentClass="pa-0 tw-relative tw-w-tw-h-full">
        <v-container fluid class="landing__showcase tw-h-screen tw-flex">
          <v-layout align-center justify-start column fill-height class="tw-flex">
            <v-flex class="tw-w-full tw-pt-20">
              <div class="landing__hero tw-px-16 tw-py-8 tw-pb-0">
                <v-img contain height="200" :src="require('../../assets/img/svg/main-hero.svg')" />
              </div>
            </v-flex>
            <v-flex class="tw-relative tw-w-full">
              <Animated enter="slideInLeft">
                <div v-show="isVisible" class="tw-text-center tw-px-16">
                  <v-btn color="primary-light" dark flat outline large to="/authentication">Enter</v-btn>
                  <v-btn color="primary-light" dark flat outline large to="/app">App</v-btn>
                </div>
              </Animated>
            </v-flex>
          </v-layout>
        </v-container>
      </g-app-content>
      <v-switch
        class="tw-absolute tw-bottom-0 tw-right-0 tw-mr-2 particles-switch"
        v-model="showParticles"
        label="Show particles"></v-switch>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'LayoutsLanding',
  data () {
    return {
      partOpts: {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
            image: { src: 'img/github.svg', width: 100, height: 100 }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: true
      },
      showParticles: false,
      isVisible: false
    }
  },
  created: function () {
    setTimeout(() => {
      this.isVisible = true
    }, 1000)
  },
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
  &__showcase {
    position: relative;
    min-width: 100%;
    padding: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background-image: url('../../assets/img/mask-smog.jpg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: opacity(0.2) blur(10px);
    }
  }
}
.particles-switch {
  z-index: 1;
}
</style>
