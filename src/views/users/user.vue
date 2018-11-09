<template>
<div>
  <el-card class='users-title'>
    用户管理
  </el-card>
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">
        <el-table
        :data="tableData3"
        height="250"
        border
        style="width: 300px;">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="配置管理">用户字段</el-tab-pane>
    </el-tabs>

</div>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
};

</script>

<style>
.el-table-column {
  text-align: center;
}
.el-pagination {
  text-align: left;
}
.users-title{
  text-align: left;
}
</style>
