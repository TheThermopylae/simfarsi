export default defineEventHandler(async event => {
  let body = await readBody(event)
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()  

  try {
    let data = await $fetch(
      `${config.public.API_BASE_URL}/admin/category/${body.categoryId}/subcategory/delete/${body.subcategoryId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: 'DELETE'
      }
    )

    return data
  } catch (error) {
    return error
  }
})
