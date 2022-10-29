let clientes = [{
    Nome: `Admin`,
    CPF: `000.000.000-00`,
    Celular: `(00)00000-0000`,
    Senha: `12345`,
    ConfSenha: `12345`, //não deveria ter este atributo
    Saldo: 0,
    ID: 1000
}];

function validacao(cadastro) {
    let controle = ``;
    if(cadastro.Senha===cadastro.ConfSenha){ 
        let chaves = Object.keys(cadastro)
        for (let contClientes = 0; contClientes < clientes.length; contClientes++) {
            for (let cont = 0; cont <= 2; cont++) {// 2 numero de atributos do objeto
                cadastro[chaves[cont]] == clientes[contClientes][chaves[cont]] ?
                controle += `${chaves[cont]} Indisponível\n` : "";
            }
        }
    }else{
        controle = `Favor confirmar Senha`
    }

    if(controle){
        alert(controle)
    }else{
        cadastro.ID = Math.floor(1000 + Math.random()*10000)//arrumar cadastro
        clientes.push(cadastro)
        let inputs = document.getElementsByTagName("input")
        alert(`Cadastro realizado com Sucesso\nSeu ID: ${cadastro.ID}`)
        for(let cont=0;cont<inputs.length;cont++){
            inputs[cont].value = null
        }
    }
}

    //for(let contClientes=0;contClientes<=clientes.length;contClientes++){
    //cadastro.key == clientes[cont].key?
    //controle += `Nome indisponível `:"";
    //cadastro.CPF == clientes[cont.CPF]?
    //controle += `CPF indisponível `:"";
    //cadastro.senha===cadastro.confSenha
    //}

function cadastrar(evento) {
    evento.preventDefault()
    const cadastro = {
        Nome: document.getElementById(`nome`).value,
        CPF: document.getElementById(`cpf`).value,
        Celular: document.getElementById(`celular`).value,
        Senha: document.getElementById(`senha`).value,
        ConfSenha: document.getElementById(`confSenha`).value,
        ID: 0,
        Saldo: 0,
    }
    validacao(cadastro)
}

document.getElementById("cadastro").addEventListener("submit", cadastrar)
