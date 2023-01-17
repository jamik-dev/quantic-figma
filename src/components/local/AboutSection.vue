<template>
  <div data-aos-easing="linear" data-aos="fade-up" data-aos-duration="1000" class="flex flex-col">
    <router-link to="/home" class="font-outfit text-primary flex items-center cursor-pointer"><img class="mr-2" src="../../assets/img/arrow-left.svg" alt="">{{ choosen.name }}</router-link>
    <div class="flex mt-4 space-x-8">
      <div class="flex w-2/5 relative overflow-hidden cursor-pointer group rounded-lg"><img
          class="w-full rounded-lg group-hover:scale-105  duration-500" :src="getImageUrl" alt=""></div>
      <div class="flex flex-col w-3/5 p-3">
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
    <div class="flex flex-col space-y-6 my-16">
      <h1 class="text-4xl font-semibold font-outfit text-primary">{{ choosen.name }}</h1>
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
import {computed} from 'vue';
const store = useStore();

const {choosen} = storeToRefs(store)

console.log(choosen.value.img)

const getImageUrl = computed(() => {
  return new URL(`../../assets/img/${choosen.value.img}`, import.meta.url).href
})

</script>

<style scoped>

</style>