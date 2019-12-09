<template>
      <el-container class='home_container'>
        <!-- 侧边栏区域 -->
        <el-aside width="200px">
          <div class="logo">LOGO</div>
          <img src="../assets/image/home/logo.png"  class="logo_image"/>
          <div>李明</div>
          <div class='btn_area'>
             <el-button type="warning" icon="el-icon-setting" circle size='mini'></el-button>
            <el-button type="warning" icon="el-icon-delete" circle size='mini'></el-button>
          </div>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            active-text-color='#fff'
            router>
            <!-- 一级菜单 -->
            <el-submenu index="1">
              <!-- 一级菜单的模板区域 -->
              <template slot="title"><span>个人办公</span></template>
              <el-menu-item index="dailyWork">日常办公</el-menu-item>
              <el-menu-item index="studyReport">学习报告</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <!-- 一级菜单的模板区域 -->
              <template slot="title"><span>项目中心</span></template>
              <el-menu-item index="project">项目</el-menu-item>
              <el-menu-item index="statement">统计报表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <!-- 一级菜单的模板区域 -->
              <template slot="title"><span>行政管理</span></template>
              <el-menu-item index="3-1">部门管理</el-menu-item>
              <el-menu-item index="staff">职员管理</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <!-- 一级菜单的模板区域 -->
              <template slot="title"><span>服务中心</span></template>
              <el-menu-item index="member">会员客户</el-menu-item>
              <el-menu-item index="news">公告新闻</el-menu-item>
              <el-menu-item index="address">通信录</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <!-- 一级菜单的模板区域 -->
              <template slot="title"><span>人事酬薪</span></template>
              <el-menu-item index="5-1">我的考勤</el-menu-item>
              <el-menu-item index="5-2">考勤管理</el-menu-item>
              <el-menu-item index="5-3">业绩管理</el-menu-item>
              <el-menu-item index="5-4">我的酬薪</el-menu-item>
              <el-menu-item index="5-5">劳动合同</el-menu-item>
              <el-menu-item index="5-6">签约合同</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <!-- 一级菜单的模板区域 -->
              <template slot="title"><span>财务中心</span></template>
              <el-menu-item index="6-1">费用报销</el-menu-item>
              <el-menu-item index="6-2">财务报表</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
              <!-- 一级菜单的模板区域 -->
              <template slot="title"><span>客户中心</span></template>
              <el-menu-item index="6-1">客户名单</el-menu-item>
              <el-menu-item index="6-2">客户动态</el-menu-item>
            </el-submenu>
          </el-menu>
          </el-aside>
        <el-container>
          <!-- 头部区域 -->
          <el-header>管理员<el-button>退出</el-button></el-header>
          <!-- 页面主体区域 -->
          <el-main><router-view></router-view></el-main>
        </el-container>
      </el-container>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  }
}
</script>
<style scope>

.el-container{
  height: 100%;
}
.el-header{
  background-color: #fff;
  box-shadow: 0 5px 10px 5px rgba(199, 199, 199, 0.3);
  text-align:right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.el-aside{
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 0 1px #D9D9D9;
  z-index: 100;
}
.logo{
  font-size: 38px;
  color: #FF6900;
  margin-top: 30px;
}
.logo_image{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: 30px;
}
.btn_area{
  margin-top: 10px;

}
.el-menu{
  width: 100%;
}

</style>
