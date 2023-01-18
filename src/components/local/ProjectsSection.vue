<template>
  <div>
    <!-- <div class="w-full h-20" id="projects"></div> -->
    <div class="w-full relative flex flex-col lg:flex-row pt-20" id="projects">
      <div class="w-full lg:w-1/2">
        <div class="absolute h-40 w-40 rounded-[100%] bg-blueish -left-40 top-10 blur-[120px] z-10"></div>
        <div class="flex flex-col space-y-3" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear">
          <p class="uppercase text-blueish tracking-[0.25rem] lg:tracking-widest text-md font-outfit">Bizning loyihalar</p>
          <h1 class="text-primary text-3xl lg:text-4xl font-outfit font-bold tracking-wide max-w-full lg:max-w-[80%]">Bizning amalga oshirilgan
            loyihalarimiz</h1>
        </div>
        <div class="flex flex-col space-y-6 lg:space-y-20 mt-4 lg:mt-20">
          <content-card v-for="content in store.contents" :key="content.id" :id="content.id" :image="content.img" data-aos-easing="linear" :data-aos="fadeDirection1" data-aos-delay="100" data-aos-duration="1000">{{ content.name }}</content-card> 
        </div>
      </div>
      <div class="w-full lg:w-1/2">
        <div class="hidden lg:flex mt-24 justify-center" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear">
          <p class="max-w-[80%] font-outfit tracking-wide text-primary text-[18px] font-thin">Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita iusto rem culpa? Quod nostrum illo sint iste autem est aliquam
            quisquam.</p>
        </div>
        <div class="flex flex-col space-y-6 lg:space-y-20 mt-4 lg:mt-20 lg:items-center">
          <content-card v-for="content in store.contents2" :key="content.id" :id="content.id" :image="content.img" data-aos-easing="linear" :data-aos="fadeDirection2" data-aos-delay="100" data-aos-duration="1000">{{ content.name }}</content-card> 
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ContentCard from './ContentCard.vue'
import { useStore } from '../../store/store';
import {ref, onUnmounted, computed} from 'vue';

const size = ref(false)

function resizer(e) {
  if(e.currentTarget.innerWidth > 1024) {
    size.value = true;
  } else {
    size.value = false;
  }
}

const fadeDirection1 = computed(() => {
  return size.value ? 'fade-up-right' : 'fade-up';
})

const fadeDirection2 = computed(() => {
  return size.value ? 'fade-up-left' : 'fade-up';
})

window.addEventListener("resize", resizer)
onUnmounted(() => {
window.addEventListener("resize", resizer)
})
const store = useStore();
</script>

<style scoped>

</style>