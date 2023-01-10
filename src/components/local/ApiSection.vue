<template>
  <div class="w-full h-24" id="api"></div>
  <div class="w-full relative mb-40 mx-auto max-w-[1100px]">
    <div>
      <div class="absolute h-40 w-40 rounded-[100%] bg-blueish -left-20 -top-10 blur-[175px] z-10"></div>
      <div class="absolute h-40 w-40 rounded-[100%] bg-gradientto -right-20 -top-10 blur-[175px] z-10"></div>
      <h1 class="text-primary text-4xl text-center mx-auto font-outfit font-bold tracking-wide max-w-[50%]">TTS.uz API
        xizmatidan foydalanish ketma-ketligi</h1>
      <div class="flex mt-20 justify-between relative">
        <!-- <img src="../../assets/img/vector-left.svg" class="absolute left-[140px] top-[50px] -z-10" alt=""> -->
        <svg class="absolute left-[140px] top-[50px] -z-10" width="358" height="160" viewBox="0 0 358 160" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path opacity="1" d="M1 5.50005C35 4.76837e-05 89 -5.00008 121 22.5C153 50.0002 143.306 152.666 357 159"
            :stroke="vector1" stroke-width="1.5" stroke-linejoin="round" stroke-dasharray="4 4" />
        </svg>

        <!-- <img src="../../assets/img/vector-right.svg" class="absolute right-[140px] top-[50px] -z-10" alt=""> -->
        <svg class="absolute right-[140px] top-[50px] -z-10" width="358" height="160" viewBox="0 0 358 160" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path opacity="1"
            d="M357 5.31206C323 -0.187941 269 -5.18807 237 22.3121C205 49.8122 214.694 152.478 1 158.812"
            :stroke="vector2" stroke-width="1.5" stroke-linejoin="round" stroke-dasharray="4 4" />
        </svg>

        <div @mouseenter="gif1 = true" @mouseleave="gif1 = false"
          class="flex flex-col -translate-x-20 w-1/3 items-center">
          <div class="h-24 w-24 flex items-center shadow-xl justify-center bg-white rounded-[100%] overflow-hidden">
            <img v-if="!gif1" src="../../assets/img/notebook.svg" alt="">
            <img v-else class="w-[78%]" src="../../assets/img/notebook.gif" alt="">
          </div>
          <div class="mt-6 space-y-3">
            <h1 class="text-primary text-2xl text-center mx-auto font-outfit font-bold tracking-wide">Shartnoma</h1>
            <p class="max-w-[80%] text-center mx-auto font-outfit tracking-wide text-primary font-thin">tts.uz API
              xizmatidan
              foydalanish uchun shartnoma qilinadi</p>
          </div>
        </div>
        <div @mouseenter="gif2 = true" @mouseleave="gif2 = false"
          class="flex flex-col translate-y-40 w-1/3 items-center">
          <div class="h-24 w-24 flex items-center shadow-xl justify-center bg-white rounded-[100%] overflow-hidden">
            <img v-if="!gif2" src="../../assets/img/money-bag.svg" alt="">
            <img v-else class="w-[78%]" src="../../assets/img/money-bag.gif" alt="">
          </div>
          <div class="mt-6 space-y-3">
            <h1 class="text-primary text-2xl text-center mx-auto font-outfit font-bold tracking-wide">Tariflar &
              To'lovlar</h1>
            <p class="max-w-[80%] text-center mx-auto font-outfit tracking-wide text-primary font-thin">Shartnoma
              qilinganidan
              so'ng ta’rif tanlanadi</p>
          </div>
        </div>
        <div @mouseenter="gif3 = true" @mouseleave="gif3 = false"
          class="flex flex-col translate-x-20 w-1/3 items-center">
          <div class="h-24 w-24 flex items-center shadow-xl justify-center bg-white rounded-[100%] overflow-hidden">
            <img v-if="!gif3" src="../../assets/img/rocket.svg" alt="">
            <img v-else class="w-[78%]" src="../../assets/img/rocket.gif" alt="">
          </div>
          <div class="mt-6 space-y-3">
            <h1 class="text-primary text-2xl text-center mx-auto font-outfit font-bold tracking-wide">O'rnatish & Ishga
              tushirish</h1>
            <p class="max-w-[80%] text-center mx-auto font-outfit tracking-wide text-primary font-thin">Saytga o'rnatish
              uchun
              JavaScript plugin beriladi va ungan api token biriktirilib saytga o'rnatiladi</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const gif1 = ref(false)
const gif2 = ref(false)
const gif3 = ref(false)

const vector1 = computed(() => {
  return !(gif2.value || gif3.value) ? '#170F4973' : '#F92B74'
})

const vector2 = computed(() => {
  return !gif3.value ? '#170F4973' : '#F92B74'
})

</script>

<style scoped>

</style>