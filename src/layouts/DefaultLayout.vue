<template>
  <div class="w-[10%] h-full -z-10 absolute border-r-[1px] opacity-50"></div>
  <div class="w-[26%] h-full -z-10 absolute border-r-[1px] opacity-50"><span class="h-16 w-2 animate-move -right-1 absolute bg-blueish"></span></div>
  <div class="w-[42%] h-full -z-10 absolute border-r-[1px] opacity-50"></div>
  <div class="w-[58%] h-full -z-10 absolute border-r-[1px] opacity-50"><span class="h-16 w-2 animate-move2 -right-1 absolute bg-blueish"></span></div>
  <div class="w-[74%] h-full -z-10 absolute border-r-[1px] opacity-50"></div>
  <div class="w-[90%] h-full -z-10 absolute border-r-[1px] opacity-50"><span class="h-16 w-2 animate-move3 -right-1 absolute bg-blueish"></span></div>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
</script>

<style scoped>
</style>