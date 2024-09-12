<script setup lang="ts">
import LogoSvg from "../assets/LogoSvg.vue";
import {useRouter} from "vue-router";
const router = useRouter();
function goToPreview() {
  router.push('/preview');
}
function goToHome() {
  router.push('/');
}
</script>

<template>
  <div class="header">
    <div class="logo">
      <LogoSvg />
    </div>
    <div class="header-link">
      <a  @click="goToHome">Форма</a>
      <a  @click="goToPreview">Превью</a>
    </div>
  </div>
</template>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    position: relative;
    border-bottom: 2px solid rgba(0, 0, 0, 0.11);
  }

  .logo {
    position: absolute;
    left: 5%;
    top: 10px;
  }

  .header-link {
    display: flex;
    align-items: center;
    gap: 30px;
    color: #1111117A;
  }

  .header-link a {
    font-size: 1.1rem;
    cursor: pointer;
  }
</style>
