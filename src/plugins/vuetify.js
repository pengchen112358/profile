// import 'material-design-icons-iconfont/dist/material-design-icons.css' // 确保您正在使用 css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
  breakpoint: {
    mobileBreakpoint: 'sm' // This is equivalent to a value of 960
  },
})