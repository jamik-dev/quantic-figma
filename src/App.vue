<script setup>
import { onMounted } from "vue";
import AOS from "aos"
onMounted(() => {
  AOS.init();
})

</script>

<template>
  <RouterView />
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
