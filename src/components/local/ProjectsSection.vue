<template>
  <div>
    <div class="w-full h-20" id="projects"></div>
    <div class="w-full relative flex">
      <div class="w-1/2">
        <div class="absolute h-40 w-40 rounded-[100%] bg-blueish -left-40 top-10 blur-[120px] z-10"></div>
        <div class="flex flex-col space-y-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
          <p class="uppercase text-blueish tracking-widest text-md font-outfit">Bizning loyihalar</p>
          <h1 class="text-primary text-4xl font-outfit font-bold tracking-wide max-w-[80%]">Bizning amalga oshirilgan
            loyihalarimiz</h1>
        </div>
        <div class="flex flex-col space-y-20 mt-20">
          <content-card v-for="(content, index) in contents" :key="index" :image="content.img" data-aos-easing="linear" data-aos="fade-up-right" data-aos-duration="1500">{{ content.name }}</content-card> 
        </div>
      </div>
      <div class="w-1/2">
        <div class="flex mt-24 justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
          <p class="max-w-[80%] font-outfit tracking-wide text-primary text-[18px] font-thin">Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita iusto rem culpa? Quod nostrum illo sint iste autem est aliquam
            quisquam.</p>
        </div>
        <div class="flex flex-col space-y-20 mt-20 items-center">
          <content-card v-for="(content, index) in contents2" :key="index" :image="content.img" data-aos-easing="linear" data-aos="fade-up-left" data-aos-duration="1500">{{ content.name }}</content-card> 
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ContentCard from './ContentCard.vue'
import {ref} from 'vue'
import { onMounted } from 'vue';
import AOS from 'aos'

onMounted(() => {
  AOS.init()
})

const contents = ref([
  {name: "O'zbekcha sintezator", img: 'content.jpg'},
  {name: "@ttsuzbot Telegram boti", img: 'content-2.jpg'},
  {name: "Ovozli tarjimon", img: 'content-3.jpg'},
  {name: "Qo‘ng‘iroqlarni buyurtma qilish", img: 'content-4.jpg'},
])

const contents2 = ref([
  {name: "UzNutq Sintezator", img: 'content-5.jpg'},
  {name: "TTS.uz API", img: 'content-6.jpg'},
  {name: "Shamchiroq", img: 'content-7.jpg'},
  {name: "Web TTSx", img: 'content-8.jpg'},
])
</script>

<style scoped>

</style>