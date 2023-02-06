<template>
  <VerticalLines />
  <transition name="fade">
    <DialogSection v-if="isModalOpen" />
  </transition>
  <Navbar v-if="showNavbar" />
  <div class="pb-20">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script setup>
import VerticalLines from '../components/local/VerticalLines.vue';
import DialogSection from '../components/local/DialogSection.vue';
import { useStore } from '../store/store.js';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import {watch} from 'vue';

const modal = useStore();
const route = useRoute();
const {isModalOpen, showNavbar} = storeToRefs(modal)

if(route.path === '/home') {
    modal.navbarTrigger(true)
}

watch(isModalOpen, function() {
  document.querySelector('body').style.overflow = isModalOpen.value ? 'hidden' : 'visible';
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