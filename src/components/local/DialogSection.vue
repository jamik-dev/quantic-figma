<template>
    <dialog open class="flex justify-center md:items-center md:bg-[#0b0b0bd1] fixed top-0 md:backdrop-blur-[14px] w-full h-full z-20">
      <div  @click="modal.modalTrigger" class="absolute w-full h-full z-20 bg-transparent"></div>
      <div class="rounded-xl bg-white w-full md:w-[70%] lg:w-[40%] md:p-12 z-40">
        <div class="flex justify-between md:justify-end md:translate-x-4 md:-translate-y-4 cursor-pointer">
          <div class="md:hidden w-20">
            <img src="../../assets/img/logo.svg" alt="">
          </div>
          <div @click="modal.modalTrigger">
            <img class="w-6" src="../../assets/img/cross.svg" alt="">
          </div>
        </div>
        <div class="flex flex-col mt-20 md:mt-12">
          <h1 class="mx-auto font-outfit text-primary text-3xl md:text-4xl font-semibold">Tizimga kirish</h1>
          <div class="flex flex-col space-y-3 mt-16 md:mt-6">
            <div class="flex relative"><span class="absolute top-0 left-0 rounded-l-xl bg-hoverbg text-primary font-semibold tracking-wider top-[2px] left-[2px] border-r-[1px] font-outfit p-4 text-center">+998</span><input class="p-4 pl-20 lg:pl-24 rounded-xl text-primary outline-none font-outfit tracking-wider bg-hoverbg focus:bg-white placeholder:opacity-60 w-full duration-200 border-2 border-hoverbg focus:border-gradientto" v-maska data-maska="(##)-###-##-##" placeholder="(99)-999-99-99" type="tel"></div>
            <div class="flex relative items-center"><span @click="showPass = !showPass" class="absolute right-4 cursor-pointer"><img class="w-9" :src="imgUrl" alt=""></span><input class="p-4 rounded-xl text-primary outline-none font-outfit tracking-wide bg-hoverbg focus:bg-white placeholder:opacity-60 w-full duration-200 border-2 border-hoverbg focus:border-gradientto" v-maska data-maska="******************" placeholder="parolingizni kiriting" :type="typeTrigger"></div>
            <a href="#" class="text-end text-lg -translate-y-3 font-outfit tracking-wide text-transparent bg-clip-text hover:bg-gradient-to-l bg-gradient-to-r from-gradientfrom to-gradientto">parolni unutdingizmi?</a>
          </div>
          <div class="flex flex-col space-y-5 mt-4 md:mt-0">
            <button class="w-full rounded-xl bg-gradient-to-r from-gradientfrom to-gradientto font-outfit text-white hover:bg-gradient-to-l py-4 text-xl">Kirish</button>
            <div class="relative h-[1px] w-full bg-hoverbg"><div class="absolute flex justify-center left-0 right-0 m-auto w-16 -translate-y-[50%] text-xl bg-white"><span class="uppercase text-center opacity-20">yoki</span></div></div>
            <button class="w-full flex justify-center items-center rounded-xl bg-hoverbg font-outfit text-primary py-4 text-lg font-semibold"><img class="mr-2" src="../../assets/img/google.svg">Google accaunt orqali kirish</button>
          </div>
        </div>
      </div>
    </dialog>
</template>

<script setup>
import { useStore } from '../../store/store.js';
import {vMaska} from 'maska'
import {ref, computed} from 'vue';
const modal = useStore();
const showPass = ref(false)

const typeTrigger = computed(() => {
  return showPass.value ? 'text' : 'password';
})

const imgUrl = computed(() => {
  return new URL(`../../assets/img/${showPass.value ? 'eye-hide.svg' : 'eye-show.svg'}`, import.meta.url).href
})
</script>

<style scoped>
</style>