{
  let assignBtn = document.querySelectorAll('.dropdown')
  let assignListName = document.querySelectorAll('.list-name')

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

  const handleAssignName = (e) => {
    const name = e.target.innerText
    if (e.target.classList.contains('left_name')) {
      $('#left-para').text(name)
      let list_user_to = document.querySelector('.list-users-to')
      list_user_to.classList.toggle('hide-dropdown')
    } else {
      $('#right-para').text(name)
      let list_user_for = document.querySelector('.list-users-for')
      list_user_for.classList.toggle('hide-dropdown')
    }
  }

  assignBtn.forEach((btn) => {
    btn.addEventListener('click', handleDropdown)
  })

  assignListName.forEach((list) => {
    list.addEventListener('click', handleAssignName)
  })
}
