<template>
  <header class="w-full py-10">
    <div class="w-[80%] mx-auto flex justify-between items-center">
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
          <ul class="text-primary bg-white font-outfit rounded-tl-3xl rounded-tr-3xl relative border border-hoverbg shadow-lg" :class="{'rounded-3xl':!toggleDropdown}" aria-labelledby="dropdown">
            <li class="flex items-center p-2 rounded-tl-3xl rounded-tr-3xl" :class="{'bg-hoverbg':toggleDropdown, 'rounded-3xl':!toggleDropdown}" @click="toggleDropdown = !toggleDropdown">
              <img src="../../assets/img/uzb.svg" alt="">
              <a href="#" class="text-sm text-primary px-2 py-2 font-semibold">O'zbekcha</a>
              <img class="text-end" :class="{'rotate-180':!toggleDropdown}" src="../../assets/img/arrow-up.svg" alt="">
            </li>
            <li v-if="toggleDropdown" class="flex items-center bg-white left-0 w-full -bottom-13 absolute p-2 shadow-lg">
              <img src="../../assets/img/rus.svg" alt="">
              <a href="#" class="text-sm text-primary px-2 py-2">Russian</a>
            </li>
            <li v-if="toggleDropdown" class="flex items-center bg-white w-full absolute left-0 -bottom-24 shadow-lg rounded-bl-3xl rounded-br-3xl p-2">
              <img src="../../assets/img/eng.svg" alt="">
              <a href="#" class="text-sm text-primary px-2 py-2">United</a>
            </li>
          </ul>
        <button class="border-2 w-36 border-gradientfrom p-3 tracking-wider text-gradientfrom hover:text-white rounded-3xl font-semibold font-outfit relative group overflow-hidden duration-300"><span class="h-0 w-0 absolute -z-10 left-0 bottom-0 duration-300 group-hover:h-[140%] group-hover:w-[140%] rounded-tr-[100%] group-hover:bg-gradient-to-r from-gradientfrom to-gradientto"></span> Kirish</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import {ref} from 'vue'
const toggleDropdown = ref(false)
</script>

<style>

</style>