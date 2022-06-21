class NegociacaoController {
//    5 atributos
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView')

    constructor() {
        //os inputs servem para pegar o valor do DOM
        //document.querySelector: Consulta pelo seletor(id)
        this._inputData = $ ('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    //    assim que a página for carregada mostrar template negociaciosView
    //o método update vai ter que receber o modelo pra poder construir o template da tabela
        this._negociacoesView.update(this._negociacoes);
    }

    //  Método adiciona, cria um objeto (new Negociação) que recebe os valores do DOM
    //metodo que recebe o evento
    adiciona(event:Event){
      event.preventDefault();

      const negociacao = new Negociacao(
              new Date(this._inputData.val().replace(/-/g, ',')),
              parseInt(this._inputQuantidade.val()),
              parseFloat(this._inputValor.val(),
      ));

      this._negociacoes.adiciona(negociacao);
      //quero dar um update na view toda vez que eu adicionar uma negociação:
        this._negociacoesView.update(this._negociacoes);
    //    adicionando a msg "negociação exibida com sucesso"
        this.mensagemView.update('Negociação adicionada com sucesso!')
    }

}