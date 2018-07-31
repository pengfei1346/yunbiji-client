import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import seach from '../views/seach'
import detail from '../views/detail'
import write from '../views/write'
import Header from '../components/Header'
import register from '../views/register'
import editor from '../components/editor'
import ajaxup from '../components/ajaxup'
import putImg from '../components/putImg'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/index'},
    {path: '/index', component: index},
    {path: '/seach', component: seach},
    {path: '/detail', component: detail},
    {path: '/write', component: write},

    {path: '/Header', component: Header},
    {path: '/register', component: register},
    {path: '/editor', component: editor},
    {path: '/ajaxup', component: ajaxup},

    {path: '/putImg', component: putImg},
  ]
})
