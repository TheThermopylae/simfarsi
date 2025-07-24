export default defineEventHandler(async event => {
  let config = useRuntimeConfig()

  let token = getCookie(event, 'token')

  try {
    setCookie(event, 'token', '', {
      httpOnly: true,
      secure: true,
      maxAge: new Date(0),
      path: '/'
    })
  } catch (error) {
    return error
  }
})
