<template>
    <div>
        <el-card>
            <el-row :gutter='5'>
                <el-col :span='2'>
                    <el-input v-model="input" placeholder="名称"></el-input>
                </el-col>
                <el-col :span='3'>
                    <el-select v-model="value" placeholder="客户等级">
                        <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span='3'>
                    <el-select v-model="value1" placeholder="行业类型">
                        <el-option
                            v-for="item in options2"
                            :key="item.value2"
                            :label="item.label"
                            :value="item.value2">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span='2'>
                    <el-input v-model="input" placeholder="客户地区"></el-input>
                </el-col>
                <el-col :span='2'>
                    <el-input v-model="input" placeholder="主联系人"></el-input>
                </el-col>
                <el-col :span='2'>
                    <el-input v-model="input" placeholder="业务员"></el-input>
                </el-col>
                <el-col :span='2.5'><el-button type='warning'>立即查询</el-button></el-col>
                <el-col :span='1.5'><el-button type='primary'>重置查询</el-button></el-col>
                <el-col :span='4.5'><el-button type='primary' @click="newCustom">新增客户</el-button></el-col>
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
                prop="name"
                label="名称">
                </el-table-column>
                <el-table-column
                prop="kinds"
                label="客户分类"
                >
                </el-table-column>
                <el-table-column
                prop="industry"
                label="行业">
                </el-table-column>
                <el-table-column
                prop="area"
                label="客户地区">
                </el-table-column>
                <el-table-column
                prop="phone"
                label="电话">
                </el-table-column>
                <el-table-column
                prop="mainChat"
                label="主联系人">
                </el-table-column>
                <el-table-column
                prop="workPeople"
                label="业务员">
                </el-table-column>
                <el-table-column
                label="操作">
                <template>
                    <div>
                        详细|删除
                    </div>
                </template>
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
          name: '云天下网络科技公司',
          kinds: 'C级客户',
          industry: '餐饮娱乐休闲',
          area: '抚顺市',
          phone: '12322132125',
          mainChat: '刘老师',
          workPeople: '李明'
        },
        {
          number: '18112345678912345',
          name: '云天下网络科技公司',
          kinds: 'C级客户',
          industry: '餐饮娱乐休闲',
          area: '抚顺市',
          phone: '12322132125',
          mainChat: '刘老师',
          workPeople: '李明'
        },
        {
          number: '18112345678912345',
          name: '云天下网络科技公司',
          kinds: 'C级客户',
          industry: '餐饮娱乐休闲',
          area: '抚顺市',
          phone: '12322132125',
          mainChat: '刘老师',
          workPeople: '李明'
        },
        {
          number: '18112345678912345',
          name: '云天下网络科技公司',
          kinds: 'C级客户',
          industry: '餐饮娱乐休闲',
          area: '抚顺市',
          phone: '12322132125',
          mainChat: '刘老师',
          workPeople: '李明'
        },
        {
          number: '18112345678912345',
          name: '云天下网络科技公司',
          kinds: 'C级客户',
          industry: '餐饮娱乐休闲',
          area: '抚顺市',
          phone: '12322132125',
          mainChat: '刘老师',
          workPeople: '李明'
        },
        {
          number: '18112345678912345',
          name: '云天下网络科技公司',
          kinds: 'C级客户',
          industry: '餐饮娱乐休闲',
          area: '抚顺市',
          phone: '12322132125',
          mainChat: '刘老师',
          workPeople: '李明'
        }
      ]
    }
  },
  created () {

  },
  methods: {
    newCustom () {
      this.$router.push('/newCustom')
    }
  }
}
</script>
<style>
.el-pagination{
    text-align: right;
}
</style>
