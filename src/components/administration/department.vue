<template>
    <el-card>
        <el-row :gutter='10'>
            <el-col :span='1.5'>
                <el-button type='warning' @click="newDepartment">新增部门</el-button>
            </el-col>
            <el-col :span='2'>
                <el-button type='primary' @click="positionManager">职务管理</el-button>
            </el-col>
        </el-row>
        <img src="../../assets/image/deparment/department.png" alt="">
    </el-card>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    newDepartment () {
      this.$router.push('/newDepartment')
    },
    positionManager () {
      this.$router.push('/positionManager')
    }
  }
}
</script>
<style>
img{
    display: block;
    margin: 30px auto;
}
</style>
