<template>
  <div class="w-[85%] rounded-xl bg-white duration-200 hover:shadow-2xl pt-2 px-2 pb-4 cursor-pointer">
    <img :src="getImageUrl" class="w-full rounded-lg" alt="">
    <div class="flex flex-col space-y-2 mt-4 p-2">
      <h1 class="text-primary font-outfit font-semibold text-2xl tracking-wide">
        <slot></slot>
      </h1>
      <p class="font-outfit text-primary tracking-wide font-thin w-[95%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim commodo aliquam et mauris elit sed. Blandit ac nisl, quis proin rhoncus. Consectetur donec in id amet, vel, egestas</p>
      <p @click="openDetails" class="flex text-gradientto font-outfit tracking-wide group">Batafsil<img src="../../assets/img/arrow-right.svg" class="ml-2 group-hover:ml-4 duration-300" alt=""></p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '../../store/store';
const store = useStore();
const router = useRouter();

const props = defineProps({
  image: {
    required: true,
    type: String,
  },
  id: {
    required: true,
    type: Number
  }
})

const getImageUrl = computed(() => {
  return new URL(`../../assets/img/${props.image}`, import.meta.url).href
})

function openDetails() {
  store.itemDetails(props.id);
  router.replace('/content-details')
}

</script>

<style scoped>
</style>