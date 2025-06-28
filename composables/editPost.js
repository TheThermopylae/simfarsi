export default function () {
  async function editPostFunc (body) {
    let data = await $fetch('/api/media/editPost', {
      method: 'POST',
      credentials: 'include',
      body
    })

    console.log(data)
  }

  return { editPostFunc }
}
