<template>
    <div>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="编号" prop="number">
                        <el-input v-model="ruleForm.number"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="类型" prop="kinds">
                        <el-select v-model="ruleForm.kinds" placeholder="类型">
                            <el-option label="类型1" value="shanghai"></el-option>
                            <el-option label="类型2" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span=6>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="开始日期" prop="kinds">
                        <el-form-item prop="StartDate">
                            <el-date-picker type="date" placeholder="选择开始日期" v-model="ruleForm.StartDate" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span=6>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="结束日期" prop="kinds">
                        <el-form-item prop="endDate">
                            <el-date-picker type="date" placeholder="选择结束日期" v-model="ruleForm.endDate" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='13'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="标题：" prop="title">
                        <el-input v-model="ruleForm.title"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='1.5' class='main_text'>
                正文：
            </el-col>
            <el-col :span='15'>
                <!-- 富文本编辑器组件 -->
                <quill-editor v-model="ruleForm.main">
                </quill-editor>
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
                    <div slot="tip" class="el-upload__tip">选择上传本地文件，可多选</div>
                </el-upload>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="报告人" prop="reportPeople">
                        <el-input v-model="ruleForm.reportPeople"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="refForm" label-width="100px">
                    <el-form-item label="报告职位" prop="reportPosition">
                        <el-select v-model="ruleForm.reportPosition" placeholder="职位">
                            <el-option label="设计部部长" value="shanghai"></el-option>
                            <el-option label="老板" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col class='main_text'>
                点评职位： <el-button type='primary'>默认为报告职位的直接上级</el-button>
            </el-col>
        </el-row>
        <el-row class="row_top">
            <el-col class='main_text'>
                <el-button type='warning'>保存为正式</el-button>
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
        endDate: '',
        title: '',
        main: '',
        reportPeople: '',
        reportPosition: ''
      },
      //   表单的验证规则
      rules: {
        number: [ { required: true, message: '请输入编号', trigger: 'blur' } ],
        kinds: [ { required: true, message: '请选择类型', trigger: 'blur' } ],
        StartDate: [ { required: true, message: '请选择开始日期', trigger: 'blur' } ],
        endDate: [ { required: true, message: '请选择结束日期', trigger: 'blur' } ],
        title: [ { required: true, message: '请输入标题', trigger: 'blur' } ],
        reportPeople: [ { required: true, message: '请输入报告人', trigger: 'blur' } ],
        reportPosition: [ { required: true, message: '请选择报告职位', trigger: 'blur' } ]
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
</style>
