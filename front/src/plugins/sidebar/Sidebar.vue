<script>
export default {
  name: 'Sidebar',
  data () {
    return {}
  },
  props: {
    tag: {
      type: String,
      default: 'aside'
    },
    navClass: {
      type: String,
      default: ''
    }
  },
  provide () {
    return { mSidebar: this }
  },
  render (h) {
    const sbConfig = {
      staticClass: 'app-sidebar',
      ref: 'appSidebar'
    }
    const navConfig = {
      staticClass: `app-sidebar__nav ${this.navClass}`
    }
    return h(this.tag, sbConfig, [
      h('nav', { staticClass: `${navConfig.staticClass.trim()}` }, this.$slots.default)
    ])
  }
}
</script>

<style lang="scss" scoped></style>
