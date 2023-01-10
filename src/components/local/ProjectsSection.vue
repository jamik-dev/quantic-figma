<template>
    <div class="w-full relative flex mt-20" id="projects">
      <div class="w-1/2">
        <div class="absolute h-40 w-40 rounded-[100%] bg-blueish -left-40 top-10 blur-[120px] z-10"></div>
        <div class="flex flex-col space-y-3">
          <p class="uppercase text-blueish tracking-widest text-md font-outfit">Bizning loyihalar</p>
          <h1 class="text-primary text-4xl font-outfit font-bold tracking-wide max-w-[80%]">Bizning amalga oshirilgan
            loyihalarimiz</h1>
        </div>
        <div class="flex flex-col space-y-20 mt-20">
          <content-card :image="'content.jpg'">
            O'zbekcha sintezator
          </content-card>
          <content-card :image="'content-2.jpg'">
            @ttsuzbot Telegram boti
          </content-card>
          <content-card :image="'content-3.jpg'">
            Ovozli tarjimon
          </content-card>
          <content-card :image="'content-4.jpg'">
            Qo‘ng‘iroqlarni buyurtma qilish
          </content-card>
        </div>
      </div>
      <div class="w-1/2">
        <div class="flex mt-24 justify-center">
          <p class="max-w-[80%] font-outfit tracking-wide text-primary text-[18px] font-thin">Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita iusto rem culpa? Quod nostrum illo sint iste autem est aliquam
            quisquam.</p>
        </div>
        <div class="flex flex-col space-y-20 mt-20 items-center">
          <content-card :image="'content-5.jpg'">
            UzNutq Sintezator
          </content-card>
          <content-card :image="'content-6.jpg'">
            TTS.uz API
          </content-card>
          <content-card :image="'content-7.jpg'">
            Shamchiroq
          </content-card>
          <content-card :image="'content-8.jpg'">
            Web TTSx
          </content-card>
        </div>
      </div>
    </div>
</template>

<script setup>
import ContentCard from './ContentCard.vue'
</script>

<style scoped>
</style>