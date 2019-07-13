<script>
export default {
  name: 'AppSidebar',
  inheritAttrs: false,
  provide () {
    return { appSidebar: this }
  },
  props: {
    appColors: {
      type: Object
    },
    asideClass: {
      type: [String],
      default: null
    },
    navClass: {
      type: [String],
      default: null
    }
  },
  methods: {
    toggler (obj, objProp) {
      obj[objProp] = !obj[objProp]
    }
  },
  render (h) {
    return h('aside', {
      staticClass: 'app-sidebar',
      class: this.asideClass,
      ref: 'appSidebar'
    }, [
      h('nav', {
        staticClass: 'app-sidebar__nav',
        class: this.navClass
      }, this.$slots.default)
    ])
  }
}
</script>

<style lang="scss" scoped></style>
