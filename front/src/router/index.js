import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Admin from '@/components/admin/Admin'
import Login from '@/components/admin/Login'
import Date from '@/components/admin/Date'
import Forecast from '@/components/Forecast'
import Selected from '@/components/Selected'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/admin/main',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin/date',
      name: 'Date',
      component: Date
    },
    {
      path: '/forecast',
      name: 'Forecast',
      component: Forecast
    },
    {
      path: '/selected',
      name: 'Selected',
      component: Selected
    }
  ]
})
