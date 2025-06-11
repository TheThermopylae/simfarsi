export default defineEventHandler(async event => {
  let body = await readBody(event)

  try {
    let data = await $fetch('http://localhost:4000/auth/otp', {
      method: 'POST',
      body
    })

    setCookie(event, 'token', data.data, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
      path: '/'
    })

    let user = await $fetch('http://localhost:4000/user/profile', {
      headers: {
        Authorization: `Bearer ${data.data}`
      }
    })

    return user
  } catch (err) {
    return err
  }
})
