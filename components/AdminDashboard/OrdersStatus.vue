<template>
  <section class="my-8">
    <h2 class="mb-5 text-xl">وضعیت سفارش ها</h2>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
      <div
        class="rounded-2xl py-3 px-4 bg-white flex justify-between items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="2">
            <rect width="14" height="17" x="5" y="4" rx="2" />
            <path stroke-linecap="round" d="M9 9h6m-6 4h6m-6 4h4" />
          </g>
        </svg>
        تعداد سفارشات : {{ props.orders.length }}
      </div>
      <div
        class="rounded-2xl py-3 px-4 bg-white flex justify-between items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"
          />
        </svg>
        سفارشات تحویل شده : {{ completeOrder.length }}
      </div>
      <div
        class="rounded-2xl py-3 px-4 bg-white flex justify-between items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1"
            />
          </g>
        </svg>
        سفارشات در انتظار : {{ unCompleteOrder.length }}
      </div>
    </div>
  </section>
</template>

<script setup>
let props = defineProps(['orders'])

let completeOrder = computed(() =>
  props.orders.filter(order => order.statusorder == 'true')
)

let unCompleteOrder = computed(() =>
  props.orders.filter(order => order.statusorder != 'true')
)
</script>