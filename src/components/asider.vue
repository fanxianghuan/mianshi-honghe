<template>
  <el-menu :router="router" :unique-opened='opened'>
        <el-submenu index="1" class="position">
            <template slot="title">
            <i class="el-icon-message"></i>
            <span>用户权限管理</span>
            </template>
            <el-menu-item index="/users" class="position">
              组织结构
            </el-menu-item>
            <el-menu-item index="/users" class="position">
              角色管理
            </el-menu-item>
            <el-menu-item index="/users" class="position">
              用户管理
            </el-menu-item>
            <el-menu-item index="/users" class="position">
              菜单管理
            </el-menu-item>
        </el-submenu>
        <el-submenu index="2" class="position">
            <template slot="title">
            <i class="el-icon-setting"></i>
            <span>配置管理</span>
            </template>
            <el-menu-item index="/roles" class="position">
              SPA链接
            </el-menu-item>
            <el-menu-item index="/rights" class="position">
              计划任务
            </el-menu-item>
        </el-submenu>
        <el-submenu index="3" class="position">
            <template slot="title">
            <i class="el-icon-news"></i>
            <span>基础主数据</span>
            </template>
            <el-menu-item index="/user" class="position">
              客户
            </el-menu-item>
            <el-menu-item index="/user" class="position">
            <i class="el-icon-menu"></i>
              物料
            </el-menu-item>
        </el-submenu>
        <el-submenu index="4" class="position">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>阶段设计</span>
            </template>
        </el-submenu>
        <el-submenu index="5" class="position">
            <template slot="title">
            <i class="el-icon-message"></i>
            <span>流程设计</span>
            </template>
            <el-menu-item index="/user" class="position">
              分类设置
            </el-menu-item>
            <el-menu-item index="/user" class="position">
              表单管理
            </el-menu-item>
            <el-menu-item index="/user" class="position">
              流程设计
            </el-menu-item>
            <el-menu-item index="/user" class="position">
              流程监控
            </el-menu-item>
            <el-menu-item index="/user" class="position">
              流程代理
            </el-menu-item>
        </el-submenu>
        <el-submenu index="6" class="position">
            <template slot="title">
            <i class="el-icon-setting"></i>
            <span>系统管理</span>
            </template>
            <el-menu-item index="/user" class="position">
              系统设置
            </el-menu-item>
            <el-menu-item index="/user" class="position">
              在线用户
            </el-menu-item>
        </el-submenu>
     </el-menu>
</template>

<script>
export default {
  data() {
    return {
      router: true,
      opened: true
    };
  }
};
</script>

<style>
.el-aside {
    height: 100%;
}
.el-aside {
background-color: #D3DCE6;
color: #333;
text-align: center;
line-height: 200px;
}
</style>
