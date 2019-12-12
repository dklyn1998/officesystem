<template>
    <div>
        <el-card>
            <el-row :gutter='5'>
                <el-col :span='2'>
                    <el-select v-model="value" placeholder="职位">
                        <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span='2'>
                    <el-input v-model="input3" placeholder="职员"></el-input>
                </el-col>
                <el-col :span='2'>
                    <el-select v-model="value1" placeholder="类型">
                        <el-option
                            v-for="item in options2"
                            :key="item.value2"
                            :label="item.label"
                            :value="item.value2">
                        </el-option>
                    </el-select>
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
                prop="workman"
                label="职员">
                </el-table-column>
                <el-table-column
                prop="position"
                label="职位">
                </el-table-column>
                <el-table-column
                prop="kinds"
                label="类型"
                >
                </el-table-column>
                <el-table-column
                prop="money"
                label="金额">
                </el-table-column>
                <el-table-column
                prop="performanceRate"
                label="业绩换算率">
                </el-table-column>
                <el-table-column
                prop="performanceNum"
                label="业绩额">
                </el-table-column>
                <el-table-column
                prop="royaltyRate"
                label="提成率">
                </el-table-column>
                <el-table-column
                prop="royaltyMonty"
                label="提成金额">
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
          workman: '姬无心',
          position: '人事教育部',
          kinds: '预收',
          money: '1,000.00',
          performanceRate: '50.00%',
          performanceNum: '500.00',
          royaltyRate: '5.00%',
          royaltyMonty: '50.00',
          mount: '2019-03'
        },
        {
          workman: '姬无心',
          position: '人事教育部',
          kinds: '预收',
          money: '1,000.00',
          performanceRate: '50.00%',
          performanceNum: '500.00',
          royaltyRate: '5.00%',
          royaltyMonty: '50.00',
          mount: '2019-03'
        },
        {
          workman: '姬无心',
          position: '人事教育部',
          kinds: '预收',
          money: '1,000.00',
          performanceRate: '50.00%',
          performanceNum: '500.00',
          royaltyRate: '5.00%',
          royaltyMonty: '50.00',
          mount: '2019-03'
        },
        {
          workman: '姬无心',
          position: '人事教育部',
          kinds: '预收',
          money: '1,000.00',
          performanceRate: '50.00%',
          performanceNum: '500.00',
          royaltyRate: '5.00%',
          royaltyMonty: '50.00',
          mount: '2019-03'
        },
        {
          workman: '姬无心',
          position: '人事教育部',
          kinds: '预收',
          money: '1,000.00',
          performanceRate: '50.00%',
          performanceNum: '500.00',
          royaltyRate: '5.00%',
          royaltyMonty: '50.00',
          mount: '2019-03'
        },
        {
          workman: '姬无心',
          position: '人事教育部',
          kinds: '预收',
          money: '1,000.00',
          performanceRate: '50.00%',
          performanceNum: '500.00',
          royaltyRate: '5.00%',
          royaltyMonty: '50.00',
          mount: '2019-03'
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
