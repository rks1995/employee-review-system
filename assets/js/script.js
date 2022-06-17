{
  let tabButton = document.querySelectorAll('.tab-btn')

  const handleActiveBtn = (e) => {
    e.preventDefault()
    let element = document.querySelector('.active-tab')
    if (element === e.target) return
    element.classList.remove('active-tab')
    e.target.classList.add('active-tab')
  }

  tabButton.forEach((btn) => {
    btn.addEventListener('click', handleActiveBtn)
  })
}
