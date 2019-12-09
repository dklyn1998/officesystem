<template>
    <div>
        <el-card>
            <el-row :gutter='5'>
                <el-col :span='3'>
                    <el-input v-model="input" placeholder="工号"></el-input>
                </el-col>
                <el-col :span='3'>
                    <el-input v-model="input1" placeholder="姓名"></el-input>
                </el-col>
                <el-col :span='3'>
                    <el-select v-model="value" placeholder="部门">
                        <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span='2.5'><el-button type='warning'>立即查询</el-button></el-col>
                <el-col :span='1.5'><el-button type='primary'>重置查询</el-button></el-col>
                <el-col :span='4.5'><el-button type='primary'>新增职员</el-button></el-col>
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
                prop="gonghao"
                label="工号">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名">
                </el-table-column>
                <el-table-column
                prop="sex"
                label="性别">
                </el-table-column>
                <el-table-column
                prop="department"
                label="部门">
                </el-table-column>
                <el-table-column
                prop="mainPosition"
                label="主职位">
                </el-table-column>
                <el-table-column
                prop="mobile"
                label="移动电话">
                </el-table-column>
                <el-table-column
                prop="date"
                label="入职日期">
                </el-table-column>
                <el-table-column
                prop="status"
                label="入职状态">
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
      options1: [{
        value: '选项1',
        label: '黄金糕1'
      }, {
        value: '选项2',
        label: '双皮奶1'
      }, {
        value: '选项3',
        label: '蚵仔煎1'
      }, {
        value: '选项4',
        label: '龙须面1'
      }, {
        value: '选项5',
        label: '北京烤鸭1'
      }],
      value: '',
      input: '',
      input1: '',
      //   下方表格的数据没有后台只能自己写了
      tableData: [
        {
          gonghao: '18112345678912345',
          name: '雅雅',
          sex: '男',
          department: '财务部',
          mainPosition: '总经理助理',
          mobile: '15588552233',
          date: '2015-05-09 工龄：4年',
          status: '在职'
        },
        {
          gonghao: '18112345678912345',
          name: '雅雅',
          sex: '男',
          department: '财务部',
          mainPosition: '总经理助理',
          mobile: '15588552233',
          date: '2015-05-09 工龄：4年',
          status: '在职'
        },
        {
          gonghao: '18112345678912345',
          name: '雅雅',
          sex: '男',
          department: '财务部',
          mainPosition: '总经理助理',
          mobile: '15588552233',
          date: '2015-05-09 工龄：4年',
          status: '在职'
        },
        {
          gonghao: '18112345678912345',
          name: '雅雅',
          sex: '男',
          department: '财务部',
          mainPosition: '总经理助理',
          mobile: '15588552233',
          date: '2015-05-09 工龄：4年',
          status: '在职'
        },
        {
          gonghao: '18112345678912345',
          name: '雅雅',
          sex: '男',
          department: '财务部',
          mainPosition: '总经理助理',
          mobile: '15588552233',
          date: '2015-05-09 工龄：4年',
          status: '在职'
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
<style>
.el-pagination{
    text-align: right;
}
</style>
