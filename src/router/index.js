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
import myAttendance from '../components/personnel/myAttendance.vue'
import attendance from '../components/personnel/attendance.vue'
import performance from '../components/personnel/performance.vue'
import mySalary from '../components/personnel/mySalary.vue'
import agreement from '../components/personnel/agreement.vue'
import signAgreement from '../components/personnel/signAgreement.vue'
import reimbursement from '../components/financial/reimbursement.vue'
import customList from '../components/custom/customList.vue'
import customerDynamics from '../components/custom/customerDynamics.vue'

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
        { path: '/address', component: address },
        { path: '/myAttendance', component: myAttendance },
        { path: '/attendance', component: attendance },
        { path: '/performance', component: performance },
        { path: '/mySalary', component: mySalary },
        { path: '/agreement', component: agreement },
        { path: '/signAgreement', component: signAgreement },
        { path: '/reimbursement', component: reimbursement },
        { path: '/customList', component: customList },
        { path: '/customerDynamics', component: customerDynamics }
      ]
    }
  ]
})
export default router
