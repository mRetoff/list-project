const form = document.querySelector('#input')

function handleSubmit(ev) {
    ev.preventDefault()
    const m = ev.movie.value

    renderList()
}

function renderList(data) {
    const movieList = document.querySelector('#list')
    const list = document.createElement('ul')

    list.appendChild(data)
    movieList.appendChild(list)
}

form.addEventListener('submit', handleSubmit)