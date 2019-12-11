<template>
    <div>
        <el-row>
            <el-col :offset=1 class="button_set">
                <el-button type='primary'>新增客户</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span=6>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="编号" prop="number">
                        <el-input v-model="ruleForm.number"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="简称" prop="lessname">
                        <el-input v-model="ruleForm.lessname"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='5'>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="客户分类" >
                        <el-select v-model="ruleForm.kinds" placeholder="客户分类">
                            <el-option label="A级客户" value="shanghai"></el-option>
                            <el-option label="B级客户" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span='5'>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="行业" prop="trade">
                        <el-select v-model="ruleForm.trade" placeholder="行业">
                            <el-option label="餐饮娱乐业" value="shanghai"></el-option>
                            <el-option label="电影业" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :offset=1 class="button_set">
                <el-button type='primary'>联系信息</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="电话" prop="mobile">
                        <el-input v-model="ruleForm.mobile"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="主联系人" prop="mainPeople">
                        <el-input v-model="ruleForm.mainPeople"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span='6'>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="住址">
                        <el-input v-model="ruleForm.adress"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :offset=1 class="button_set">
                <el-button type='primary'>其他信息</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span=6>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="业务员" prop="otherPeople">
                        <el-input v-model="ruleForm.otherPeople"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span=6>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="业务职位" prop="position">
                        <el-select v-model="ruleForm.position" placeholder="职位">
                            <el-option label="餐饮娱乐" value="shanghai"></el-option>
                            <el-option label="电影" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :offset='3' class='save_btn'>
                <el-button type='warning'>保存</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        number: '',
        name: '',
        lessname: '',
        kinds: '',
        trade: '',
        mobile: '',
        mainPeople: '',
        adress: '',
        otherPeople: '',
        position: ''
      },
      rules: {
        number: [{ required: true, message: '请输入编号', trigger: 'blur' }],
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        lessname: [{ required: true, message: '请输入简称', trigger: 'blur' }],
        trade: [{ required: true, message: '请选择行业', trigger: 'blur' }],
        mobile: [{ required: true, message: '请输入电话号码', trigger: 'blur' }],
        mainPeople: [{ required: true, message: '请输入主联系人', trigger: 'blur' }],
        otherPeople: [{ required: true, message: '请输入业务员姓名', trigger: 'blur' }],
        position: [{ required: true, message: '请输入业务员姓名', trigger: 'blur' }]
      }
    }
  },
  created () {

  },
  methods: {

  }
}
</script>
<style>
.button_set{
    margin: 20px
}
.save_btn{
    margin-top: 100px;

}
</style>
