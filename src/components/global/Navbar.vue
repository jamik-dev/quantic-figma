<template>
  <div class="w-full py-4 z-10 sticky -top-1 lg:top-0 bg-white">

    <!-- Desktop -->

    <div class="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
      <div class="flex justify-between items-center">
        <div>
          <img src="../../assets/img/logo.svg" alt="">
        </div>
        <div class="hidden lg:block xl:ml-20">
          <ul class="flex space-x-10">
            <a href="home#" class="relative group cursor-pointer">
              <span class="text-primary font-outfit">Bosh Sahifa</span>
              <span
                class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-500"></span>
            </a>
            <a href="home#projects" class="relative group cursor-pointer">
              <span class="text-primary font-outfit">Loyihalar</span>
              <span
                class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-500"></span>
            </a>
            <a href="home#api" class="relative group cursor-pointer">
              <span class="text-primary font-outfit">API</span>
              <span
                class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-500"></span>
            </a>
            <a href="home#fields" class="relative group cursor-pointer">
              <span class="text-primary font-outfit">Sohalar</span>
              <span
                class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-500"></span>
            </a>
            <a href="home#statistics" class="relative group cursor-pointer">
              <span class="text-primary font-outfit">Statistika</span>
              <span
                class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-500"></span>
            </a>
          </ul>
        </div>
        <div class="hidden lg:flex space-x-3 items-start">
          <ul
            class="text-primary bg-white font-outfit rounded-tl-3xl rounded-tr-3xl relative border border-hoverbg shadow-lg"
            :class="{ 'rounded-3xl': !toggleDropdown }" aria-labelledby="dropdown">
            <li class="flex items-center p-2 cursor-pointer rounded-tl-3xl rounded-tr-3xl"
              :class="{ 'bg-hoverbg': toggleDropdown, 'rounded-3xl': !toggleDropdown }"
              @click="toggleDropdown = !toggleDropdown">
              <img src="../../assets/img/uzb.svg" alt="">
              <p class="text-sm text-primary px-2 py-2 font-semibold">O'zbekcha</p>
              <img class="text-end" :class="{ 'rotate-180': !toggleDropdown }" src="../../assets/img/arrow-up.svg"
                alt="">
            </li>
            <li v-if="toggleDropdown"
              class="flex items-center cursor-pointer bg-white left-0 w-full -bottom-13 absolute p-2 shadow-lg">
              <img src="../../assets/img/rus.svg" alt="">
              <p class="text-sm tracking-wide text-primary px-2 py-2">Russian</p>
            </li>
            <li v-if="toggleDropdown"
              class="flex items-center cursor-pointer bg-white w-full absolute left-0 -bottom-24 shadow-lg rounded-bl-3xl rounded-br-3xl p-2">
              <img src="../../assets/img/eng.svg" alt="">
              <p class="text-sm tracking-wide text-primary px-2 py-2">United</p>
            </li>
          </ul>
          <button @click="modal.modalTrigger()"
            class="border-2 w-36 border-gradientfrom p-3 tracking-wider text-gradientfrom hover:text-white rounded-3xl font-semibold font-outfit relative group overflow-hidden duration-300"><span
              class="h-0 w-0 absolute -z-10 left-0 bottom-0 duration-300 group-hover:h-[140%] group-hover:w-[140%] rounded-tr-[100%] group-hover:bg-gradient-to-r from-gradientfrom to-gradientto"></span>
            Kirish</button>
        </div>
        <div @click="burgerToggle = !burgerToggle" class="lg:hidden flex justify-center items-center h-12 w-12 bg-red-100 rounded-[100%] z-20"><img
            :src="imgUrl" :class="{'w-[45%]':burgerToggle}" alt="">
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <transition name="fade">
    
      <div v-if="burgerToggle" class="w-full h-full fixed lg:hidden bg-white">
        <div class="w-[90%] mx-auto mt-10">
        <div class="flex space-x-3 items-start justify-between">
          <ul
            class="text-primary bg-white font-outfit rounded-tl-3xl rounded-tr-3xl relative border border-hoverbg shadow-lg"
            :class="{ 'rounded-3xl': !toggleDropdown }" aria-labelledby="dropdown">
            <li class="flex items-center p-2 cursor-pointer rounded-tl-3xl rounded-tr-3xl"
            :class="{ 'bg-hoverbg': toggleDropdown, 'rounded-3xl': !toggleDropdown }"
              @click="toggleDropdown = !toggleDropdown">
              <img src="../../assets/img/uzb.svg" alt="">
              <p class="text-sm text-primary px-2 py-2 font-semibold">O'zbekcha</p>
              <img class="text-end" :class="{ 'rotate-180': !toggleDropdown }" src="../../assets/img/arrow-up.svg"
              alt="">
            </li>
            <li v-if="toggleDropdown"
            class="flex items-center cursor-pointer bg-white z-10 left-0 w-full -bottom-13 absolute p-2 shadow-lg">
            <img src="../../assets/img/rus.svg" alt="">
            <p class="text-sm tracking-wide text-primary px-2 py-2">Russian</p>
          </li>
            <li v-if="toggleDropdown"
              class="flex items-center cursor-pointer bg-white z-10 w-full absolute left-0 -bottom-24 shadow-lg rounded-bl-3xl rounded-br-3xl p-2">
              <img src="../../assets/img/eng.svg" alt="">
              <p class="text-sm tracking-wide text-primary px-2 py-2">United</p>
            </li>
          </ul>
          <button @click="modal.modalTrigger()"
            class="border-2 w-36 border-gradientfrom p-3 tracking-wider text-gradientfrom hover:text-white rounded-3xl font-semibold font-outfit relative group overflow-hidden duration-300"><span
              class="h-0 w-0 absolute -z-10 left-0 bottom-0 duration-300 group-hover:h-[140%] group-hover:w-[140%] rounded-tr-[100%] group-hover:bg-gradient-to-r from-gradientfrom to-gradientto"></span>
            Kirish</button>
        </div>
        <div class="flex mt-10 ml-2">
          <ul class="flex flex-col space-y-6">
            <div>
              <a href="home#" @click="burgerToggle = false" class="relative group cursor-pointer">
                <span class="text-primary font-outfit">Bosh Sahifa</span>
                <span
                class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-500"></span>
              </a>
            </div>
            <div>
              <a href="home#projects" @click="burgerToggle = false" class="relative group cursor-pointer">
                <span class="text-primary font-outfit">Loyihalar</span>
                <span
                class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-500"></span>
              </a>
            </div>
            <div>
              <a href="home#api" @click="burgerToggle = false" class="relative group cursor-pointer">
                <span class="text-primary font-outfit">API</span>
                <span
                class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-500"></span>
              </a>
            </div>
            <div>
              <a href="home#fields" @click="burgerToggle = false" class="relative group cursor-pointer">
                <span class="text-primary font-outfit">Sohalar</span>
                <span
                class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-500"></span>
              </a>
            </div>
            <div>
              <a href="home#statistics" @click="burgerToggle = false" class="relative group cursor-pointer">
                <span class="text-primary font-outfit">Statistika</span>
                <span
                class="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-gradientfrom to-gradientto group-hover:w-full duration-500"></span>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>

  </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from '../../store/store.js';

const modal = useStore();
const toggleDropdown = ref(false);
const burgerToggle = ref(false);

const imgUrl = computed(() => {
  return new URL(`../../assets/img/${burgerToggle.value ? 'cross.svg' : 'burger.svg'}`, import.meta.url).href
})
</script>

<style scoped>
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to, .fade-leave-from {
    opacity: 1;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 0.2s linear;
  }
</style>