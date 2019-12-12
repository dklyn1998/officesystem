<template>
    <div>
        <el-card>
            <el-row :gutter='5'>
                <el-col :span='2'>
                    <el-select v-model="value" placeholder="合同类型">
                        <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span='2'>
                    <el-input v-model="input3" placeholder="编号"></el-input>
                </el-col>
                <el-col :span='2'>
                    <el-input v-model="input3" placeholder="职员"></el-input>
                </el-col>
                <el-col :span='3.1'>
                    <el-date-picker
                        v-model="input1"
                        type="date"
                        placeholder="开始日期">
                    </el-date-picker>
                </el-col>
                <el-col :span='3.1'>
                    <el-date-picker
                        v-model="input2"
                        type="date"
                        placeholder="结束日期">
                    </el-date-picker>
                </el-col>
                <el-col :span='2'>
                    <el-select v-model="value1" placeholder="部门">
                        <el-option
                            v-for="item in options2"
                            :key="item.value2"
                            :label="item.label"
                            :value="item.value2">
                        </el-option>
                    </el-select>
                </el-col>

                <el-col :span='2.5'><el-button type='warning'>立即查询</el-button></el-col>
                <el-col :span='1.5'><el-button type='primary'>重置查询</el-button></el-col>
                <el-col :span='4.5'><el-button type='primary' @click="newAgreement">新增合同</el-button></el-col>
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
                prop="kinds"
                label="合同类型">
                </el-table-column>
                <el-table-column
                prop="name"
                label="职员"
                >
                </el-table-column>
                <el-table-column
                prop="position"
                label="职员部门">
                </el-table-column>
                <el-table-column
                prop="startDate"
                label="起始日期">
                </el-table-column>
                <el-table-column
                prop="endDate"
                label="到期日期">
                </el-table-column>
                <el-table-column
                prop="tryDate"
                label="试用期限">
                </el-table-column>
                <el-table-column
                prop="operator"
                label="经办人">
                </el-table-column>
                <el-table-column
                prop="signDate"
                label="签订日期">
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
      options2: [{
        value2: '选项12',
        label: '黄金糕'
      }, {
        value2: '选项22',
        label: '双皮奶'
      }, {
        value2: '选项32',
        label: '蚵仔煎'
      }, {
        value2: '选项42',
        label: '龙须面'
      }, {
        value2: '选项52',
        label: '北京烤鸭'
      }],
      value: '',
      value1: '',
      input: '',
      input1: '',
      input2: '',
      input3: '',
      //   下方表格的数据没有后台只能自己写了
      tableData: [
        {
          number: '18112345678912345',
          kinds: '正式合同',
          name: '徐无心',
          position: '财务部',
          startDate: '2019-07-17',
          endDate: '2019-07-31',
          tryDate: '2019-08-18',
          operator: '徐无心',
          signDate: '2019-07-17'
        },
        {
          number: '18112345678912345',
          kinds: '正式合同',
          name: '徐无心',
          position: '财务部',
          startDate: '2019-07-17',
          endDate: '2019-07-31',
          tryDate: '2019-08-18',
          operator: '徐无心',
          signDate: '2019-07-17'
        },
        {
          number: '18112345678912345',
          kinds: '正式合同',
          name: '徐无心',
          position: '财务部',
          startDate: '2019-07-17',
          endDate: '2019-07-31',
          tryDate: '2019-08-18',
          operator: '徐无心',
          signDate: '2019-07-17'
        },
        {
          number: '18112345678912345',
          kinds: '正式合同',
          name: '徐无心',
          position: '财务部',
          startDate: '2019-07-17',
          endDate: '2019-07-31',
          tryDate: '2019-08-18',
          operator: '徐无心',
          signDate: '2019-07-17'
        },
        {
          number: '18112345678912345',
          kinds: '正式合同',
          name: '徐无心',
          position: '财务部',
          startDate: '2019-07-17',
          endDate: '2019-07-31',
          tryDate: '2019-08-18',
          operator: '徐无心',
          signDate: '2019-07-17'
        },
        {
          number: '18112345678912345',
          kinds: '正式合同',
          name: '徐无心',
          position: '财务部',
          startDate: '2019-07-17',
          endDate: '2019-07-31',
          tryDate: '2019-08-18',
          operator: '徐无心',
          signDate: '2019-07-17'
        },
        {
          number: '18112345678912345',
          kinds: '正式合同',
          name: '徐无心',
          position: '财务部',
          startDate: '2019-07-17',
          endDate: '2019-07-31',
          tryDate: '2019-08-18',
          operator: '徐无心',
          signDate: '2019-07-17'
        }
      ]
    }
  },
  created () {

  },
  methods: {
    newAgreement () {
      this.$router.push('/newAgreement')
    }
  }
}
</script>
<style scoped>
.el-pagination{
    text-align: right;
}
</style>
