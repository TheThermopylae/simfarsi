export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()

  let body = await readBody(event)

  try {
    let data = await $fetch(
      `${config.public.API_BASE_URL}/admin/category/${body.categoryId}/subcategory`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: { title: body.title, href: body.href }
      }
    )

    return data
  } catch (error) {
    return error
  }
})
