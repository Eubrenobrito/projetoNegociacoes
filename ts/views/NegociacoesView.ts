//view é um tipo generico, portanto, deve ser tipado aqui tbm
class NegociacoesView extends View <Negociacoes>{
//    programação declarativa, na qual eu pego um dado atraves de um template e gero a manipulação do DOM
//    essa classe que vai ter a apresentação da lista de negociacoes



    template(model:Negociacoes):string{
    //    vai retornar a marcação HTML que quero gerar
        return  `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                <!--expressão-->
                <!--A função map mapeia os elementos de um array para um novo array com o resultado de uma função aplicado a cada elemento.-->
                ${model.paraArray().map(_negociacao =>
                     ` 
                    <tr>
                        <td>${_negociacao.data.getDate()}/${_negociacao.data.getMonth()+1}/${_negociacao.data.getFullYear()}</td>
                        <td>${_negociacao.quantidade}</td>
                        <td>${_negociacao.valor}</td>
                        <td>${_negociacao.volume}</td>
                    <tr>
                    ` 
                ).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>           
        `;


    }

}