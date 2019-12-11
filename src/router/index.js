import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import welcome from '../components/welcome.vue'
import login from '../components/login.vue'
import dailyWork from '../components/privatework/dailyWork.vue'
import studyReport from '../components/privatework/studyReport.vue'
import project from '../components/itemcenter/project.vue'
import statement from '../components/itemcenter/statement.vue'
import department from '../components/administration/department.vue'
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
import financialStatement from '../components/financial/financialStatement.vue'
import customList from '../components/custom/customList.vue'
import customerDynamics from '../components/custom/customerDynamics.vue'
// 个人办公的新增页面
import newSet from '../components/privatework/newSet.vue'
// 项目的新增
import itemNew from '../components/itemcenter/itemNew.vue'
// 新增职员
import newStaff from '../components/administration/newStaff.vue'
// 新增部门
import newDepartment from '../components/administration/newDepartment.vue'
// 职务管理
import positionManager from '../components/administration/positionManager.vue'
// 添加新闻
import getNews from '../components/server/getNews.vue'
// 新增职员
import newMerber from '../components/server/newMerber.vue'
// 新增请假
import newAttend from '../components/personnel/newAttend.vue'
// 财务报销
import newFinancial from '../components/financial/newFinancial.vue'
// 新增合同
import newAgreement from '../components/personnel/newAgreement.vue'
// 新增客户
import newCustom from '../components/custom/newCustom.vue'
Vue.use(Router)
const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    { path: '/home',
      component: home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: welcome },
        { path: '/dailyWork', component: dailyWork },
        { path: '/studyReport', component: studyReport },
        { path: '/project', component: project },
        { path: '/statement', component: statement },
        { path: '/department', component: department },
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
        { path: '/financialStatement', component: financialStatement },
        { path: '/reimbursement', component: reimbursement },
        { path: '/customList', component: customList },
        { path: '/customerDynamics', component: customerDynamics },
        { path: '/newSet', component: newSet },
        { path: '/itemNew', component: itemNew },
        { path: '/newStaff', component: newStaff },
        { path: '/newDepartment', component: newDepartment },
        { path: '/positionManager', component: positionManager },
        { path: '/getNews', component: getNews },
        { path: '/newMerber', component: newMerber },
        { path: '/newAttend', component: newAttend },
        { path: '/newFinancial', component: newFinancial },
        { path: '/newAgreement', component: newAgreement },
        { path: '/newCustom', component: newCustom }
      ]
    }
  ]
})
export default router
