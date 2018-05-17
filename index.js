const app = {
    init: function(formSelector) {
        this.max = 0
        document.querySelector(formSelector).addEventListener('submit', (ev) => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    },

    handleSubmit: function(ev) {
        const temp = ev.target
        const m = {
            id: ++this.max,
            name: temp.movie.value,
        }
    
        this.renderList
    
        //if(m.toLowerCase().indexOf('infinity war') >= 0)
            //document.getElementById('img').style.display = 'block'
    
        document.getElementById('list').style.display = 'block'
        temp.reset()
    },

    renderList: function(data) {
        const movieList = document.querySelector('#list')
        const list = document.createElement('ul')
        const item = document.createElement('li')
        
        item.textContent = data
        list.appendChild(item)
        movieList.appendChild(list)
    },
}

app.init("#input")