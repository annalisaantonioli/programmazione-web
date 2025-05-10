document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm')
  const inputs = form.querySelectorAll('input, textarea')
  const result = document.getElementById('formMessage')

  function validateField(input) {
    if (input.readOnly || !input.required) return true
    const isValid = input.value.trim() !== ''
    input.classList.toggle('error', !isValid)
    return isValid
  }

  inputs.forEach((input) => {
    input.addEventListener('input', () => validateField(input))
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    result.textContent = ''

    let allValid = true
    inputs.forEach((input) => {
      const isValid = validateField(input)
      if (!isValid) allValid = false
    })

    if (!allValid) {
      result.textContent = 'Compila i campi obbligatori.'
      result.style.color = 'red'
      return
    }

    result.textContent = 'Messaggio inviato con successo!'
    result.style.color = 'green'
    form.reset()
  })
})
