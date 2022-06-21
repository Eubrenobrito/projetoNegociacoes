class Negociacoes{
    private _negociacoes: Negociacao[] = [];
    // private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void{
        //se o método nao devolve nada, por void
        //metodo push irá adiciona a negociacao no final do array
        this._negociacoes.push(negociacao);
    }

//    método paraArray() que vai me dar os dados como array
//teoria de conjuntos
    paraArray():Negociacao[]{
        return [].concat(this._negociacoes);
    //    retornará um array do tipo any com os dados de negociacao
    }

}

//metodos sempre no infinitivo