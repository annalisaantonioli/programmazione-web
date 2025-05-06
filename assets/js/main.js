const backdropElement = document.getElementById('backdrop')
const modalLinkElements = document.querySelectorAll('[data-content]')
let infoModal

function toggleBackdrop() {
  backdropElement.classList.toggle('visible')
}

function presentInfoModal(event) {
  const text = event.target.dataset.content
  toggleBackdrop()
  infoModal = document.createElement('div')
  infoModal.classList.add('modal')
  infoModal.innerHTML = `<p>${text}</p>`
  const closeButton = document.createElement('button')
  closeButton.addEventListener('click', hideInfoModal)
  closeButton.textContent = 'Okay'
  infoModal.appendChild(closeButton)
  document.body.appendChild(infoModal)
}

function hideInfoModal() {
  toggleBackdrop()
  document.body.removeChild(infoModal)
}

for (const linkElement of modalLinkElements) {
  linkElement.addEventListener('click', presentInfoModal)
}

backdropElement.addEventListener('click', hideInfoModal)
