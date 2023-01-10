<template>
  <div class="mx-auto w-[80%]">
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
</script>

<style scoped>

</style>