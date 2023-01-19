<template>
  <div class="mx-auto w-full lg:w-[80%]">
    <transition name="fade">
      <Preloader v-if="isLoading" />
    </transition>
    <AboutSection />
    <MessageButton />
  </div>
</template>

<script setup>
import AboutSection from '../components/local/AboutSection.vue';
import MessageButton from '../components/local/MessageButton.vue';
import Preloader from '../components/global/Preloader.vue';
import { onMounted, ref, onUnmounted } from 'vue';
import { useStore } from '../store/store';

function resizer(e) {
  if(e.currentTarget.innerWidth >= 1024) {
    store.showNavbar = true;
  } else {
    store.showNavbar = false;
  }
}

window.addEventListener("resize", resizer)
onUnmounted(() => {
window.addEventListener("resize", resizer)
})
const store = useStore();

const isLoading = ref(true)

function preloader() {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000)
}
function scrollToTop() {
  window.scrollTo(0,0);
}

onMounted(() => {
  preloader();
  scrollToTop();
})
</script>

<style scoped>
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to, .fade-leave-from {
    opacity: 1;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 0.2s linear;
  }
</style>