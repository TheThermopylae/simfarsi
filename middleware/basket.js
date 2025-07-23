export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const localProducts = JSON.parse(localStorage.getItem('product')) || {
      totalPrice: 0,
      products: []
    }

    if (localProducts.products.length === 0) {
      return navigateTo('/basket')
    }
  }
})
