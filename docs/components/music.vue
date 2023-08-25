<template>
  <div v-if="show">
    <!-- id="2643788482" -->
    <meting-js
      server="netease"
      fixed="true"
      type="playlist"
      id="8685999135"
      autoplay="true"
    >
    </meting-js>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import "../assets/style/Aplayer.css";
let show = ref(false);
onMounted(async () => {
  await import("../assets/js/Meting.min.js");
  await import("../assets/js/APlayer.min.js");
  show.value = true;
});
</script>
<style lang="less">
// @import "../assets/style/Aplayer.css";
</style>
