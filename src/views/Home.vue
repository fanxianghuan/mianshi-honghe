<template>
  <el-container class="container">
  <el-header>
    <Header></Header>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <Asider />
    </el-aside>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
  </el-container>
</template>

<script>
import Header from '@/components/header.vue';
import Asider from '@/components/asider.vue';
export default {
  beforeCreate() {
    // var token = window.localStorage.getItem('token');
    // if (!token) {
    //   this.$message.error('请先登录!');
    //   this.$router.push({'name': 'login'});
    // }
  },
  components: {
    Header,
    Asider
  }
};
</script>

<style>
.container {
    height: 100%;
}
.el-main {
background-color: rgb(255, 255, 255);
color: #333;
text-align: center;
}
body > .el-container {
margin-bottom: 40px;
}
.position {
    text-align: left;
  }
</style>
