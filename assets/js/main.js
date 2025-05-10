function validateField(input) {
  if (!input) return false
  const isValid = input.value.trim() !== ''
  input.classList.toggle('error', !isValid)
  return isValid
}
