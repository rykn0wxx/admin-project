import sidebar from './sidebar/index'

const plugin = {
  install (vm) {
    sidebar(vm)
  }
}

export default plugin
