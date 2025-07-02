<template>
  <div class="container">
    <h1 class="text-xs">سبد خرید شما</h1>
    <section class="mt-5" v-if="localProducts.products.length > 0">
      <div>
        <BasketItemCard
          v-for="item in localProducts.products"
          :key="item.id"
          :item="item"
          @increase="increaseCount"
          @decrease="decreaseCount"
          @remove="removeProduct"
        />
      </div>
      <p class="text-xs">
        قیمت نهایی :
        <span class="font-peydaB"
          >{{ localProducts.totalPrice.toLocaleString() }} تومان</span
        >
      </p>
      <NuxtLink
        to="/basket/checkout"
        class="primary block w-full text-center p-2 mt-3 rounded-md"
        >ادامه</NuxtLink
      >
    </section>
    <p v-else class="text-center mt-3 text-xs">محصولی در سبد خرید خود ندارید</p>
  </div>
</template>

<script setup>
useHead({
  title: '| سبد خرید'
})

let localProducts = ref(
  JSON.parse(localStorage.getItem('product')) || {
    totalPrice: 0,
    products: []
  }
)

function saveToLocalStorage () {
  localStorage.setItem('product', JSON.stringify(localProducts.value))
}

function calcTotalPrice () {
  localProducts.value.totalPrice = localProducts.value.products.reduce(
    (total, product) => total + product.price * product.count,
    0
  )
  saveToLocalStorage()
}

function increaseCount (id) {
  const product = localProducts.value.products.find(p => p.id === id)
  if (product) {
    product.count++
    calcTotalPrice()
  }
}

function decreaseCount (id) {
  const product = localProducts.value.products.find(p => p.id === id)
  if (product) {
    if (product.count > 1) {
      product.count--
    } else {
      removeProduct(id)
      return
    }
    calcTotalPrice()
  }
}

function removeProduct (id) {
  localProducts.value.products = localProducts.value.products.filter(
    p => p.id !== id
  )
  calcTotalPrice()
}
</script>
