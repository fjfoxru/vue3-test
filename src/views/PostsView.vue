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
  </div>
</template>

<script setup>
  import { ref } from 'vue'

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

</script>