<template>
    <div>
        <el-row>
            <el-col class="left_fix"><el-button type='primary' >新增职员</el-button></el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="工号" prop="number">
                        <el-input v-model="ruleForm.number"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
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
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="证件号码" prop="idCard">
                        <el-input v-model="ruleForm.idCard"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="户籍" prop="residence">
                        <el-input v-model="ruleForm.residence"></el-input>
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
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="供职状态" prop="status">
                        <el-select v-model="ruleForm.kinds" placeholder="供职状态">
                            <el-option label="实习" value1="1"></el-option>
                            <el-option label="试用期" value1="2"></el-option>
                            <el-option label="正式员工" value1="3"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span=6>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="入职日期" prop="joinDate">
                        <el-form-item prop="joinDate">
                            <el-date-picker type="date" placeholder="选择开始日期" v-model="ruleForm.joinDate" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="移动电话" >
                        <el-input v-model="ruleForm.mobile"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="办公QQ" >
                        <el-input v-model="ruleForm.qq"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="微信号" >
                        <el-input v-model="ruleForm.wechat"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="电子邮箱" >
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple
                    :limit="3">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">选择上传相片</div>
                </el-upload>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="left_fix"><el-button type='primary' >部门职位</el-button></el-col>
        </el-row>
        <el-row>
            <el-col :span='5'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                <el-form-item label="职位" prop="position">
                    <el-select v-model="ruleForm.position" placeholder="职位">
                        <el-option label="实习" value2="1"></el-option>
                        <el-option label="试用期" value2="2"></el-option>
                        <el-option label="正式员工" value2="3"></el-option>
                    </el-select>
                </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="left_fix"><el-button type='primary' >登陆账号</el-button></el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="登录名" prop='username'>
                        <el-input v-model="ruleForm.username"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="密码" >
                        <el-input v-model="ruleForm.password"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row class="row_top">
            <el-col class='main_text'>
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
