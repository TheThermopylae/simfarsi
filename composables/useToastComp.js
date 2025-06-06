export default function () {
  let toast = useToast()

  function showToast (...args) {
    let severity = 'success'
    let summary = 'موفقیت آمیز'
    let detail

    if (args.length === 1) {
      detail = args[0]
    } else {
      ;[severity, summary, detail] = args
    }

    toast.add({ severity, summary, detail, life: 5000 })
  }

  return { showToast }
}
