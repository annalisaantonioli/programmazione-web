function validateField(input) {
  if (!input) return false
  const isValid = input.value.trim() !== ''
  input.classList.toggle('error', !isValid)
  return isValid
}

const navOpener = document.querySelector('.navOpener')
const navCloser = document.querySelector('.navCloser')

if (navOpener) {
  const nav = document.querySelector('header nav')
  navOpener.addEventListener('click', () => {
    nav.classList.add('is-open')
  })
  navCloser.addEventListener('click', () => {
    nav.classList.remove('is-open')
  })
}

// Get current page to style li item
const currentPage = window.location.pathname.replace('/', '')
const navItems = document.querySelectorAll('header nav li')
Array.from(navItems).map((item) => {
  const a = item.querySelector('a')
  const splitA = a.href.split('/')
  splitA[splitA.length - 1] === currentPage
    ? item.classList.add('current')
    : item.classList.remove('current')
})
