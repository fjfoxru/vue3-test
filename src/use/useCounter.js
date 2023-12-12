import { reactive, computed, watch, onMounted, nextTick } from 'vue'

const counterData = reactive({
  count: 0,
  title: 'Мой счетчик'
})

export function useCounter() {

  watch(() => counterData.count, (newCount) => {
    if (newCount === 20) {
      alert('Нельзя больше 20!!')
    }
  })

  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return 'четное'
    return 'нечетное'
  })

  const increaseCounter = async (amount, e) => {
    counterData.count += amount
    await nextTick()
    console.log('После nextTick')
  }

  const decreaseCounter = amount => {
    counterData.count -= amount
  }

  onMounted(() => {
    console.log('хук')
  })

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }
}