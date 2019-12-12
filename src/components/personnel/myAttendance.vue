<template>
    <div>
        <el-card>
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
                prop="mount"
                label="月份">
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
          mount: '2019-06-03'
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
          mount: '2019-06-03'
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
          mount: '2019-06-03'
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
          mount: '2019-06-03'
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
          mount: '2019-06-03'
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
          mount: '2019-06-03'
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

</style>
