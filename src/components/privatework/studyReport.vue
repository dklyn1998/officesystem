<template>
    <div>
        <el-card>
            <el-row :gutter='5'>
            <el-col :span='3'>
                <el-select v-model="value" placeholder="类型">
                    <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span='5'>
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
            <el-col :span='2.5'><el-button type='warning'>立即查询</el-button></el-col>
            <el-col :span='2.5'><el-button type='primary'>重置查询</el-button></el-col>
            <el-col :span='3.5'><el-button type='primary'>导出Excel</el-button></el-col>
            <el-col :span='3'><el-button type='primary' @click="getNewReport">新增报告</el-button></el-col>
        </el-row>
        <el-row :gutter='5' class="row_two">
            <el-col :span='1.5'>
                <el-button :type='chooseType==1?"warning":"primary"' @click="reportSet(1)">我的报告</el-button>
            </el-col>
            <el-col :span='1.5'>
                <el-button :type='chooseType==2?"warning":"primary"' @click="reportSet(2)">我点评的报告</el-button>
            </el-col>
            <el-col :span='3'>
                <el-button :type='chooseType==3?"warning":"primary"' @click="reportSet(3)">全部报告</el-button>
            </el-col>
        </el-row>
        <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            border>
            <el-table-column
            label="状态"
            width="150">
            <el-button type='warning' size='mini'>正式</el-button>
            <el-button type='info' size='mini'>未评</el-button>
            </el-table-column>
            <el-table-column
            prop="bianhao"
            label="编号">
            </el-table-column>
            <el-table-column
            prop="endTime"
            label="结束时间">
            </el-table-column>
            <el-table-column
            prop="leixing"
            label="类型"
            width="100">
            </el-table-column>
            <el-table-column
            prop="biaoti"
            label="标题">
            </el-table-column>
            <el-table-column
            prop="reportPosition"
            label="报告职位">
            </el-table-column>
            <el-table-column
            prop="reportPeople"
            label="报告人">
            </el-table-column>
            <!-- 这里颜色加不起需要调试一下 -->
            <el-table-column
            prop="commitPeople"
            label="点评人"
            class="commit_people"
            style="color: #FF6900"
            >
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
      value1: '',
      input: '',
      input1: '',
      input2: '',
      //   下方表格的数据没有后台只能自己写了
      tableData: [
        {
          bianhao: 18112345678912345,
          leixing: '行政办公',
          biaoti: '组织销售部全体学习新的产品知识、以及下达本月考核指标',
          endTime: '2018-09-30 17:40',
          reportPosition: '市场部经理(齐石)',
          reportPeople: '齐石',
          commitPeople: '范跑跑'
        },
        {
          bianhao: 18112345678912345,
          leixing: '行政办公',
          biaoti: '组织销售部全体学习新的产品知识、以及下达本月考核指标',
          endTime: '2018-09-30 17:40',
          reportPosition: '市场部经理(齐石)',
          reportPeople: '齐石',
          commitPeople: '范跑跑'
        },
        {
          bianhao: 18112345678912345,
          leixing: '行政办公',
          biaoti: '组织销售部全体学习新的产品知识、以及下达本月考核指标',
          endTime: '2018-09-30 17:40',
          reportPosition: '市场部经理(齐石)',
          reportPeople: '齐石',
          commitPeople: '范跑跑'
        },
        {
          bianhao: 18112345678912345,
          leixing: '行政办公',
          biaoti: '组织销售部全体学习新的产品知识、以及下达本月考核指标',
          endTime: '2018-09-30 17:40',
          reportPosition: '市场部经理(齐石)',
          reportPeople: '齐石',
          commitPeople: '范跑跑'
        }
      ],
      // 下方报告的选项
      chooseType: 1
    }
  },
  created () {

  },
  methods: {
    reportSet (type) {
      this.chooseType = type
      console.log(this.chooseType)
    },
    getNewReport () {
      this.$router.push('/newSet')
    }
  }
}
</script>
<style scope>
.row_two{
    margin-top: 10px;
}
.el-table-column{
    color: #FF6900 !important;
}
.el-pagination{
    text-align: right;
}
</style>
