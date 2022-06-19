{
  let assignBtn = document.querySelectorAll('.dropdown')
  let assignListName = document.querySelectorAll('.list-name')
  let submitBtn = document.querySelector('.assign-btn')
  // this function handles dropdown toggle present in assign tab
  const toggleDropdown = (className) => {
    let list_user_toggle = document.querySelector(className)
    list_user_toggle.classList.toggle('hide-dropdown')
  }

  const handleDropdown = (e) => {
    e.preventDefault()
    if (e.target.classList.contains('assign-to')) {
      toggleDropdown('.list-users-to')
    } else {
      toggleDropdown('.list-users-for')
    }
  }

  // this function handles selecting person for assigning task
  const handleAssignName = (e) => {
    const name = e.target.innerText
    if (e.target.classList.contains('left_name')) {
      $('#left-para').text(name)
      toggleDropdown('.list-users-to')
    } else {
      $('#right-para').text(name)
      toggleDropdown('.list-users-for')
    }
  }

  // passing information to nodeserver
  const handleSubmit = () => {
    let text_left = $('#left-para').text().split('|')
    let right_text = $('#right-para').text().split('|')

    let leftEmail = text_left[1].trim('')
    let rightEmail = right_text[1].trim('')

    $.ajax({
      method: 'post',
      url: '/user/assign',
      data: { leftEmail, rightEmail },
      success: function (res) {
        console.log('success', res.data)
        $('#message').text(res.data)
        $('#message').css({
          display: 'block',
          'background-color': '#36AE7C',
          color: '#B6FFCE',
        })
        setTimeout(() => {
          $('#message').css('display', 'none')
        }, 2000)
      },
      error: function (err) {
        let errText = err.responseJSON.data
        $('#message').text(errText)
        $('#message').css({
          display: 'block',
          'background-color': '#B25068',
          color: '#fff',
        })
        setTimeout(() => {
          $('#message').css('display', 'none')
        }, 2000)
      },
    })
  }

  assignBtn.forEach((btn) => {
    btn.addEventListener('click', handleDropdown)
  })

  assignListName.forEach((list) => {
    list.addEventListener('click', handleAssignName)
  })

  submitBtn.addEventListener('click', handleSubmit)
}
