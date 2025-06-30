export default defineEventHandler(async event => {
  let config = useRuntimeConfig()

  let token = getCookie(event, 'token')

  try {
    let data = await $fetch(`${config.public.API_BASE_URL}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setCookie(event, 'token', '', {
      httpOnly: true,
      secure: true,
      maxAge: new Date  (0),
      path: '/'
    })
    return data
  } catch (error) {
    return error
  }
})
