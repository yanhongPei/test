import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Jobs from '@/components/Jobs/Jobs'
import Companies from '@/components/Companies/Companies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name:'Jobs'}
    },
    {
      path: '/Jobs',
      name: 'Jobs',
      component: Jobs
    },
    {
      path: '/Companies',
      name: 'Companies',
      component: Companies
    }
  ]
})
