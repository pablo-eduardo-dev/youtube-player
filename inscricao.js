import elements from "./elements.js"

export default {
    elements() {
        elements.get.call(this)
        elements.actionsButtons.call(this)
    },
    inscrever() {
        this.inscreverButton.classList.add('on')
        this.inscreverButton.innerText = 'Inscrito'
    },
    removerInscrição() {
        this.boxInscrever.classList.add('on')
    }
}