<template>
  <div id="api" class="w-full relative lg:mb-40 mx-auto max-w-[600px] lg:max-w-[1100px] pt-20">
    <div data-aos-easing="linear" data-aos="fade-up" data-aos-duration="1000">
      <div class="absolute h-40 w-40 rounded-[100%] bg-blueish left-0 lg:-left-20 -top-10 blur-[175px] z-10"></div>
      <div class="absolute h-40 w-40 rounded-[100%] bg-gradientto right-0 lg:-right-20 -top-10 blur-[175px] z-10"></div>
      <h1
        class="text-primary text-3xl lg:text-4xl text-center mx-auto font-outfit font-bold tracking-wide max-w-full lg:max-w-[50%]">
        TTS.uz API
        xizmatidan foydalanish ketma-ketligi</h1>
      <div
        class="flex flex-col space-y-12 items-center lg:flex-row mt-10 lg:mt-20 justify-between relative">
        <!-- <img src="../../assets/img/vector-left.svg" class="absolute left-[140px] top-[50px] -z-10" alt=""> -->
        <svg class="hidden lg:block absolute left-[140px] top-[100px] -z-10" width="358" height="160" viewBox="0 0 358 160" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path opacity="1" d="M1 5.50005C35 4.76837e-05 89 -5.00008 121 22.5C153 50.0002 143.306 152.666 357 159"
            :stroke="vector1" stroke-width="1.5" stroke-linejoin="round" stroke-dasharray="4 4" />
        </svg>

        <!-- <img src="../../assets/img/vector-right.svg" class="absolute right-[140px] top-[50px] -z-10" alt=""> -->
        <svg class="hidden lg:block absolute right-[140px] top-[50px] -z-10" width="358" height="160" viewBox="0 0 358 160" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path opacity="1"
            d="M357 5.31206C323 -0.187941 269 -5.18807 237 22.3121C205 49.8122 214.694 152.478 1 158.812"
            :stroke="vector2" stroke-width="1.5" stroke-linejoin="round" stroke-dasharray="4 4" />
        </svg>

        <svg class="absolute right-10 top-20 md:right-28 md:top-16 lg:hidden" width="91" height="235" viewBox="0 0 91 235" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="1" d="M0.5 0.5C68.3333 34.6667 163.3 129 0.5 233" :stroke="vector1" stroke-dasharray="3 3" />
          <path
            d="M0.511616 232.699C0.452173 232.969 0.622595 233.235 0.892264 233.295L5.28677 234.263C5.55644 234.323 5.82323 234.152 5.88268 233.883C5.94212 233.613 5.7717 233.346 5.50203 233.287L1.5958 232.426L2.45685 228.52C2.51629 228.25 2.34587 227.983 2.0762 227.924C1.80653 227.864 1.53974 228.035 1.48029 228.304L0.511616 232.699ZM6.68983 228.579L0.730736 232.385L1.26905 233.228L7.22814 229.421L6.68983 228.579Z"
            :fill="vector1" />
        </svg>

        <svg class="absolute left-10 bottom-48 md:left-28 md:bottom-44 lg:hidden" width="92" height="235" viewBox="0 0 92 235" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="1" d="M90.8906 1C23.0573 35.1667 -71.9094 129.5 90.8906 233.5" :stroke="vector2"
            stroke-dasharray="3 3" />
          <path
            d="M90.879 233.199C90.9385 233.469 90.768 233.735 90.4984 233.795L86.1039 234.763C85.8342 234.823 85.5674 234.652 85.5079 234.383C85.4485 234.113 85.6189 233.846 85.8886 233.787L89.7948 232.926L88.9338 229.02C88.8743 228.75 89.0448 228.483 89.3144 228.424C89.5841 228.364 89.8509 228.535 89.9103 228.804L90.879 233.199ZM84.7008 229.079L90.6599 232.885L90.1216 233.728L84.1625 229.921L84.7008 229.079Z"
            :fill="vector2" />
        </svg>


        <div @mouseenter="gif1 = true" @mouseleave="gif1 = false"
          class="flex flex-col lg:-translate-x-20 lg:w-1/3 items-center">
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
          class="flex flex-col lg:translate-y-40 lg:w-1/3 items-center">
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
          class="flex flex-col lg:translate-x-20 lg:w-1/3 items-center">
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