<script>
import { merge } from 'lodash'
import SSRBootable from 'vuetify/lib/mixins/ssr-bootable'
import Themeable from 'vuetify/lib/mixins/themeable'

export default {
  name: 'AppParticles',
  mixins: [ SSRBootable, Themeable ],
  props: {
    particlesOptions: {
      type: Object,
      default: () => {}
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.createParticle()
    })
  },
  methods: {
    createParticle () {
      const opts = merge({}, this.$particlesJS['PARTICLE_DEFAULT_OPTS'], this.particlesOptions)
      this.$particlesJS(this.$refs.particleJs.id, opts)
    }
  },
  render (h) {
    const particlesBg = {
      staticClass: 'particles-bg',
      ref: 'particlesBg',
      attrs: {
        id: 'particles-bg'
      }
    }
    const particleWrapperOpts = {
      staticClass: 'particles-wrapper',
      attrs: {
        id: 'particles-js'
      },
      ref: 'particleJs'
    }
    return h('div', particlesBg, [
      h('div', particleWrapperOpts, this.$slots.default)
    ])
  }
}
</script>

<style lang="scss" scoped>
.particles-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  .particles-wrapper {
    width: 100%;
    height: 100%;
  }
}
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  // background-color: #b61924;
  // background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
