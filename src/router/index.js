import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Info from '@/components/Info'
import Posts from '@/components/Posts'
import Comments from '@/components/Comments'
import Album from '@/components/Album'
import Photos from '@/components/Photos'
Vue.use(Router)

export default new Router({
  routes:[
    {
    path:'/',
    name:'Home',
    component:Home
    },
    {
    path:'/Info',
    name:'Info',
    component:Info
    },
    {
    path:'/Posts',
    name:'Posts',
    component:Posts,
    },
    {
    path:'/Comments',
    name:'Comments',
    component:Comments,
    },
    {
    path:'/Album',
    name:'Album',
    component:Album,
    },
    {
    path:'/Photos',
    name:'Photos',
    component:Photos
    },
  ]
})
