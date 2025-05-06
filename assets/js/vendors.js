function outputResults(result, text) {
  const output = document.getElementById('output')
  output.textContent = result + ' ' + text
}

function showResults(result) {
  // Se esiste già un overlay, rimuovilo prima
  const existingOverlay = document.getElementById('overlay')
  if (existingOverlay) {
    existingOverlay.remove()
  }

  const overlay = document.createElement('div')
  overlay.id = 'overlay'
  overlay.classList.add('visible')

  const resultsContainer = document.createElement('div')
  resultsContainer.classList.add('result-container')
  resultsContainer.textContent = result

  overlay.appendChild(resultsContainer)
  document.body.appendChild(overlay)

  overlay.addEventListener('click', function () {
    overlay.remove() // rimuove direttamente l'intero overlay
  })
}
