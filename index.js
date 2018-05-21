class App {
    constructor(selectors) {
        this.flicks = []
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)
        this.template = document.querySelector(selectors.templateSelector)
        //Add new movie/show
        document.querySelector(selectors.formSelector).addEventListener('submit', ev => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    }

    renderListItem(flick) {
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
        item.dataset.id = flick.id

        const nameSpan = item.querySelector('.flickName')
        nameSpan.textContent = flick.name
        nameSpan.addEventListener('keypress', this.saveOnEnter.bind(this, item, flick))

        item
            .querySelector('.delete.button')
            .addEventListener('click', this.handleDelete.bind(this, item, flick))

        item
            .querySelector('.favorite.button')
            .addEventListener('click', this.handleFavorite.bind(this, item, flick))

        item
            .querySelector('.edit.button')
            .addEventListener('click', this.handleEdit.bind(this, item, flick))

        return item
    }

    handleSubmit(ev) {
        const f = ev.target
        const flick = {
            id: ++this.max,
            name: f.flickName.value,
            fav: false,
        }
    
        this.flicks.unshift(flick)

        const item = this.renderListItem(flick)
        this.list.insertBefore(item, this.list.firstChild)
    
        f.reset()
    }

    handleDelete(item, flick, _ev) {
        item.remove()

        const i = this.flicks.indexOf(flick)
        this.flicks.splice(i, 1)
    }

    handleFavorite(item, flick, _ev) {
        flick.fav = item.classList.toggle('fav')
    }

    handleEdit(item, flick, ev) {
        const nameField = item.querySelector('.flickName')
        const button = item.querySelector('.edit.button')

        if(nameField.isContentEditable) {
            nameField.contentEditable = false
            button.textContent = 'Edit'
            button.classList.remove('success')

            flick.name = nameField.textContent
        } else {
            nameField.contentEditable = true
            nameField.focus()
            button.textContent = 'Save'
            button.classList.add('success')
        }
    }

    saveOnEnter(item, flick, ev) {
        if(ev.key === "Enter") {
            this.handleEdit(item, flick)
        }
    }
}

const app = new App({
    formSelector: '#flickForm',
    listSelector: '#flickList',
    templateSelector: '.flick.template',
})