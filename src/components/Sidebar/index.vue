<template>
  <el-menu class="el-menu-vertical"
           text-color="#fff"
           background-color="#324057"
           active-text-color="#ffd04b">
    <el-menu-item index='1'>
      <template slot="title"
                class='123'>
        <i class="el-icon-location"></i>
        <span>首页</span>
      </template>
    </el-menu-item>
    <el-submenu index='2'>
      <template slot="title">
        <span>导航一</span>
      </template>
      <el-menu-item index="2-1">分组一</el-menu-item>
      <el-menu-item index="2-2">分组二</el-menu-item>
      <el-submenu index='2-3'>
        <template slot="title">
          <span>分组三</span>
        </template>
        <el-menu-item index='2-3-1'>选项1</el-menu-item>
        <el-menu-item index='2-3-2'>选项2</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      key: 'value',
    };
  },
};
</script>

<style scoped lang='less'>
.el-menu-vertical {
  width: 200px;
  min-height: 100%;
}
</style>
