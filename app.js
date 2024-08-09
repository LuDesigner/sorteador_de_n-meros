let name = prompt("Seja bem vindo, qual é o seu nome?");

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Bloquear valores maiores do que permitidos nos campos //
     if (de >= ate) {
         alert(`${name} o campo "Do número" deve ser inferior ao campo "Até o número". Verifique por favor!`);
         return;
       }

    if (quantidade > (ate - de + 1)) {
        alert(`${name} o campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!`);
        return;
      }


    let sorteados = [];
    let numero;
    let quantMax = 8;

// Código para definir a quantidade máxima do campor quantidade //
    if (quantidade > quantMax) {
        alert(`Campo "Quantidade" deve ser menor ou igual a ${quantMax}. Verifique!`);
        return;
      }

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
            // alert('Tentando obter número inédito');
        }
            
        sorteados.push(numero);

    }

    // let numero = obterNumeroAleatorio(de, ate);
    // alert(numero);

    // alert(`Quantidade: ${quantidade}`);
    // alert(`Do número: ${de}`);
    // alert(`Até o número: ${ate}`);
    // alert(sorteados);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo"> ${sorteados} foram os números sorteados</label>`;
    alterarStatusBotao();

}

 function obterNumeroAleatorio(min, max){
     return Math.floor(Math.random() * (max - min +1)) + min;
}

// alterar botão Status reiniciar:
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    let botaoSortear = document.getElementById('btn-sortear');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');

        var input = document.querySelector("#quantidade");
        input.disabled = true;

        var input = document.querySelector("#de");
        input.disabled = true;

        var input = document.querySelector("#ate");
        input.disabled = true;

        // botaoSortear.setAttribute("disabled", "true");
        // document.getElementById('btn-sortear').removeAttribute("onclick");

    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');

        var input = document.querySelector("#quantidade");
        input.disabled = false;

        var input = document.querySelector("#de");
        input.disabled = false;

        var input = document.querySelector("#ate");
        input.disabled = false;

    }
}

function reiniciar(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    //somente reinicia se o botão de reiniciar estiver habilitado:
    if (botaoReiniciar.classList.contains('container__botao')) {
document.getElementById('quantidade').value = '';
document.getElementById('de').value = '';
document.getElementById('ate').value = '';
document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Nenhum número sorteado até agora.</label>';

alterarStatusBotao();
    }
}