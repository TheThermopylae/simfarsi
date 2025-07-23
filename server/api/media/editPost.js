export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()
  let formData = await readMultipartFormData(event)
  const form = new FormData()

  formData.forEach(item => {
    form.append(item.name, item.data)
  })

  try {
    let backendResponse = await fetch(
      `${config.public.API_BASE_URL}/user/post/${form.get('id')}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: form
      }
    )

    const result = await backendResponse.json()
    return result
  } catch (error) {
    return error
  }
})
