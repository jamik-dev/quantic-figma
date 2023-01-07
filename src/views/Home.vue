<template>
  <section id="home" class="w-[80%] mx-auto">
    <main class="flex items-center">
      <div class="w-1/2">
        <div class="flex flex-col space-y-8">
          <h1 class="font-outfit text-6xl text-primary max-w-10 font-bold">Matnni ovozga o'girish</h1>
          <p class="text-primary font-outfit tracking-thin max-w-[75%]">21-oktabr, O'zbek tiliga davlat tili maqomi berilganligining 31 yillik munosabati bilan o'zbekcha matnni nutqga o'girish texnologiyasini ishlab chiqdik</p>
          <div class="flex space-x-8">
            <div class="flex flex-col space-y-3 items-center">
              <p class="flex text-primary font-outfit items-center"><img class="mr-5" src="../assets/img/microphone.svg" alt="">Tabiiy ovozda</p>
              <p class="flex text-primary font-outfit items-center"><img class="mr-4 -ml-4" src="../assets/img/time.svg" alt="">Yuqori tezlik</p>
          </div>
          <div class="flex flex-col space-y-4">
            <p class="flex text-primary font-outfit items-center"><img class="mr-5" src="../assets/img/ai.svg" alt="">To'liq sun'iy intelekt asosida</p>
            <p class="flex text-primary font-outfit items-center"><img class="mr-5" src="../assets/img/voice.svg" alt="">2ta ovozda tinglash imkoniyati</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 flex justify-end">
      <img src="../assets/img/robot.svg" class="w-[90%]" alt="">
    </div>
  </main>
  <div class="w-full flex mt-20">
    <div class="w-1/2">
      <div class="flex flex-col space-y-3">
        <p class="uppercase text-blueish tracking-widest text-md font-outfit">Bizning loyihalar</p>
        <h1 class="text-primary text-4xl font-outfit font-bold tracking-wide max-w-[80%]">Bizning amalga oshirilgan loyihalarimiz</h1>
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
        <p class="max-w-[80%] font-outfit tracking-wide text-primary text-[18px] font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iusto rem culpa? Quod nostrum illo sint iste autem est aliquam quisquam.</p>
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
  <div class="w-full mt-20">
    <img src="../assets/img/banner.jpg" alt="">
  </div>
  <div class="w-full mt-40">
    <h1 class="text-primary text-4xl text-center mx-auto font-outfit font-bold tracking-wide max-w-[50%]">TTS.uz API xizmatidan foydalanish ketma-ketligi</h1>
  </div>
</section>
</template>

<script setup>
import ContentCard from '../components/local/ContentCard.vue'
</script>

<style scoped>
</style>