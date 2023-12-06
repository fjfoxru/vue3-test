<template>
  <teleport to="body">
    <div
      v-if="showModal"
      class="modal"
    >
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:showModal', false)">Скрыть модалку</button>
      <div>
        Пользователь: {{ userData.username }}
      </div>
      <input
          :value="saveText"
          @input="$emit('update:saveText', $event.target.value)"
          type="text"
        />
    </div>
  </teleport>
</template>

<script setup>
  import { inject } from 'vue'

  const props = defineProps({
    showModal: {
      type: Boolean,
      default: false
    },
    saveText: {
      type: String,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  })

  const emit = defineEmits(["update:showModal", "update:saveText"])

  const userData = inject('userData')

</script>

<style>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>