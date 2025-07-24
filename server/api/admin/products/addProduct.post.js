export default defineEventHandler(async event => {
  let token = getCookie(event, 'token')
  let config = useRuntimeConfig()
  let formData = await readMultipartFormData(event)
  const form = new FormData()

  
  
  formData.forEach(item => {
    if (item.type) {
      form.append(
        'img',
        new File([item.data], item.filename, { type: item.type })
      )
    } else {
      form.append(item.name, item.data)
    }
  })
  console.log(form);

  try {
    let backendResponse = await fetch(
      `${config.public.API_BASE_URL}/admin/product`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: form
      }
    )

    const result = await backendResponse.json()
    return result
  } catch (error) {
    return { statusCode: 500, message: 'مشکلی در ارسال به سرور رخ داد.' }
  }
})
