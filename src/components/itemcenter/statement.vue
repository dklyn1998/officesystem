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
                prop="bianhao"
                label="编号">
                </el-table-column>
                <el-table-column
                prop="mingcheng"
                label="名称">
                </el-table-column>

                <el-table-column
                prop="kehu"
                label="客户">
                </el-table-column>
                <el-table-column
                prop="orderMoney"
                label="订单金额"
                width="100">
                </el-table-column>
                <el-table-column
                prop="bcwp"
                label="预算成本">
                </el-table-column>
                <el-table-column
                prop="realMoney"
                label="实际支出成本">
                </el-table-column>
                <el-table-column
                prop="profit"
                label="决算利润">
                </el-table-column>
                <el-table-column
                prop="nowGet"
                label="当前已收款">
                </el-table-column>
                <el-table-column
                prop="otherGet"
                label="剩余可收款">
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
          bianhao: 18112345678912345,
          mingcheng: '今年计划将',
          kehu: '小虎',
          orderMoney: '50,000',
          bcwp: '500',
          realMoney: '500',
          profit: '',
          nowGet: '40,000',
          otherGet: ''
        },
        {
          bianhao: 18112345678912345,
          mingcheng: '今年计划将',
          kehu: '小虎',
          orderMoney: '50,000',
          bcwp: '500',
          realMoney: '500',
          profit: '',
          nowGet: '40,000',
          otherGet: ''
        },
        {
          bianhao: 18112345678912345,
          mingcheng: '今年计划将',
          kehu: '小虎',
          orderMoney: '50,000',
          bcwp: '500',
          realMoney: '500',
          profit: '',
          nowGet: '40,000',
          otherGet: ''
        },
        {
          bianhao: 18112345678912345,
          mingcheng: '今年计划将',
          kehu: '小虎',
          orderMoney: '50,000',
          bcwp: '500',
          realMoney: '500',
          profit: '',
          nowGet: '40,000',
          otherGet: ''
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
