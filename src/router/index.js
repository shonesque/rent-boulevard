import Vue from 'vue'
import Router from 'vue-router'
import landingPage from '@/components/landingPage'
import searchPage from '@/components/searchPage'
import addNewLocation from '@/components/addNewLocation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: landingPage
    },
    {
      path: '/search',
      name: 'searchPage',
      component: searchPage
    },
    {
      path: '/addLocation',
      name: 'addNewLocation',
      component: addNewLocation
    }
  ]
})
