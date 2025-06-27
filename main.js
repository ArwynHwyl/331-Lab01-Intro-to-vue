const { createApp, ref, computed } = Vue

createApp({
    setup() {
        const product = ref('Boots')
        const brand = ref('SE331');
        //const image = ref('./assets/images/socks_green.jpg');
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const productLink = ref('https://www.camt.cmu.ac.th');
        //const inStock = ref(false);
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        const inventory = ref(100);
        const onSale = ref(true);
        const onSaleText = computed(() => {
            if (onSale.value) {
        return brand.value + ' ' + product.value + ' ' + 'is on sale'
      }
      return ''
        })
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ]);
        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ]);
        const selectedVariant = ref(0)
        const cart = ref(0);
        function addToCart() {
            cart.value += 1;
        }
        function updateImage(variantImage) {
            image.value = variantImage;
        }
        function toggleStock() {
            inStock.value = !inStock.value
            inventory.value = inStock.value ? 100 : 0
        }
        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        function updateVariant(index) {
            return selectedVariant.value = index;
        }

        return {
            title,
            image,
            inStock,
            productLink,
            inventory,
            onSale,
            details,
            variants,
            cart,
            sizes,
            addToCart,
            updateImage,
            toggleStock,
            updateVariant,
            onSaleText
        }
    }
}).mount('#app')
