<template>
    <div>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="会员号" prop="number">
                        <el-input v-model="ruleForm.number"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="会员名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span=6>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="注册日期" prop="joinDate">
                        <el-form-item prop="joinDate">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.joinDate" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
           <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="手机号码" >
                        <el-input v-model="ruleForm.mobile"></el-input>
                    </el-form-item>
                </el-form>
           </el-col>
                <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="会员等级" prop="status">
                        <el-select v-model="ruleForm.kinds" placeholder="会员等级">
                            <el-option label="白金会员" value1="1"></el-option>
                            <el-option label="白银会员" value1="2"></el-option>
                            <el-option label="青铜会员" value1="3"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="性别" prop="sex">
                        <el-select v-model="ruleForm.kinds" placeholder="性别">
                            <el-option label="男" value="0"></el-option>
                            <el-option label="女" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span=6>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="出生日期" prop="birthDate">
                        <el-form-item prop="birthDate">
                            <el-date-picker type="date" placeholder="选择开始日期" v-model="ruleForm.birthDate" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span=6>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="有效日期" prop="birthDate">
                        <el-form-item prop="birthDate">
                            <el-date-picker type="date" placeholder="选择有效日期" v-model="ruleForm.birthDate" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row class="row_top" >
            <el-col class='main_text' :span='2'>
                <el-button type='warning'>保存为正式</el-button>
            </el-col>
            <el-col :span='3'>
                <el-button type='primary'>放弃编辑</el-button>
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
        number: '',
        kinds: '',
        StartDate: '',
        main: '',
        reportPeople: '',
        reportPosition: '',
        name: '',
        joinPeople: '',
        custom: '',
        idCard: '',
        residence: '',
        birthDate: '',
        value: '',
        value1: '',
        joinDate: '',
        mobile: '',
        qq: '',
        wechat: '',
        email: '',
        value2: '',
        position: '',
        username: '',
        password: ''
      },
      //   表单的验证规则
      rules: {
        number: [ { required: true, message: '请输入工号', trigger: 'blur' } ],
        kinds: [ { required: true, message: '请选择类型', trigger: 'blur' } ],
        birthDate: [ { required: true, message: '请选择开始日期', trigger: 'blur' } ],
        reportPeople: [ { required: true, message: '请输入报告人', trigger: 'blur' } ],
        reportPosition: [ { required: true, message: '请选择报告职位', trigger: 'blur' } ],
        name: [ { required: true, message: '请输入名称', trigger: 'blur' } ],
        joinPeople: [ { required: true, message: '请输入参与人', trigger: 'blur' } ],
        idCard: [ { required: true, message: '请输入证件号码', trigger: 'blur' } ],
        position: [ { required: true, message: '请选择职位', trigger: 'blur' } ],
        username: [ { required: true, message: '登录名', trigger: 'blur' } ]
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
.left_fix{
    margin-left: 40px;
    margin-bottom: 40px;
}
</style>
