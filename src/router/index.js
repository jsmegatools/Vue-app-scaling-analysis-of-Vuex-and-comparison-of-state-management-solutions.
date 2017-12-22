import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/Profile'
import ProfilesList from '@/components/ProfilesList'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/profile/:id', component: Profile },
    { path: '/', component: ProfilesList }
  ]
})
