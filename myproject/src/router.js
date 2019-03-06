import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',name: 'home',component: Home,meta:{keepAlive:true }},
    {path: '/text',name: 'text',component: () => import('./views/mytext.vue'),meta:{keepAlive:true}},
    {path: '/myvideo',name: 'myvideo',component: () => import('./views/videoList.vue'),meta:{keepAlive:true}},
    {path: '/videodesc',name: 'videodesc',component: () => import('./views/videoDesc.vue'),meta:{keepAlive:false}},
    {path: '/newsList',name: 'newsList',component: () => import('./views/newsList.vue'),meta:{keepAlive:true}},
    {path: '/myimages',name: 'myimages',component: () => import('./views/images.vue'),meta:{keepAlive:true}},





    {path: '*',name: 'no404',component: () => import('./views/no404.vue'),meta:{keepAlive:true}},
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

