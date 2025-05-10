document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('policyForm')
  const result = document.getElementById('result')
  const bagsField = document.getElementById('bags')
  const weightField = document.getElementById('weight')
  const stopsField = document.getElementById('stops')

  let config = null

  // Fetch iniziale della configurazione
  fetch('data/prezzi.json')
    .then((response) => {
      if (!response.ok) throw new Error('Errore nel fetch dei dati')
      return response.json()
    })
    .then((data) => {
      config = data
    })
    .catch((error) => {
      console.error('Errore nel caricamento della configurazione:', error)
      result.classList.add('active')
      result.textContent =
        'Impossibile calcolare la polizza. Riprova più tardi.'
    })

  // Verifica i campi ogni volta che l'utente cambia il valore

  form.addEventListener('submit', function (e) {
    e.preventDefault()

    // Rimuovi messaggi di errore precedenti
    result.classList.remove('active')
    result.textContent = ''

    // Se la configurazione non è ancora stata caricata
    if (!config) {
      result.classList.add('active')
      result.textContent = 'Dati di calcolo non ancora caricati.'
      return
    }

    const isBagsValid = validateField(bagsField)
    const isWeightValid = validateField(weightField)
    const isStopsValid = validateField(stopsField)

    if (!isBagsValid || !isWeightValid || !isStopsValid) {
      result.classList.add('active')
      result.textContent = 'Compila tutti i campi obbligatori.'
      return
    }

    // Ottieni i valori dai campi
    const bags = parseInt(bagsField.value) || 0
    const weight = parseFloat(weightField.value) || 0
    const stops = parseInt(stopsField.value) || 0
    const extraCoverage = document.getElementById('extraCoverage').checked

    // Calcola il costo
    let cost =
      bags * config.pricePerBag +
      weight * config.pricePerKg +
      stops * config.pricePerStop

    if (extraCoverage) {
      cost *= config.extraCoverageMultiplier
    }

    // Mostra il risultato
    result.classList.add('active')
    result.textContent = `Il costo stimato della tua polizza è di € ${cost.toFixed(
      2
    )}`
  })
})
