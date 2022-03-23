let darkMode = localStorage.getItem('darkMode')

const toggleBtn = document.querySelector('.toggle-mode')
const body = document.querySelector('.body')
const header = document.querySelector('.nav-bar')
const home = document.getElementById('home')
const about = document.getElementById('about')
const contact = document.getElementById('contact')
const waves = document.querySelector('.footer-waves')

function enableDarkMode() {
  toggleBtn.innerHTML = `<i class="fa-solid fa-circle-half-stroke"></i>Dark`
  toggleBtn.classList.add('dark')
  body.classList.add('dark')
  header.classList.add('dark')
  home.classList.add('dark')
  about.classList.add('dark')
  contact.classList.add('dark')
  waves.classList.add('dark')
  waves.innerHTML = `<div>
    <svg
      class="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(255,255,255,0.3)"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(255,255,255,0.4)"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(255,255,255,0.2)"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="7"
          fill="rgba(255,255,255,0.3)"
        />
      </g>
    </svg>
  </div>`
}

function disableDarkMode() {
  toggleBtn.innerHTML = `<i class="fa-solid fa-circle-half-stroke"></i>Light`
  toggleBtn.classList.remove('dark')
  body.classList.remove('dark')
  header.classList.remove('dark')
  home.classList.remove('dark')
  about.classList.remove('dark')
  contact.classList.remove('dark')
  waves.classList.remove('dark')
  waves.innerHTML = `<div>
    <svg
      class="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(0,0,0,0.3)"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(0,0,0,0.4)"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(0,0,0,0.2)"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="7"
          fill="rgba(0,0,0,0.3)"
        />
      </g>
    </svg>
  </div>`
}

function handleTheme() {
  darkMode = localStorage.getItem('darkMode')

  if (darkMode === 'enabled') {
    disableDarkMode()
    localStorage.setItem('darkMode', null)
  } else {
    enableDarkMode()
    localStorage.setItem('darkMode', 'enabled')
  }
}

if (darkMode === 'enabled') {
  enableDarkMode()
}

toggleBtn.addEventListener('click', handleTheme)
