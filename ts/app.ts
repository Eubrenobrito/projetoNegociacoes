const controller = new NegociacaoController();
$('.form').submit( controller.adiciona.bind(controller));
//passando o método adiciona do controlle diretamente para o document
//o bind serve para manter a associação do this do controller