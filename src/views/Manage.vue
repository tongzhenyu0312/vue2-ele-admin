<template>
  <div class="app-wrapper">
    <sidebar/>
    <div class="main-container">
      
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar/index.vue';


export default {
  name: 'manage',
  data() {
    return {
      key: 'value',
    };
  },
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
}
</style>
