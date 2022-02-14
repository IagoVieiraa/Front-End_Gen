let nome = window.document.getElementById("nome")
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width='100%'
email.style.width='100%'
assunto.style.width='100%'

function validaNome(){
     let txtNome = document.querySelector('#txtNome')
    
     if (nome.value.length < 3) {
      txtNome.innerHTML = 'Nome Inválido'
      txtNome.style.backgroundColor = 'red'
      txtNome.style.display = 'block'
    }
    else{
        txtNome.innerHTML='Nome Válido'
        txtNome.style.color='white'
        txtNome.style.display = 'none'
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') ==-1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.backgroundColor = 'red'
        txtEmail.style.display = 'block'
    } else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'white'
        txtEmail.style.display = 'none'
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length > 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.backgroundColor= 'red'
        txtAssunto.style.display = 'block'
    }  else{
        txtAssunto.style.display = 'none'
    }
}