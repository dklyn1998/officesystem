<template>
    <div>
        <el-card>
            <el-row :gutter='5'>
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
                <el-col :span='2'>
                    <el-input v-model="input3" placeholder="标题"></el-input>
                </el-col>
                <el-col :span='2'>
                    <el-select v-model="value1" placeholder="发布人">
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
                <el-col :span='4.5'><el-button type='primary' @click="getNews">新增</el-button></el-col>
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
                prop="pushTime"
                label="发布时间">
                </el-table-column>
                <el-table-column
                prop="kinds"
                label="类型">
                </el-table-column>
                <el-table-column
                prop="title"
                label="标题"
                >
                </el-table-column>
                <el-table-column
                prop="pushMan"
                label="发布人">
                </el-table-column>
                <el-table-column
                prop="readNum"
                label="阅读数">
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
          pushTime: '2019-05-06 15:00',
          kinds: '通知',
          title: '详细记录企业员工每天的具体工作 将"日程计划-行动结果-团队协 同-上级管理"融为一体 高效时间管理—团队行动协同—工作日清日',
          pushMan: '张高大 (行政主管)',
          readNum: 3
        },
        {
          pushTime: '2019-05-06 15:00',
          kinds: '通知',
          title: '详细记录企业员工每天的具体工作 将"日程计划-行动结果-团队协 同-上级管理"融为一体 高效时间管理—团队行动协同—工作日清日',
          pushMan: '张高大 (行政主管)',
          readNum: 3
        },
        {
          pushTime: '2019-05-06 15:00',
          kinds: '通知',
          title: '详细记录企业员工每天的具体工作 将"日程计划-行动结果-团队协 同-上级管理"融为一体 高效时间管理—团队行动协同—工作日清日',
          pushMan: '张高大 (行政主管)',
          readNum: 3
        },
        {
          pushTime: '2019-05-06 15:00',
          kinds: '通知',
          title: '详细记录企业员工每天的具体工作 将"日程计划-行动结果-团队协 同-上级管理"融为一体 高效时间管理—团队行动协同—工作日清日',
          pushMan: '张高大 (行政主管)',
          readNum: 3
        },
        {
          pushTime: '2019-05-06 15:00',
          kinds: '通知',
          title: '详细记录企业员工每天的具体工作 将"日程计划-行动结果-团队协 同-上级管理"融为一体 高效时间管理—团队行动协同—工作日清日',
          pushMan: '张高大 (行政主管)',
          readNum: 3
        }
      ]
    }
  },
  created () {

  },
  methods: {
    getNews () {
      this.$router.push('/getNews')
    }
  }
}
</script>
<style scoped>
.el-pagination{
    text-align: right;
}

</style>
