export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()
  let body = await readBody(event)

  console.log(body)

  try {
    let data = await $fetch(
      `${config.public.API_BASE_URL}/user/post/${body.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: 'DELETE'
      }
    )

    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
})
