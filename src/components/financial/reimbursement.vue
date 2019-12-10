<template>
    <div>
        <el-card>
            <el-row :gutter='5'>
                <el-col :span='3'>
                    <el-input v-model="input" placeholder="编号"></el-input>
                </el-col>
                <el-col :span='3.5'>
                    <el-date-picker
                        v-model="input1"
                        type="date"
                        placeholder="开始日期">
                    </el-date-picker>
                </el-col>
                <el-col :span='3.5'>
                    <el-date-picker
                        v-model="input2"
                        type="date"
                        placeholder="结束日期">
                    </el-date-picker>
                </el-col>
                 <el-col :span='3'>
                    <el-input v-model="input3" placeholder="报销事由"></el-input>
                </el-col>
                 <el-col :span='2'>
                    <el-input v-model="input4" placeholder="报销人"></el-input>
                </el-col>
                <el-col :span='2.5'><el-button type='warning'>立即查询</el-button></el-col>
                <el-col :span='1.5'><el-button type='primary'>重置查询</el-button></el-col>
                <el-col :span='4.5'><el-button type='primary'>申请费用报销</el-button></el-col>
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
                prop="number"
                label="编号">
                </el-table-column>
                <el-table-column
                prop="somethings"
                label="报销事由">
                </el-table-column>
                <el-table-column
                prop="startDate"
                label="申请日期"
                >
                </el-table-column>
                <el-table-column
                prop="endDate"
                label="记账日期">
                </el-table-column>
                <el-table-column
                prop="reimbursementPerson"
                label="报销人">
                </el-table-column>
                <el-table-column
                prop="applyMoney"
                label="申请报销金额">
                </el-table-column>
                <el-table-column
                prop="realityMoney"
                label="实际报销金额">
                </el-table-column>
                <el-table-column
                prop="status"
                label="状态">
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
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      //   下方表格的数据没有后台只能自己写了
      tableData: [
        {
          number: '18112345678912345',
          somethings: '出差',
          startDate: '2019-05-28',
          endDate: '2019-05-28',
          reimbursementPerson: '李明明    普通员工',
          applyMoney: '820.00',
          realityMoney: '820.00',
          status: '审核中'
        },
        {
          number: '18112345678912345',
          somethings: '出差',
          startDate: '2019-05-28',
          endDate: '2019-05-28',
          reimbursementPerson: '李明明    普通员工',
          applyMoney: '820.00',
          realityMoney: '820.00',
          status: '审核中'
        },

        {
          number: '18112345678912345',
          somethings: '出差',
          startDate: '2019-05-28',
          endDate: '2019-05-28',
          reimbursementPerson: '李明明    普通员工',
          applyMoney: '820.00',
          realityMoney: '820.00',
          status: '审核中'
        },

        {
          number: '18112345678912345',
          somethings: '出差',
          startDate: '2019-05-28',
          endDate: '2019-05-28',
          reimbursementPerson: '李明明    普通员工',
          applyMoney: '820.00',
          realityMoney: '820.00',
          status: '审核中'
        },

        {
          number: '18112345678912345',
          somethings: '出差',
          startDate: '2019-05-28',
          endDate: '2019-05-28',
          reimbursementPerson: '李明明    普通员工',
          applyMoney: '820.00',
          realityMoney: '820.00',
          status: '审核中'
        },

        {
          number: '18112345678912345',
          somethings: '出差',
          startDate: '2019-05-28',
          endDate: '2019-05-28',
          reimbursementPerson: '李明明    普通员工',
          applyMoney: '820.00',
          realityMoney: '820.00',
          status: '审核中'
        },

        {
          number: '18112345678912345',
          somethings: '出差',
          startDate: '2019-05-28',
          endDate: '2019-05-28',
          reimbursementPerson: '李明明    普通员工',
          applyMoney: '820.00',
          realityMoney: '820.00',
          status: '审核中'
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
