<template>
  <div class="modals">
    <h1>Модалки</h1>
    <div>
      <label>
        Включена темная тема модалки?
        <pre>{{ savedText }}</pre>
        <input
          v-model="showDarkModals"
          type="checkbox"
        />
      </label>
    </div>
    <button @click="showModal = true">Показать модалку</button>
    <component
      v-model:show-modal="showModal"
      v-model:save-text="savedText"
      :is="showDarkModals ? ModalDark : Modal"
      title="Заголовок модалки"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa laboriosam vero natus ut rerum quaerat, saepe praesentium tempore et hic velit odio nemo minus labore quam ullam quod architecto?</p>
    </component>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Modal from '@/components/Modal.vue'
  import ModalDark from '@/components/ModalDark.vue'

  const showDarkModals = ref(false)
  const showModal = ref(false)
  const savedText = ref("Какой-то текст")

</script>
