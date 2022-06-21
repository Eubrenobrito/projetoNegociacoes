class View {
    constructor(seletor) {
        this.element = $(seletor);
    }
    update(mensagem) {
        this.element.html(this.template(mensagem));
    }
}
