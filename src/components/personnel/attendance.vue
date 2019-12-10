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

  }
}
</script>
<style>

</style>
