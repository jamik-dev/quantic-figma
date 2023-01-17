<template>
  <div class="mx-auto w-[80%]">
    <transition v-if="isLoading" name="fade">
      <Preloader />
    </transition>
    <AboutSection />
    <MessageButton />
  </div>
</template>

<script setup>
import AboutSection from '../components/local/AboutSection.vue';
import MessageButton from '../components/local/MessageButton.vue';
import Preloader from '../components/global/Preloader.vue';
import { onMounted, ref } from 'vue';

const isLoading = ref(true)

function preloader() {
  setTimeout(() => {
    isLoading.value = false;
  }, 300)
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