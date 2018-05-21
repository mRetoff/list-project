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
        //Delete
        document.querySelector(selectors.deleteSelector).addEventListener('click', ev => {
            ev.preventDefault()
            this.handleDelete(ev)
        })
        //Favorite
        document.querySelector(selectors.favoriteSelector).addEventListener('click', ev => {
            ev.preventDefault()
            this.handleFavorite(ev)
        })
    },

    renderListItem(flick) {
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
        item.dataset.id = flick.id
        item
            .querySelector('.flickName')
            .textContent = flick.name

        item
            .querySelector('.delete.button')
            .addEventListener('click', this.handleDelete.bind(this, item, flick))

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

    handleDelete(item, flick, ev) {
        item.remove()

        const i = this.flicks.indexOf(flick)
        this.flicks.splice(i, 1)
    },

    handleFavorite(ev) {

    },
}

app.init({
    formSelector: '#flickForm',
    listSelector: '#flickList',
    templateSelector: '.flick.template',
    deleteSelector: ".delete",
    favoriteSelector: ".favorite",
})