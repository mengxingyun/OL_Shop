<template>
  <div style="width: 700px; padding: 50px; margin: 50px auto">
    <el-card class="box-card" style="padding-top: 50px">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        >
        <el-form-item label="用户名" prop="username">
          <el-input v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <div class="link-login" @click="$router.push({path:'/login'})">
            已有账号，立即登录
        </div>
        <el-form-item style="margin-right: 80px;">
          
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script> 
import {register} from 'network/user';
// import { defineComponent } from 'vue';
// import { ElMessage } from 'element-plus';
// import { t } from 'element-plus/lib/locale';
export default {
  name: "Register",
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        callback();
      }, 1000);
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        type: "Register",
        pass: "",
        checkPass: "",
        username: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkUserName, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var that = this;
          register(this.ruleForm).then(res=>{
            var flag = res.data.flag;
            if(flag){
              that.succcess();
              that.$router.push({path:'/login'});
              that.resetForm('ruleForm');
            }else{
              that.fail();
              that.ruleForm.username = '';
            }
            console.log(res.data.flag);
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    succcess() {
        this.$alert('注册成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
    fail() {
        this.$alert('用户名已被注册', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
  },
  setup(){

  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item { 
  padding: 18px 0;
}

.box-card {
  width: 480px;
}

.link-login{
  font-size: 14px;
  margin-bottom: 20px;
  color: #42b983;
  display: inline-block;
}
</style>