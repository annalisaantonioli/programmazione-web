document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('.accordion-header')

  headers.forEach((header) => {
    header.addEventListener('click', () => {
      const item = header.parentElement
      const isActive = item.classList.contains('active')

      // Chiude tutti
      document
        .querySelectorAll('.accordion-item')
        .forEach((i) => i.classList.remove('active'))

      // Se non era già aperto, lo apre
      if (!isActive) {
        item.classList.add('active')
      }
    })
  })
})
