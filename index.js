const form = document.querySelector('#input')
let movies = new Array()

function handleSubmit(ev) {
    ev.preventDefault()
    const temp = ev.target
    const m = temp.movie.value

    renderList(m)
    movies.push(m)

    if(m.toLowerCase().indexOf('infinity war') >= 0)
        document.getElementById('img').style.display = 'block'

    document.getElementById('list').style.display = 'block'
    temp.reset()
}

function renderList(data) {
    const movieList = document.querySelector('#list')
    const list = document.createElement('ul')
    const item = document.createElement('li')

    item.textContent = data
    list.appendChild(item)
    movieList.appendChild(list)
}

form.addEventListener('submit', handleSubmit)