export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()
  let body = await readBody(event)

  try {
    let data = await $fetch(
      `${config.public.API_BASE_URL}/user/unfollow/${body.id}`,
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
