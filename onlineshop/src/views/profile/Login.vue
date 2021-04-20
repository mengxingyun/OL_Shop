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
        
        <div class="link-login" @click="$router.push({path:'/register'})">
            没有账号，立即注册
        </div>

        <el-form-item style="margin-right: 80px;">
          
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script> 
import { login } from 'network/user';
export default {
  name: "Login",
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
        callback();
      }
    };

    return {
      ruleForm: {
        type: "Login",
        pass: "",
        username: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkUserName, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var that = this;
          login(this.ruleForm).then(res=>{
            console.log("登录返回信息:", res)
            var flag = res.data.flag;
            if(flag){
              window.localStorage.setItem('token', res.data.token); //保存token
              const token = window.localStorage.getItem('token');
              this.$store.commit('setIsLogin', true);
              console.log(this.$store)
              console.log(token);
              that.succcess();
              that.$router.push({path:'/profile/address'});
              that.resetForm('ruleForm');
            }else{
              that.fail();
            }
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
        this.$alert('登录成功', '提示', {
          confirmButtonText: '确定',
        
        });
      },
    fail() {
        this.$alert('用户名或密码错误', '提示', {
          confirmButtonText: '确定',
         
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