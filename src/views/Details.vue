<template>
  <div class="mx-auto w-[80%]">
    <AboutSection />
    <MessageButton />
  </div>
</template>

<script setup>
import AboutSection from '../components/local/AboutSection.vue';
import MessageButton from '../components/local/MessageButton.vue';

import { onMounted } from 'vue';

function scrollToTop() {
  window.scrollTo(0,0);
}

onMounted(() => {
  scrollToTop();
})
</script>