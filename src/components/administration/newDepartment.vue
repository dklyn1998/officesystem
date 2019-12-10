<template>
    <div>
        <el-row>
            <el-col :span='10'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='10'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="简介" prop="info">
                        <el-input v-model="ruleForm.info"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="button_left">
                <el-button type='warning'>保存</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data () {
    return {
      // 表格的数据
      ruleForm: {
        name: '',
        info: ''
      },
      //   表单的验证规则
      rules: {
        name: [ { required: true, message: '请输入名称', trigger: 'blur' } ]
      }
    }
  },
  created () {

  },
  methods: {

  }
}
</script>
<style scope>
.ql-editor{
    min-height: 300px;
}
.upload-demo{
    margin-top: 30px;
    margin-left: 40px;
    margin-bottom: 30px;
}
.main_text{
    margin-left: 40px;
}
.row_top{
    margin-top: 50px;
}
.button_left{
    margin-left: 100px;
    margin-top: 50px;
}
</style>
