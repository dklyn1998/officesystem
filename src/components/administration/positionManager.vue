<template>
    <div>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='5'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                <el-form-item label="上级职位" prop="position">
                    <el-select v-model="ruleForm.position" placeholder="上级职位">
                        <el-option label="财务部长" value2="0"></el-option>
                        <el-option label="运用部长" value2="1"></el-option>
                        <el-option label="技术部长" value2="2"></el-option>
                    </el-select>
                </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='5'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                <el-form-item label="职务" prop="position">
                    <el-select v-model="ruleForm.position" placeholder="职务">
                        <el-option label="财务" value2="0"></el-option>
                        <el-option label="运营" value2="1"></el-option>
                        <el-option label="技术" value2="2"></el-option>
                    </el-select>
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
<style scoped>
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
