<template>
  <div class="mx-auto w-[90%] lg:w-[85%] xl:w-[80%]">
    <!-- Preloader -->
    <transition name="fade">
      <Preloader v-if="isLoading" />
    </transition>
    <!-- Message Button -->
    <MessageButton />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Projects Section -->
    <ProjectsSection />

    <!-- Banner Section -->
    <BannerSection />

    <!-- API Section -->
    <ApiSection />

    <!-- Fields Section -->
    <FieldsSection />

    <!-- Statistics Section -->
    <StatisticsSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/local/HeroSection.vue';
import ProjectsSection from '../components/local/ProjectsSection.vue';
import ApiSection from '../components/local/ApiSection.vue';
import BannerSection from '../components/local/BannerSection.vue';  
import FieldsSection from '../components/local/FieldsSection.vue';
import StatisticsSection from '../components/local/StatisticsSection.vue';
import MessageButton from '../components/local/MessageButton.vue';
import Preloader from '../components/global/Preloader.vue';
import { onMounted, ref } from 'vue';
import { useStore } from '../store/store';
const store = useStore();
const isLoading = ref(true)

store.showNavbar = true;

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