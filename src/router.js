import Vue from 'vue'
import Router from 'vue-router'
import Comic from './views/Comic.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/:id?',
      name: 'comic',
      component: Comic,
      props: true
    }
  ]
})
