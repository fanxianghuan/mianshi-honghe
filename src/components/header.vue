<template>
    <el-row class="header">
      <el-col :span="20"><div class="grid-content bg-purple header-title">鸿合业务协作系统后台</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple head-logout">
        <el-popover
          placement="top"
          trigger="click">
          <div style="text-align: left;">
            <div class="a">
              <a href="#">个人资料</a>
              <a href="#" @click='logout' class="logout">退出</a>
            </div>
          </div>
          <el-button slot="reference">默认管理员</el-button>
        </el-popover>
      </div>
      </el-col>
    </el-row>
</template>

<script>
export default {
  methods: {
    logout() {
      window.localStorage.removeItem('token');
      this.$message.success('用户已退出');
      setTimeout(() => {
        this.$router.push({ name: 'login' });
      }, 1000);
    }
  }
};
</script>

<style>
.container {
  height: 100%;
}
.el-header {
  background-color: skyblue;
  color: white;
  text-align: left;
  height: 70px;
  line-height: 70px;
}
.header-title {
  color: white;
  font-size: 22px;
  font-weight: bold;
}
.el-popover {
  color: white;
  text-align: left;
  height: 70px;
  line-height: 70px;
}
.a {
  margin: 0;
  padding: 0;
}
a {
  color: #111;
  text-decoration: none;
}
.el-button {
  background-color: skyblue;
  color: white;
  text-align: left;
  border: none;
}
.head-logout .logout {
  color: white;
  text-align: right;
  text-decoration: none;
}
</style>
