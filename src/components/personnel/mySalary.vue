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
                prop="name"
                label="职员">
                </el-table-column>
                <el-table-column
                prop="mount"
                label="计薪月份">
                </el-table-column>
                <el-table-column
                prop="basicMoney"
                label="基本工资"
                >
                </el-table-column>
                <el-table-column
                prop="royalty"
                label="业绩提成">
                </el-table-column>
                <el-table-column
                prop="allowance"
                label="福利津贴">
                </el-table-column>
                <el-table-column
                prop="KPI"
                label="绩效考核">
                </el-table-column>
                <el-table-column
                prop="lessMoney"
                label="应扣薪酬">
                </el-table-column>
                <el-table-column
                prop="actualPay"
                label="实发薪酬">
                </el-table-column>
                <el-table-column
                prop="paid"
                label="已发薪酬">
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
      //   下方表格的数据没有后台只能自己写了
      tableData: [
        {
          name: '姬无心',
          mount: '6月',
          basicMoney: '2500',
          royalty: '1000',
          allowance: '500',
          KPI: '300',
          lessMoney: '300',
          actualPay: '4000',
          paid: '4000'
        },
        {
          name: '姬无心',
          mount: '6月',
          basicMoney: '2500',
          royalty: '1000',
          allowance: '500',
          KPI: '300',
          lessMoney: '300',
          actualPay: '4000',
          paid: '4000'
        },
        {
          name: '姬无心',
          mount: '6月',
          basicMoney: '2500',
          royalty: '1000',
          allowance: '500',
          KPI: '300',
          lessMoney: '300',
          actualPay: '4000',
          paid: '4000'
        },
        {
          name: '姬无心',
          mount: '6月',
          basicMoney: '2500',
          royalty: '1000',
          allowance: '500',
          KPI: '300',
          lessMoney: '300',
          actualPay: '4000',
          paid: '4000'
        },
        {
          name: '姬无心',
          mount: '6月',
          basicMoney: '2500',
          royalty: '1000',
          allowance: '500',
          KPI: '300',
          lessMoney: '300',
          actualPay: '4000',
          paid: '4000'
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
