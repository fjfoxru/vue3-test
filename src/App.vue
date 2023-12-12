<template>
  <nav>
    <RouterLink to="/">Домой</RouterLink>
    <RouterLink to="/use">Домой с use</RouterLink>
    <RouterLink to="/store">Домой с store</RouterLink>
    <RouterLink to="/about">О приложении</RouterLink>
    <RouterLink to="/modals">Модалки</RouterLink>
    <RouterLink to="/posts">Посты</RouterLink>
  </nav>

  <RouterView />
</template>
<script setup>
import { reactive, provide } from 'vue'

/* provide */
const userData = reactive({
  name: "Пользователь",
  username: "Пользователь1231"
})
provide('userData', userData)
</script>
<style>
@import '@/assets/base.css';
</style>
