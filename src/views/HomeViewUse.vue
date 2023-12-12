<template>
  <div class="home">
    
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p v-example="oddOrEven">Число {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Редактировать заголовок:</h4>
      <input v-model="counterData.title" type="text" v-autofocus>
    </div>

  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { vAutofocus } from '@/directives/vAutofocus'
  import { vExample } from '@/directives/vExample'
  import { useCounter } from '@/use/useCounter'

/* Заголовок */
  const appTitle = 'Приложение счетчик'
  onMounted(() => {
    console.log('хук')
    console.log(`Ширина заголовка ${ appTitleRef.value.offsetWidth } px`)
  })
  const appTitleRef = ref(null)

  const { counterData, oddOrEven, increaseCounter, decreaseCounter } = useCounter()

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