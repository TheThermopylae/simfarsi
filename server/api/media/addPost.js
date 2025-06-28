export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()
  let formData = await readMultipartFormData(event)
  const form = new FormData()

  formData.forEach(item => {
    if (item.type) {
      if (item.type.includes('video')) {
        form.append(
          'video',
          new File([item.data], item.filename, { type: item.type })
        )
      } else {
        form.append(
          'img',
          new File([item.data], item.filename, { type: item.type })
        )
      }
    } else {
      form.append(item.name, item.data)
    }
  })

  try {
    let backendResponse = await fetch(
      `${config.public.API_BASE_URL}/user/addPost`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: form
      }
    )

    console.log(form);
    

    const result = await backendResponse.json()
    return result
  } catch (error) {
    return error
  }
})
