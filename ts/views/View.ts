//classe com tipo generico. o tipo <T> é o que quero considerar como modelo
abstract class View<T>{

    //modificador protected apenas os metodos da propria classe podem acessar a propriedades e os elementos filhos
    protected element: JQuery;

    constructor(seletor: string) {
        this.element = $ (seletor);
        //querySelector vai receber o elemento do DOM que ele vai buscar
    }

    //fazer a renderização do elemento
    update(mensagem:T){
        //O innerHTML adiciona um conteúdo dentro do elemento <p>
        this.element.html(this.template(mensagem));

    }

    //    Uma classe abstrata é uma classe que serve de modelo para outras classes. Ela sempre será uma superclasse
//    genérica, e suas subclasses serão mais específicas. Além disso, ela não pode ser instanciada e pode conter
//    ou não métodos abstratos, podendo ser implementados nas classes descendentes.
    abstract template(mensagem:T):string;
}