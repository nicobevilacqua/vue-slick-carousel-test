import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages'
import ApiDoc from '../pages/api'
import Examples from '../pages/examples'
import exampleConfigs from '../pages/examples/configs'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/api', component: ApiDoc },
  { path: '/example', redirect: '/example/simple' },
  {
    path: '/example/:example',
    component: Examples,
    props: route => {
      const config = exampleConfigs[route.params.example]
      return {
        config,
      }
    },
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes,
})

export default router
