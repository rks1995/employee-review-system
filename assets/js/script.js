{
  let assignBtn = document.querySelectorAll('.dropdown')

  const handleDropdown = (e) => {
    e.preventDefault()
    if (e.target.classList.contains('assign-to')) {
      let list_user_to = document.querySelector('.list-users-to')
      list_user_to.classList.toggle('hide-dropdown')
    } else {
      let list_user_for = document.querySelector('.list-users-for')
      list_user_for.classList.toggle('hide-dropdown')
    }
  }

  assignBtn.forEach((btn) => {
    btn.addEventListener('click', handleDropdown)
  })
}
