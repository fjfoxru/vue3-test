<template>
  <div class="home">
    
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counter.title }}:</h3>

    <div>
      <button @click="counter.decreaseCounter(2)" class="btn">--</button>
      <button @click="counter.decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increaseCounter(1, $event)" class="btn">+</button>
      <button @click="counter.increaseCounter(2)" class="btn">++</button>
    </div>

    <p v-example="oddOrEven">Число {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Редактировать заголовок:</h4>
      <input v-model="counter.title" type="text" v-autofocus>
    </div>

  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { vAutofocus } from '@/directives/vAutofocus'
  import { vExample } from '@/directives/vExample'
  import { useCounterStore } from '@/stores/counter'

/* Заголовок */
  const appTitle = 'Приложение счетчик'
  onMounted(() => {
    console.log('хук')
    console.log(`Ширина заголовка ${ appTitleRef.value.offsetWidth } px`)
  })
  const appTitleRef = ref(null)

/* Счетчик*/
  const counter = useCounterStore()

</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>