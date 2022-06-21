//classe com tipo generico. o tipo <T> é o que quero considerar como modelo

class MensagemView extends View <string> {

    template(mensagem:string): string {
        return `<p class="alert alert-info">${mensagem}</p>`
    }
}