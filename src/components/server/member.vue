<template>
    <div>
        <el-card>
            <el-row :gutter='5'>
                <el-col :span='3'>
                    <el-input v-model="input" placeholder="会员号"></el-input>
                </el-col>
                <el-col :span='3'>
                    <el-select v-model="value" placeholder="会员等级">
                        <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span='3'>
                    <el-input v-model="input1" placeholder="手机号码"></el-input>
                </el-col>
                <el-col :span='3'>
                    <el-select v-model="value1" placeholder="会员性别">
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
                <el-col :span='4.5'><el-button type='primary' @click="newMember">新增</el-button></el-col>
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
                prop="memberNum"
                label="会员号">
                </el-table-column>
                <el-table-column
                prop="memberRank"
                label="会员等级"
                width="100">
                </el-table-column>
                <el-table-column
                prop="mobile"
                label="手机号码">
                </el-table-column>
                <el-table-column
                prop="memberSex"
                label="会员性别">
                </el-table-column>
                <el-table-column
                prop="birthday"
                label="会员生日">
                </el-table-column>
                <el-table-column
                prop="date"
                label="有效期">
                </el-table-column>
                <el-table-column
                prop="kehu"
                label="客户">
                </el-table-column>
                <el-table-column
                prop="dutyPeople"
                label="负责人">
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
      //   下方表格的数据没有后台只能自己写了
      tableData: [
        {
          memberNum: 18112345678912345,
          memberRank: '白金会员',
          mobile: '16670157846',
          startTime: '2018-09-30 11:17',
          endTime: '2018-09-30 17:40',
          memberSex: '男',
          birthday: '2019-05-15',
          date: '2019-07-08',
          kehu: '唐浪',
          dutyPeople: '王小可'
        },
        {
          memberNum: 18112345678912345,
          memberRank: '白金会员',
          mobile: '16670157846',
          startTime: '2018-09-30 11:17',
          endTime: '2018-09-30 17:40',
          memberSex: '男',
          birthday: '2019-05-15',
          date: '2019-07-08',
          kehu: '唐浪',
          dutyPeople: '王小可'
        },
        {
          memberNum: 18112345678912345,
          memberRank: '白金会员',
          mobile: '16670157846',
          startTime: '2018-09-30 11:17',
          endTime: '2018-09-30 17:40',
          memberSex: '男',
          birthday: '2019-05-15',
          date: '2019-07-08',
          kehu: '唐浪',
          dutyPeople: '王小可'
        },
        {
          memberNum: 18112345678912345,
          memberRank: '白金会员',
          mobile: '16670157846',
          startTime: '2018-09-30 11:17',
          endTime: '2018-09-30 17:40',
          memberSex: '男',
          birthday: '2019-05-15',
          date: '2019-07-08',
          kehu: '唐浪',
          dutyPeople: '王小可'
        },
        {
          memberNum: 18112345678912345,
          memberRank: '白金会员',
          mobile: '16670157846',
          startTime: '2018-09-30 11:17',
          endTime: '2018-09-30 17:40',
          memberSex: '男',
          birthday: '2019-05-15',
          date: '2019-07-08',
          kehu: '唐浪',
          dutyPeople: '王小可'
        }
      ]
    }
  },
  created () {

  },
  methods: {
    newMember () {
      this.$router.push('/newMerber')
    }
  }
}
</script>
<style scoped>
.el-pagination{
    text-align: right;
}
</style>
