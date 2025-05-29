<template>
  <header class="py-5 shadow-c fixed w-full z-10 bg-white top-0">
    <div class="container">
      <HeaderTopSection></HeaderTopSection>
      <div class="flex items-end gap-1 px-2">
        <div class="mt-5 relative flex-grow">
          <input
            type="text"
            placeholder="جستجو"
            class="bg-sec w-full p-2 rounded-md placeholder:relative placeholder:right-12 placeholder:text-black"
          />
          <svg
            class="absolute top-1/2 -translate-y-1/2 right-7"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66667 15.5L6.91667 10.25C7.33333 10.5833 7.8125 10.8472 8.35417 11.0417C8.89583 11.2361 9.47222 11.3333 10.0833 11.3333C11.5972 11.3333 12.8785 10.809 13.9271 9.76042C14.9757 8.71181 15.5 7.43056 15.5 5.91667C15.5 4.40278 14.9757 3.12153 13.9271 2.07292C12.8785 1.02431 11.5972 0.5 10.0833 0.5C8.56944 0.5 7.28819 1.02431 6.23958 2.07292C5.19097 3.12153 4.66667 4.40278 4.66667 5.91667C4.66667 6.52778 4.76389 7.10417 4.95833 7.64583C5.15278 8.1875 5.41667 8.66667 5.75 9.08333L0.5 14.3333L1.66667 15.5ZM10.0833 9.66667C9.04167 9.66667 8.15625 9.30208 7.42708 8.57292C6.69792 7.84375 6.33333 6.95833 6.33333 5.91667C6.33333 4.875 6.69792 3.98958 7.42708 3.26042C8.15625 2.53125 9.04167 2.16667 10.0833 2.16667C11.125 2.16667 12.0104 2.53125 12.7396 3.26042C13.4688 3.98958 13.8333 4.875 13.8333 5.91667C13.8333 6.95833 13.4688 7.84375 12.7396 8.57292C12.0104 9.30208 11.125 9.66667 10.0833 9.66667Z"
              fill="#A9A9A9"
            />
          </svg>
        </div>
        <Button class="p-0 w-10 h-10">
          <template #icon>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4297 18V12H8.42969V14H0.429688V16H8.42969V18H10.4297ZM18.4297 16V14H12.4297V16H18.4297ZM14.4297 12V10H18.4297V8H14.4297V6H12.4297V12H14.4297ZM10.4297 10V8H0.429688V10H10.4297ZM6.42969 6V0H4.42969V2H0.429688V4H4.42969V6H6.42969ZM18.4297 4V2H8.42969V4H18.4297Z"
                fill="#E8EAED"
              />
            </svg>
          </template>
        </Button>
      </div>
    </div>
  </header>
</template>
