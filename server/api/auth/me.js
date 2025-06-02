export default defineEventHandler(async event => {
  let config = useRuntimeConfig()

  let token = getCookie(event, 'token')
  console.log(token);
  
  try {
    let data = await $fetch(`http://localhost:4000/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (error) {
    return error
  }
})
