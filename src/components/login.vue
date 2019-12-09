<template>
  <div id="app">
    这里有个登陆文件设计图没有添加，以后添加
    <el-button @click="login">登陆</el-button>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    login: function () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
