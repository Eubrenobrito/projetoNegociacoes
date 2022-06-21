class NegociacoesView extends View {
    template(model) {
        return `
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
                ${model.paraArray().map(_negociacao => ` 
                    <tr>
                        <td>${_negociacao.data.getDate()}/${_negociacao.data.getMonth() + 1}/${_negociacao.data.getFullYear()}</td>
                        <td>${_negociacao.quantidade}</td>
                        <td>${_negociacao.valor}</td>
                        <td>${_negociacao.volume}</td>
                    <tr>
                    `).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>           
        `;
    }
}
