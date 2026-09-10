//Selecionar os elementos

const formulario = document.querySelector("#form-contato");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const statusFormulario = document.querySelector("#status-formulario");

const erroNome = document.querySelector("#erro-nome");
const erroEmail = document.querySelector("#erro-email");
const erroAssunto = document.querySelector("#erro-assunto");
const erroMensagem = document.querySelector("#erro-mensagem");

//Verificar se o formulario existe

if(!formulario){
    console.log("Formulario não encontrado")
}

//Limpar os erros
function limparErros(){
    erroNome.textContent='';
    erroEmail.textContent=''; 
    erroAssunto.textContent='';
    erroMensagem.textContent='';

    nome.classList.remove("erro");
    email.classList.remove("erro");
    assunto.classList.remove("erro");
    mensagem.classList.remove("erro");

    nome.removeAttribute("aria-invalid");
    email.removeAttribute("aria-invalid");
    assunto.removeAttribute("aria-invalid");
    mensagem.removeAttribute("aria-invalid");
    
    statusFormulario.textContent = '';
    statusFormulario.classList.remove('sucesso','erro');

}

//marcar um campo invalido
function marcarErro(campo,elementoErro, texto){
    elementoErro.textContent = texto;
    camnpo.classList.add = ('erro');
    campo.setAttibute('aria-invalid', 'true');
}

//Validar no submit
formulario.addEventListener(
    'submit', function(evento){
        evento.preventDefault();
        limparErros();

        let formularioValido = true;

        if(nome.value.trim() === ''){
            marcarErro(nome,erroNome,'Informe seu nome.')
            formularioValido = false;
        }
        formularioValido = false;

        if(email.value.trim() === ''){
            marcarErro(email,erroEmail,'Informe seu email.')
            formularioValido = false;
        }
        if(assunto.value.trim() === ''){
            marcarErro(assunto,erroAssunto,'Informe o assunto.')
            formularioValido = false;
        }
        if(mensagem.value.trim() === ''){
            marcarErro(mensagem,erroMensagem,'Informe uma mensagem.')
            formularioValido = false;
        }
        if(!formularioValido){
            statusFormulario.textContent='Revise os campos destacados';
            statusFormulario.classList.add('erro');
            return;
        }

        statusFormulario.textContent='Mensagem valida com sucesso!';
        statusFormulario.classList.add('sucesso');

        formulario.reset();

    }
    
)