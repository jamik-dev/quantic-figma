<template>
  <header class="w-screen py-10">
    <div class="w-[85%] mx-auto flex justify-between items-center">
      <div>
        <img src="../../assets/img/logo.svg" alt="">
      </div>
      <div class="ml-40">
        <ul class="flex space-x-10">
          <li class="relative group cursor-pointer">
            <span class="text-primary font-outfit">Bosh Sahifa</span>
            <span
              class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-200"></span>
          </li>
          <li class="relative group cursor-pointer">
            <span class="text-primary font-outfit">Loyihalar</span>
            <span
              class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-200"></span>
          </li>
          <li class="relative group cursor-pointer">
            <span class="text-primary font-outfit">API</span>
            <span
              class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-200"></span>
          </li>
          <li class="relative group cursor-pointer">
            <span class="text-primary font-outfit">Sohalar</span>
            <span
              class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-200"></span>
          </li>
          <li class="relative group cursor-pointer">
            <span class="text-primary font-outfit">Statistika</span>
            <span
              class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-200"></span>
          </li>
        </ul>
      </div>
      <div class="flex space-x-3 items-start">
        <div class="text-primary font-outfit rounded rounded-3xl border border-hoverbg overflow-hidden shadow-lg">
          <ul class="relative" aria-labelledby="dropdown">
            <li class="flex items-center hover:bg-hoverbg p-2">
              <img src="../../assets/img/uzb.svg" alt="">
              <a href="#" class="text-sm text-primary px-2 py-2 font-semibold">O'zbekcha</a>
              <img class="text-end rotate-180" src="../../assets/img/arrow-up.svg" alt="">
            </li>
            <li class="flex items-center p-2 hidden">
              <img src="../../assets/img/rus.svg" alt="">
              <a href="#" class="text-sm text-primary px-2 py-2">Russian</a>
            </li>
            <li class="flex items-center p-2 hidden">
              <img src="../../assets/img/eng.svg" alt="">
              <a href="#" class="text-sm text-primary px-2 py-2">United</a>
            </li>
          </ul>
        </div>
        <button class="border border-2 w-36 border-gradientfrom p-3 tracking-wider text-gradientfrom hover:text-white rounded rounded-3xl font-semibold hover:bg-gradient-to-tl from-gradientfrom to-gradientto font-outfit">Kirish</button>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style>

</style>