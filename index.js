const delB = document.querySelector('.warning')
const favB = document.querySelector('.alert')

const app = {
    init(selectors) {
        this.flicks = []
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)
        this.template = document.querySelector(selectors.templateSelector)
        //Add new movie/show
        document.querySelector(selectors.formSelector).addEventListener('submit', ev => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    },

    renderListItem(flick) {
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
        item.dataset.id = flick.id
        item.querySelector('.flickName').textContent = flick.name
        return item
    },

    handleSubmit(ev) {
        const f = ev.target
        const flick = {
            id: ++this.max,
            name: f.flickName.value,
        }
    
        this.flicks.unshift(flick)

        const item = this.renderListItem(flick)
        this.list.insertBefore(item, this.list.firstChild)
    
        f.reset()
    },

    handleDelete() {
        const flick = document.getElementById(id)
        this.list.removeChild(flick)
    },

    handleFavorite() {

    },
}

app.init({
    formSelector: '#flickForm',
    listSelector: '#flickList',
    templateSelector: '.flick.template',
})

delB.addEventListener('click', app.handleDelete)
favB.addEventListener('click', app.handleFavorite)