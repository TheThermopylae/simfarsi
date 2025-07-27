<template>
  <section>
    <div
      class="bg-black p-3 rounded-[13px] grid grid-cols-2 items-center gap-3 text-white"
    >
      <button
        v-if="!someProduct"
        class="border border-white text-xs flex flex-center p-3.5 rounded-md h-10"
        @click="addToBasketFunc"
      >
        افزودن به سبد خرید
      </button>
      <div
        v-else
        class="border border-white textxs text-center p-3.5 rounded-md flex justify-between items-center h-10"
      >
        <svg
          @click="increaseCount"
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v14m-7-7h14"
          />
        </svg>
        {{ count }}
        <svg
          v-if="count > 1"
          @click="decreaseCount"
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14"
          />
        </svg>
        <svg
          v-else
          @click="removeProductInBasket"
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4"
          />
        </svg>
      </div>
      <div class="text-left">
        <span class="font-peydaB text-sm block"
          >{{ props.data.price.toLocaleString() }} تومان</span
        >
      </div>
    </div>
    <p v-if="findProductIndex != -1" class="mt-3 text-xs">
      قیمت کلی :
      <span class="font-peydaB">
        {{
          (
            localProducts.products[findProductIndex].count *
            localProducts.products[findProductIndex].price
          ).toLocaleString()
        }}
        تومان</span
      >
    </p>
    <Toast />
  </section>
</template>

<script setup>
let { userData } = userAuth()
let { showToast } = useToastComp()

const props = defineProps(['data'])

let localProducts = ref(
  JSON.parse(localStorage.getItem('product')) || {
    totalPrice: 0,
    products: []
  }
)

const findProductIndex = computed(() =>
  localProducts.value.products.findIndex(
    product => product.id === props.data._id
  )
)

let count = ref(
  localProducts.value.products[findProductIndex.value]?.count || 1
)

let someProduct = computed(() =>
  localProducts.value.products.some(product => product.id == props.data._id)
)

function calcPrice () {
  localProducts.value.totalPrice = localProducts.value.products.reduce(
    (total, product) => total + product.price * product.count,
    0
  )

  localStorage.setItem('product', JSON.stringify(localProducts.value))
}

function addToBasketFunc () {
  if (!userData.value) {
    showToast(
      'warn',
      'هشدار',
      'برای افزودن محصول به سبد خرید باید ابتدا وارد حساب خود شوید'
    )
  } else {
    localProducts.value.products.push({
      id: props.data._id,
      count: count.value,
      price: props.data.price,
      img: props.data.img,
      title: props.data.title
    })

    calcPrice()
  }
}

function removeProductInBasket () {
  localProducts.value.products = localProducts.value.products.filter(
    product => product.id != props.data._id
  )

  calcPrice()
}

function increaseCount () {
  count.value++

  localProducts.value.products[findProductIndex.value].count = count.value

  calcPrice()
}

function decreaseCount () {
  count.value--

  localProducts.value.products[findProductIndex.value].count = count.value

  calcPrice()
}
</script>
