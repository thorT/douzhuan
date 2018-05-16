import fastclick from 'fastclick'
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import 'static/icon/iconfont.css'
import 'common/stylus/index.styl'

// Vue.config.productionTip = false

//解决300毫秒延迟
fastclick.attach(document.body);

Vue.use(VueLazyload,{
  loading:require('static/image/default.png')
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
