<template>
  <div class="posts">
    <h1>Посты</h1>
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
      >
        <RouterLink :to="`/posts/${ post.id }`">{{ post.title }}</RouterLink>
      </li>
    </ul>
    <div>
      <button
        @click="increaseCounter(1)"
        class="counter-button"
        :class="{ 'yellow' : oddOrEven === 'четное' }"
      >
        {{ counterData.count }}
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useCounter } from '@/use/useCounter'

  const posts = ref([
    {
      id: 'id1',
      title: 'Пост 1'
    },
    {
      id: 'id2',
      title: 'Пост 2'
    },
    {
      id: 'id3',
      title: 'Пост 3'
    }
  ])

  const { counterData, increaseCounter, oddOrEven } = useCounter()

</script>
<style scoped>
ul {
  margin-bottom: 30px;
}
.counter-button {
  font-size: 60px;
  width: 100%;
  background-color: pink;
}
.counter-button.yellow {
  background-color: yellow;
} 
</style>