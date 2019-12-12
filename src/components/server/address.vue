<template>
    <div>
        <el-card>
            <el-row :gutter='5'>
                <el-col :span='3'>
                    <el-input v-model="input1" placeholder="标题"></el-input>
                </el-col>
                <el-col :span='2'>
                    <el-input v-model="input2" placeholder="姓名"></el-input>
                </el-col>
                <el-col :span='3'>
                    <el-input v-model="input3" placeholder="移动电话"></el-input>
                </el-col>
                <el-col :span='3'>
                    <el-input v-model="input4" placeholder="固定电话"></el-input>
                </el-col>
                <el-col :span='3'>
                    <el-input v-model="input5" placeholder="办公QQ"></el-input>
                </el-col>
                <el-col :span='2'>
                    <el-input v-model="input6" placeholder="微信"></el-input>
                </el-col>
                <el-col :span='2'>
                    <el-input v-model="input7" placeholder="邮箱"></el-input>
                </el-col>
                <el-col :span='2.5'><el-button type='warning'>立即查询</el-button></el-col>
                <el-col :span='1.5'><el-button type='primary'>重置查询</el-button></el-col>
            </el-row>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%"
                border>
                <el-table-column
                type='index'
                label="NO"
                width="60">
                </el-table-column>
                <el-table-column
                prop="workNum"
                label="工号">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名">
                </el-table-column>
                <el-table-column
                prop="sex"
                label="性别"
                >
                </el-table-column>
                <el-table-column
                prop="phone"
                label="办公电话">
                </el-table-column>
                <el-table-column
                prop="mobile"
                label="移动电话">
                </el-table-column>
                <el-table-column
                prop="mobile"
                label="移动电话">
                </el-table-column>
                <el-table-column
                prop="qq"
                label="QQ">
                </el-table-column>
                <el-table-column
                prop="wechat"
                label="微信">
                </el-table-column>
                <el-table-column
                prop="email"
                label="邮箱">
                </el-table-column>
                <el-table-column
                prop="position"
                label="职位">
                </el-table-column>
            </el-table>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </el-card>
    </div>
</template>
<script>
export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      //   下方表格的数据没有后台只能自己写了
      tableData: [
        {
          workNum: 'H00004',
          name: '李星杰',
          sex: '男',
          phone: '123454314641',
          mobile: '13684462542',
          qq: '47154264132',
          wechat: 'hk456149614',
          email: 'fh4265862@163.com',
          position: '总经理助理'
        },
        {
          workNum: 'H00004',
          name: '李星杰',
          sex: '男',
          phone: '123454314641',
          mobile: '13684462542',
          qq: '47154264132',
          wechat: 'hk456149614',
          email: 'fh4265862@163.com',
          position: '总经理助理'
        },
        {
          workNum: 'H00004',
          name: '李星杰',
          sex: '男',
          phone: '123454314641',
          mobile: '13684462542',
          qq: '47154264132',
          wechat: 'hk456149614',
          email: 'fh4265862@163.com',
          position: '总经理助理'
        },
        {
          workNum: 'H00004',
          name: '李星杰',
          sex: '男',
          phone: '123454314641',
          mobile: '13684462542',
          qq: '47154264132',
          wechat: 'hk456149614',
          email: 'fh4265862@163.com',
          position: '总经理助理'
        },
        {
          workNum: 'H00004',
          name: '李星杰',
          sex: '男',
          phone: '123454314641',
          mobile: '13684462542',
          qq: '47154264132',
          wechat: 'hk456149614',
          email: 'fh4265862@163.com',
          position: '总经理助理'
        }

      ]
    }
  },
  created () {

  },
  methods: {

  }
}
</script>
<style scoped>
.el-pagination{
    text-align: right;
}
</style>
