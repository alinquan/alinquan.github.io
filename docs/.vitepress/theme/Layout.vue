<template>
  <Layout> </Layout>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>
<script setup>
import { onMounted, shallowRef } from "vue";
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
const dynamicComponent = shallowRef();
onMounted(() => {
  import("../../components/music.vue").then((module) => {
    if (window.APlayer) {
      dynamicComponent.value = module.default;
    } else {
      setTimeout(() => {
        dynamicComponent.value = module.default;
      }, 300);
    }
  });
});
</script>
<style lang="less"></style>
