<template>
    <div>
        <el-card>
            <el-row :gutter='5'>
                <el-col :span='2'>
                    <el-input v-model="input" placeholder="客户"></el-input>
                </el-col>
                <el-col :span='2'>
                    <el-input v-model="input3" placeholder="负责人"></el-input>
                </el-col>
                <el-col :span='2'>
                    <el-select v-model="value" placeholder="类型">
                        <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
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
                <el-col :span='2'>
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
                <el-col :span='4.5'><el-button type='primary' @click="newProject">新增项目</el-button></el-col>
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
                prop="mingcheng"
                label="名称">
                </el-table-column>
                <el-table-column
                prop="leixing"
                label="类型"
                width="100">
                </el-table-column>
                <el-table-column
                prop="startTime"
                label="开始时间">
                </el-table-column>
                <el-table-column
                prop="workTime"
                label="工作量（人时）">
                </el-table-column>
                <el-table-column
                prop="stageNow"
                label="当前阶段">
                </el-table-column>
                <el-table-column
                prop="kehu"
                label="客户">
                </el-table-column>
                <el-table-column
                prop="dutyPeople"
                label="负责人">
                </el-table-column>
                <el-table-column
                prop="partment"
                label="负责部门">
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
          bianhao: 18112345678912345,
          leixing: '行政办公',
          mingcheng: '今年计划将',
          startTime: '2018-09-30 11:17',
          workTime: 5,
          stageNow: '完成',
          kehu: '小虎',
          dutyPeople: '小陈',
          partment: '行政后勤部'
        },
        {
          bianhao: 18112345678912345,
          leixing: '行政办公',
          mingcheng: '今年计划将',
          startTime: '2018-09-30 11:17',
          workTime: 5,
          stageNow: '完成',
          kehu: '小虎',
          dutyPeople: '小陈',
          partment: '行政后勤部'
        },
        {
          bianhao: 18112345678912345,
          leixing: '行政办公',
          mingcheng: '今年计划将',
          startTime: '2018-09-30 11:17',
          workTime: 5,
          stageNow: '完成',
          kehu: '小虎',
          dutyPeople: '小陈',
          partment: '行政后勤部'
        },
        {
          bianhao: 18112345678912345,
          leixing: '行政办公',
          mingcheng: '今年计划将',
          startTime: '2018-09-30 11:17',
          workTime: 5,
          stageNow: '完成',
          kehu: '小虎',
          dutyPeople: '小陈',
          partment: '行政后勤部'
        },
        {
          bianhao: 18112345678912345,
          leixing: '行政办公',
          mingcheng: '今年计划将',
          startTime: '2018-09-30 11:17',
          workTime: 5,
          stageNow: '完成',
          kehu: '小虎',
          dutyPeople: '小陈',
          partment: '行政后勤部'
        }

      ]
    }
  },
  created () {

  },
  methods: {
    newProject () {
      this.$router.push('/itemNew')
    }
  }
}
</script>
<style>
.el-pagination{
    text-align: right;
}
</style>
