import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import login from '../components/login.vue'
import dailyWork from '../components/privatework/dailyWork.vue'
import studyReport from '../components/privatework/studyReport.vue'
import project from '../components/itemcenter/project.vue'
import statement from '../components/itemcenter/statement.vue'
import staff from '../components/administration/staff.vue'
import member from '../components/server/member.vue'
import news from '../components/server/news.vue'
import address from '../components/server/address.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    { path: '/home',
      component: home,
      children: [
        { path: '/dailyWork', component: dailyWork },
        { path: '/studyReport', component: studyReport },
        { path: '/project', component: project },
        { path: '/statement', component: statement },
        { path: '/staff', component: staff },
        { path: '/member', component: member },
        { path: '/news', component: news },
        { path: '/address', component: address }
      ]
    }
  ]
})
export default router
