<template>
  <div class="post-detail">
    <h1>Пост</h1>
    <p>№{{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Показать id</button>
    </div>
    <div>
      <button @click="goHomeIn3Seconds">Перейти домой через 3 сек</button>
    </div>
    <div>
      <button @click="goToFirstPost">Перейти к 1 посту</button>
    </div>
    <p><RouterLink to="/posts">&lt; Назад</RouterLink></p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const showPostId = () => {
  alert(`Пост ID: ${ route.params.id }`)
}

const goHomeIn3Seconds = () => {
  setTimeout(() => {
    router.push({ name: 'home' })
  }, 3000)
}

const goToFirstPost = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1'
    }
  })
}
</script>