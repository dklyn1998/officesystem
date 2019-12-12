<template>
    <div>
        <el-row>
            <el-col :span=5>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="请假类型" prop="kinds">
                        <el-select v-model="ruleForm.kinds" placeholder="请假类型" >
                            <el-option label="病假" value="shanghai"></el-option>
                            <el-option label="事假" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span=6>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="请假人" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span=6>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="部门" prop="department">
                        <el-input v-model="ruleForm.department"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row :gutter=10>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="时长（按天）" prop="time">
                        <el-input v-model="ruleForm.time"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span='15'>
                 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                      <el-form-item label="请假日期">
                        <el-date-picker
                            v-model="value2"
                            type="datetimerange"
                            align="right"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :default-time="['12:00:00', '08:00:00']">
                        </el-date-picker>
                        </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span=15>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="请假日期" prop="adress">
                        <el-input v-model="ruleForm.adress"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :offset="2" :span='1'><el-button type='warning'>保存</el-button></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data () {
    return {
      // 表格的数据
      ruleForm: {
        kinds: {},
        name: '',
        department: '',
        time: '',
        value2: '',
        adress: ''
      },
      value2: '',
      //   表单的验证规则
      rules: {
        kinds: [ { required: true, message: '请输入活动名称', trigger: 'blur' } ],
        name: [ { required: true, message: '请输入活动名称', trigger: 'blur' } ],
        department: [ { required: true, message: '请输入活动名称', trigger: 'blur' } ]
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
