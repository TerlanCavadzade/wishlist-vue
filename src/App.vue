<script setup>
import { provide } from "vue";
import store from "./store";
import MainLayout from "./layouts/MainLayout.vue";

provide("store", store);
</script>

<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>
