const { createApp, ref, computed } = Vue

const app = createApp({
  setup(){
    const cart = ref([])
    const cartItemCount = computed(() => {
      return cart.value.reduce((accumulator, item) => {
        accumulator[item] = (accumulator[item] || 0) + 1;
        return accumulator
      }, {})
    })
    const premium = ref(true)
    const details = ref([
      '100% Fake',
      'No Refund',
    ])

    function updateCart(id) {
      cart.value.push(id)
    }

    return {
      cart,
      cartItemCount,
      premium,
      details,
      updateCart
    }
  }
})

app.component('product-display', productDisplay)
app.component('product-details', productDetails)

app.mount('#app')