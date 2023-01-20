<template>
  <div class="flex flex-col">
    <router-link to="/home" class="hidden font-outfit text-primary lg:flex items-center cursor-pointer"><img class="mr-2" src="../../assets/img/arrow-left.svg" alt="">{{ choosen.name }}</router-link>
    <router-link to="/home" class="pl-4 lg:hidden py-2 shadow-lg sticky -top-1 z-20 bg-white font-outfit text-primary flex items-center cursor-pointer"><img class="mr-2" src="../../assets/img/arrow-left.svg" alt="">{{ choosen.name }}</router-link>
    <div data-aos-easing="linear" data-aos-delay="1000" data-aos="fade-up" data-aos-duration="1000" class="flex flex-col lg:flex-row w-[90%] mx-auto lg:w-full mt-4 lg:space-x-8">
      <div class="flex lg:w-1/2 xl:w-2/5 relative overflow-hidden cursor-pointer group rounded-lg"><img
          class="w-full rounded-lg group-hover:scale-105  duration-500" :src="getImageUrl" alt=""></div>
      <div class="flex flex-col lg:w-1/2 xl:w-3/5 py-3 lg:p-3">
        <h1 class="text-primary font-semibold font-outfit text-2xl">Options</h1>
        <ul class="text-primary flex flex-col space-y-4 mt-4 opacity-70 ml-5 list-disc">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Sed velit, in placerat tristique bibendum maecenas consectetur.</li>
          <li> Non lobortis morbi eget facilisis massa. </li>
          <li>Augue faucibus et vulputate id nibh vulputate.</li>
          <li> Eget tortor dolor, libero senectus convallis suspendisse interdum leo.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quaerat.</li>
        </ul>
      </div>
    </div>
    <div data-aos-easing="linear" :data-aos-delay="delay" data-aos="fade-up" data-aos-duration="1000" class="flex w-[90%] mx-auto lg:w-full flex-col space-y-2 lg:space-y-6 my-8 lg:my-16">
      <h1 class="text-2xl lg:text-4xl font-semibold font-outfit text-primary">{{ choosen.name }}</h1>
      <p class="font-outfit font-thin text-primary tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatum harum,
        ducimus, fuga velit ad dicta, voluptate exercitationem qui corporis pariatur quod error reiciendis optio sint
        cumque. Natus, eius quaerat? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur error laudantium
        eligendi, quas soluta voluptate assumenda ab dignissimos sed eum, tenetur officia et voluptates mollitia sint
        nemo? Debitis, error sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quibusdam minus quo
        aspernatur sunt tempore soluta aliquid totam recusandae quas aliquam saepe dolores quisquam ea nemo, corporis
        velit numquam? Delectus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nam id et consectetur
        est aspernatur repellat at obcaecati molestias, ipsum quae, quibusdam, quis beatae! Quae nemo ad temporibus est
        explicabo.</p>

      <p class="font-outfit font-thin text-primary tracking-wide">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quod dicta
        recusandae odio aperiam maiores atque porro voluptates ea tempora esse voluptatem, laboriosam quasi aspernatur
        fugiat quisquam iure non consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quibusdam
        aspernatur molestias, recusandae veniam exercitationem placeat ipsam aut culpa id praesentium, odit cum facilis
        explicabo? Blanditiis, ipsum quia! Itaque, minima!</p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '../../store/store';
import { storeToRefs } from 'pinia';
import {computed, ref} from 'vue';
const store = useStore();
const {choosen} = storeToRefs(store)

const getImageUrl = computed(() => {
  return new URL(`../../assets/img/${choosen.value.img}`, import.meta.url).href
})

const delay = ref(0);

if(window.innerWidth > 1024) {
  delay.value = 1000;
} else {
  delay.value = 0
}

</script>

<style scoped>

</style>