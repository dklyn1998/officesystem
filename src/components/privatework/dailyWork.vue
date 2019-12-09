<template>
    <div>
        <el-card>
            <el-row :gutter='5'>
                <el-col :span='3'>
                    <el-input v-model="input" placeholder="编号"></el-input>
                </el-col>
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
                <el-col :span='3'>
                    <el-input
                        placeholder="请选择开始日期"
                        suffix-icon="el-icon-date"
                        v-model="input1">
                    </el-input>
                </el-col>
                <el-col :span='3'>
                    <el-input
                        placeholder="请选择结束日期"
                        suffix-icon="el-icon-date"
                        v-model="input2">
                    </el-input>
                </el-col>
                <el-col :span='3'>
                    <el-select v-model="value1" placeholder="阶段">
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
                <el-col :span='1.5'><el-button type='primary'>移交任务</el-button></el-col>
                <el-col :span='4.5'><el-button type='primary'>新增任务</el-button></el-col>
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
                prop="bianhao"
                label="编号">
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
                prop="startTime"
                label="开始时间">
                </el-table-column>
                <el-table-column
                prop="endTime"
                label="结束时间">
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
      //   下方表格的数据没有后台只能自己写了
      tableData: [
        {
          bianhao: 18112345678912345,
          leixing: '行政办公',
          biaoti: '组织销售部全体学习新的产品知识、以及下达本月考核指标',
          startTime: '2018-09-30 11:17',
          endTime: '2018-09-30 17:40'
        },
        {
          bianhao: 18112345678912345,
          leixing: '行政办公',
          biaoti: '组织销售部全体学习新的产品知识、以及下达本月考核指标',
          startTime: '2018-09-30 11:17',
          endTime: '2018-09-30 17:40'
        },
        {
          bianhao: 18112345678912345,
          leixing: '行政办公',
          biaoti: '组织销售部全体学习新的产品知识、以及下达本月考核指标',
          startTime: '2018-09-30 11:17',
          endTime: '2018-09-30 17:40'
        },
        {
          bianhao: 18112345678912345,
          leixing: '行政办公',
          biaoti: '组织销售部全体学习新的产品知识、以及下达本月考核指标',
          startTime: '2018-09-30 11:17',
          endTime: '2018-09-30 17:40'
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
