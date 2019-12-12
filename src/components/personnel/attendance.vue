<template>
    <div>
        <el-card>
            <el-row :gutter='5'>
                <el-col :span='3'>
                    <el-select v-model="value" placeholder="职位">
                        <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span='3'>
                    <el-input v-model="input1" placeholder="职员"></el-input>
                </el-col>
                <el-col :span='2.5'><el-button type='warning'>立即查询</el-button></el-col>
                <el-col :span='1.5'><el-button type='primary'>重置查询</el-button></el-col>
                <el-col :span='1.5'><el-button type='primary' @click="newAttend">新增</el-button></el-col>
            </el-row>
            <el-row class='row_top' :gutter='10'>
              <el-col :span='1.5'><div @click="isShow(1)" :class="showActive==1?'active':''" class="col_height">考勤结算</div></el-col>
              <el-col :span='1.5'> <div @click="isShow(2)" :class="showActive==2?'active':''" class="col_height">请假</div> </el-col>
              <el-col :span='1.5'><div @click="isShow(3)" :class="showActive==3?'active':''" class="col_height">外出</div></el-col>
              <el-col :span='1.5'><div @click="isShow(4)" :class="showActive==4?'active':''" class="col_height">出差</div></el-col>
              <el-col :span='1.5'><div @click="isShow(5)" :class="showActive==5?'active':''" class="col_height">加班</div></el-col>
            </el-row>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%"
                border
                 v-if="showActive==1">
                <el-table-column
                type='index'
                label="NO"
                width="60"
               >
                </el-table-column>
                <el-table-column
                prop="workMan"
                label="职员">
                </el-table-column>
                <el-table-column
                prop="position"
                label="职位">
                </el-table-column>
                <el-table-column
                prop="addTime"
                label="加班(时）"
                >
                </el-table-column>
                <el-table-column
                prop="sleepEarly"
                label="迟到">
                </el-table-column>
                <el-table-column
                prop="backEarly"
                label="早退">
                </el-table-column>
                <el-table-column
                prop="signIn"
                label="签到">
                </el-table-column>
                <el-table-column
                prop="notSign"
                label="漏签到">
                </el-table-column>
                <el-table-column
                prop="yearVacation"
                label="年假（天）">
                </el-table-column>
                <el-table-column
                prop="illVacation"
                label="病假（天）">
                </el-table-column>
                <el-table-column
                prop="leaveVacation"
                label="事假（天）">
                </el-table-column>
                <el-table-column
                prop="travel"
                label="出差（次）">
                </el-table-column>
                <el-table-column
                prop="lessMoney"
                label="扣薪">
                </el-table-column>
            </el-table>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%"
                border
                v-else>
                <el-table-column
                type='index'
                label="NO"
                width="60">
                </el-table-column>
                <el-table-column
                prop="workMan"
                label="职员">
                </el-table-column>
                <el-table-column
                prop="position"
                label="职位">
                </el-table-column>
                <el-table-column
                prop="addTime"
                label="请假类型"
                >
                </el-table-column>
                <el-table-column
                prop="sleepEarly"
                label="起始时间">
                </el-table-column>
                <el-table-column
                prop="backEarly"
                label="截至时间">
                </el-table-column>
                <el-table-column
                prop="signIn"
                label="请假事由">
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
      showActive: 1,
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
      tableData: [
        {
          workMan: '姬无心',
          position: '人事教育部',
          addTime: '5',
          sleepEarly: '0',
          backEarly: '0',
          signIn: '200',
          notSign: '0',
          yearVacation: '0',
          illVacation: '0',
          leaveVacation: '0',
          travel: '0',
          lessMoney: '200'
        },
        {
          workMan: '姬无心',
          position: '人事教育部',
          addTime: '5',
          sleepEarly: '0',
          backEarly: '0',
          signIn: '200',
          notSign: '0',
          yearVacation: '0',
          illVacation: '0',
          leaveVacation: '0',
          travel: '0',
          lessMoney: '200'
        },
        {
          workMan: '姬无心',
          position: '人事教育部',
          addTime: '5',
          sleepEarly: '0',
          backEarly: '0',
          signIn: '200',
          notSign: '0',
          yearVacation: '0',
          illVacation: '0',
          leaveVacation: '0',
          travel: '0',
          lessMoney: '200'
        },
        {
          workMan: '姬无心',
          position: '人事教育部',
          addTime: '5',
          sleepEarly: '0',
          backEarly: '0',
          signIn: '200',
          notSign: '0',
          yearVacation: '0',
          illVacation: '0',
          leaveVacation: '0',
          travel: '0',
          lessMoney: '200'
        },
        {
          workMan: '姬无心',
          position: '人事教育部',
          addTime: '5',
          sleepEarly: '0',
          backEarly: '0',
          signIn: '200',
          notSign: '0',
          yearVacation: '0',
          illVacation: '0',
          leaveVacation: '0',
          travel: '0',
          lessMoney: '200'
        },
        {
          workMan: '姬无心',
          position: '人事教育部',
          addTime: '5',
          sleepEarly: '0',
          backEarly: '0',
          signIn: '200',
          notSign: '0',
          yearVacation: '0',
          illVacation: '0',
          leaveVacation: '0',
          travel: '0',
          lessMoney: '200'
        },
        {
          workMan: '姬无心',
          position: '人事教育部',
          addTime: '5',
          sleepEarly: '0',
          backEarly: '0',
          signIn: '200',
          notSign: '0',
          yearVacation: '0',
          illVacation: '0',
          leaveVacation: '0',
          travel: '0',
          lessMoney: '200'
        }
      ]
    }
  },
  created () {

  },
  methods: {
    isShow (number) {
      this.showActive = number
      console.log(this.showActive)
    },
    newAttend () {
      this.$router.push('/newAttend')
    }
  }
}
</script>
<style scoped>
.row_top{
  margin-top: 20px;
}
.col_height{
  padding: 5px;
}
.active{
  background-color: #FF6900;
  color: #fff;
}
</style>
