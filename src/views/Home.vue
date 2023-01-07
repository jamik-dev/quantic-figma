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
    <img src="../assets/img/banner.jpg" class="mx-auto" alt="">
  </div>
  <div class="w-full mt-40 mb-60">
    <h1 class="text-primary text-4xl text-center mx-auto font-outfit font-bold tracking-wide max-w-[50%]">TTS.uz API xizmatidan foydalanish ketma-ketligi</h1>
    <div class="flex mt-20 justify-between relative">
      <img src="../assets/img/vector-left.svg" class="absolute left-[140px] top-[50px] -z-10" alt="">
      <img src="../assets/img/vector-right.svg" class="absolute right-[140px] top-[50px] -z-10" alt="">
      <div class="flex flex-col -translate-x-20 w-1/3 items-center">
        <div class="h-24 w-24 flex items-center shadow-xl justify-center bg-white rounded-[100%]"><img src="../assets/img/notebook.svg" alt=""></div>
        <div class="mt-6 space-y-3">
          <h1 class="text-primary text-2xl text-center mx-auto font-outfit font-bold tracking-wide">Shartnoma</h1>
          <p class="max-w-[80%] text-center mx-auto font-outfit tracking-wide text-primary">tts.uz API xizmatidan foydalanish uchun shartnoma qilinadi</p>
        </div>
      </div>
      <div class="flex flex-col translate-y-40 w-1/3 items-center">
        <div class="h-24 w-24 flex items-center shadow-xl justify-center bg-white rounded-[100%]"><img src="../assets/img/money-bag.svg" alt=""></div>
        <div class="mt-6 space-y-3">
          <h1 class="text-primary text-2xl text-center mx-auto font-outfit font-bold tracking-wide">Tariflar & To'lovlar</h1>
          <p class="max-w-[80%] text-center mx-auto font-outfit tracking-wide text-primary">Shartnoma qilinganidan so'ng ta’rif tanlanadi</p>
        </div>
      </div>
      <div class="flex flex-col translate-x-20 w-1/3 items-center">
        <div class="h-24 w-24 flex items-center shadow-xl justify-center bg-white rounded-[100%]"><img src="../assets/img/rocket.svg" alt=""></div>
        <div class="mt-6 space-y-3">
          <h1 class="text-primary text-2xl text-center mx-auto font-outfit font-bold tracking-wide">O'rnatish & Ishga tushirish</h1>
          <p class="max-w-[80%] text-center mx-auto font-outfit tracking-wide text-primary">Saytga o'rnatish uchun JavaScript plugin beriladi va ungan api token biriktirilib saytga o'rnatiladi</p>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-20">
    <div class="flex rounded-xl w-full p-2 bg-greyish">
      <div class="w-1/3 bg-blueish rounded-xl px-5 py-6">
        <h1 class="text-white w-full text-3xl font-outfit text-primary tracking-wide">TTS & STT tizimlarini o'rnatish reja qilingan sohalar</h1>
      </div>
      <div class="w-2/3">
        <div class="w-full p-8 h-1/2 flex items-center justify-center">
          <div class="w-1/3 flex space-x-2 items-center">
            <img src="../assets/img/robot-icon.svg" class="hover:-translate-y-2 duration-300 cursor-pointer" alt="">
            <p class="font-outfit text-md text-primary tracking-wide">IOT & <br> Robotech</p>
          </div>
          <div class="w-1/3 flex space-x-2 items-center">
            <img src="../assets/img/marketing-icon.svg" class="hover:-translate-y-2 duration-300 cursor-pointer" alt="">
            <p class="font-outfit text-md text-primary tracking-wide">Media & <br> Xizmatlar</p>
          </div>
          <div class="w-1/3 flex space-x-2 items-center">
            <img src="../assets/img/speaker-icon.svg" class="hover:-translate-y-2 duration-300 cursor-pointer" alt="">
            <p class="font-outfit text-md text-primary tracking-wide">Smart <br> Yordamchilar</p>
          </div>
        </div>
        <div class="w-full p-8 h-1/2 flex items-center justify-center">
          <div class="w-1/3 flex space-x-2 items-center">
            <img src="../assets/img/scholarship-icon.svg" class="hover:-translate-y-2 duration-300 cursor-pointer" alt="">
            <p class="font-outfit text-md text-primary tracking-wide">Ta'lim & <br> Sohalari</p>
          </div>
          <div class="w-1/3 flex space-x-2 items-center">
            <img src="../assets/img/smartphone-icon.svg" class="hover:-translate-y-2 duration-300 cursor-pointer" alt="">
            <p class="font-outfit text-md text-primary tracking-wide">Online & <br> Dasturlar</p>
          </div>
          <div class="w-1/3 flex space-x-2 items-center">
            <img src="../assets/img/languages-icon.svg" class="hover:-translate-y-2 duration-300 cursor-pointer" alt="">
            <p class="font-outfit text-md text-primary tracking-wide">Ovozli <br> Tarjimonlar sohalari</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center mt-20">
      <div class="w-1/3 flex flex-col space-y-2 items-center justify-center">
        <img src="../assets/img/users.svg" class="w-20" alt="">
        <h1 class="text-primary text-3xl text-center mx-auto font-outfit tracking-wide font-bold">648 000+</h1>
        <p class="font-outfit text-md text-primary tracking-wide">Foydalanuvchilar soni</p>
      </div>
      <div class="w-1/3 flex flex-col space-y-2 items-center justify-center">
        <img src="../assets/img/audiomessage.svg" class="w-20" alt="">
        <h1 class="text-primary text-3xl text-center mx-auto font-outfit tracking-wide font-bold">90 mln+</h1>
        <p class="font-outfit text-md text-primary tracking-wide">Generatsiya qilingan audioxabarlar</p>
      </div>
      <div class="w-1/3 flex flex-col space-y-2 items-center justify-center">
        <img src="../assets/img/handshake.svg" class="w-20" alt="">
        <h1 class="text-primary text-3xl text-center mx-auto font-outfit tracking-wide font-bold">10+</h1>
        <p class="font-outfit text-md text-primary tracking-wide">Mijozlarlar soni</p>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import ContentCard from '../components/local/ContentCard.vue'
</script>

<style scoped>
</style>