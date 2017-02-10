/**
 * Created by Administrator on 2017/1/3.
 */
import Vue from 'vue'
import VueRouter from "vue-router";
import VueRescource from "vue-resource"

// import App from './App.vue'
import routes from './router.js'

// var Favlist = require('./components/Favlist.vue')
// var Favlist2 = require('./components/Favlist2.vue')
// var Favlist3 = require('./components/Favlist3.vue')
// var App = require('./App.vue')


Vue.config.debug = true;//开启错误提示

Vue.use(VueRouter);
Vue.use(VueRescource);


var router = new VueRouter({
  routes: routes,
  mode:'history'
});

var app = new Vue({
  router: router
  // render: function (h) {
  //   return h(App);
  // }
}).$mount('#app');
// router.start.
// router.start(app, '#app')
router.push('/home');

