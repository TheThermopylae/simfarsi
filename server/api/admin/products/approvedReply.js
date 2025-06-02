export default defineEventHandler(async event => {
  let body = await readBody(event)
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()

  try {
    let data = await $fetch(
      `${config.public.API_BASE_URL}/admin/product/${body.productId}/comment/${body.commentId}/reply/${body.replyId}/approve`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: 'PATCH'
      }
    )

    return data
  } catch (error) {
    return error
  }
})
