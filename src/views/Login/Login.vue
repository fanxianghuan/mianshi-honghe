<template>
  <div class="login-wrap">
    <el-form label-position='top' :model="user" status-icon :rules="rules" ref="user" label-width="100px" class="demo-ruleForm login-from ">
      <p>鸿合业务协作系统</p>
      <p>后台</p>
      <div>
        <el-form-item prop="username">
          <el-input placeholder="请输入账号" v-model="user.username" auto-complete="off">
            <template slot="prepend" class="biao"><i class="el-icon-message" style="color:#EEEEEE;font-size:160%;"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入账密码" v-model="user.password" auto-complete="off">
            <template slot="prepend" class="biao"><i class="el-icon-message" style="color:#EEEEEE;font-size:160%;"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('user')" class="login-btn">登录</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入 正确用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入 正确密码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http.post('login', this.user).then(res => {
            var { data, meta } = res.data;
            // console.log(data);
            if (meta.status === 200) {
              this.$message({
                message: '恭喜,登陆成功',
                type: 'success'
              });
              window.localStorage.setItem('token', data.token);
              this.$router.push({ name: 'index' });
            } else {
              this.$message.error('登录失败,请重新登录!');
            }
          });
        } else {
          this.$alert('账户或密码错误', {
            confirmButtonText: '确定',
            center: true
          });
          return false;
        }
      });
    }
  }
};
</script>

<style>
.login-wrap {
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  position: absolute;
  right: 15%;
}
.login-wrap .login-from {
  background-color: white;
  opacity: 0.9;
  width: 365px;
  height: 100%;
  box-sizing: border-box;
  padding: 170px 30px 0px 30px;
  text-align: left;
}
.login-wrap p {
  font-size: 35px;
  text-align: center;
  color: #53a4e3;
}
.el-input-group__prepend{
  background-color:#53a4e3;
}
.login-wrap .login-from .login-btn {
  width: 100%;
}
.login-btn{
  text-align: center;
}
</style>
