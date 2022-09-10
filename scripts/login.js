/*Pagina de Login:
Ambos os campos devem ser normalizados (ex: retirar espaços desnecessários);
Nenhum dos campos pode ser vazio/nulo;
O email deve ser de um tipo válido (ex: aplicar expressões regulares);
O botão de acesso deve ser habilitado apenas quando todos os campos do formulário estiverem validados corretamente.
*/

// normalizando os dados da página de login de cadastro.
// pegando os elementos.

const email = document.getElementById('inputEmail').value
const password = document.getElementById('inputPassword').value
const sendBtn = document.getElementById('access')

const emailRegEx =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i

sendBtn.addEventListener('click', e => {
  e.preventDefault()
  ValidityState()
})

inputEmail.addEventListener('keyup', () => {
  if (document.getElementById('inputEmail').value.match(emailRegEx)) {
    let warning = document.getElementById('emailMessage')
    warning.innerText = 'O endereço de email é válido!'
    warning.style.color = 'green'
    return true
  } else {
    let warning = document.getElementById('emailMessage')
    warning.innerText = 'Por favor insira um formato válido de e-mail.'
    warning.style.color = 'red'
    return false
  }
})

inputPassword.addEventListener('keyup', () => {
  if (document.getElementById('inputPassword').value.match(passwordRegEx)) {
    let warning = document.getElementById('passwordMessage')
    warning.innerText = 'A senha utilizada é compatível!'
    warning.style.color = 'green'
    return true
  } else {
    let warning = document.getElementById('passwordMessage')
    warning.innerText =
      'À senha deve ter no minimo 8 caracteres e pelo menos um caractere maíusculo, um minusculo e um caractere especial.'
    warning.style.color = 'red'
    return false
  }
})

function ValidityState() {
  if (inputEmail === 'true' && inputPassword === 'true') {
    document.querySelector('button').setAttribute('disabled', '')
  } else {
    document.querySelector('button').removeAttribute('disabled')
  }
}
