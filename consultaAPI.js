// Função para buscar endereço
async function buscarEndereco() {
    //obtém o valor do CEP e remove valores Não numericos
    let cep = document.getElementById('cep').value.replace(/\D/g,'')

    //Verifica se o cep contém exatamente 8 digitos
    if(cep.length !==8){
        alert("CEP Invalido")
    return
    }

    //Try Catch validade de Erros
    try{
        let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        if(!resposta.ok){
            //Trava e gera erro
            throw new Error("Erro na requisição")
        }
        //Converte o que o site traz em JSON
        let endereco = await resposta.json()

        if(endereco.erro){
            //Se Api retornar erro cep não encontrado
            alert("CEP Não Encontrado!, Digite seu endereço")
            document.getElementById('logradouro').value=''
            document.getElementById('bairro').value=''
            document.getElementById('cidade').value=''
            document.getElementById('estado').value=''

            return
        }

        // Preenche os inputs com o valor da API
        document.getElementById('logradouro').value = endereco.logradouro
        document.getElementById('bairro').value = endereco.bairro
        document.getElementById('cidade').value = endereco.localidade
        document.getElementById('estado').value = endereco.uf
    }catch(erro){
        console.error("Erro ao buscar o endereço" ,erro)
        alert("Erro ao buscar o endereço")
    }
}