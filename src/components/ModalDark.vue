<template>
  <teleport to="body">
    <div
      v-if="showModal"
      class="modal-dark"
    >
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:showModal', false)">Скрыть модалку</button>

      <input
          :value="saveText"
          @input="$emit('update:saveText', $event.target.value)"
          type="text"
        />
    </div>
  </teleport>
</template>

<script setup>
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
      default: 'No title specified'
    }
  })

  const emit = defineEmits(["update:showModal", "update:saveText"])

</script>

<style>
.modal-dark {
  background: #333;
  color: white;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>