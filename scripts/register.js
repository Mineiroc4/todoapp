  /* Register Page:Ambos os campos devem ser normalizados (ex: retirar espaços desnecessários);
Nenhum dos campos pode ser vazio/nulo;
O email deve ser de um tipo válido (ex: aplicar expressões regulares);
Os campos “senha” e “repetir senha” devem possuir a mesma informação para serem considerados válidos;
O botão de cadastro deve ser habilitado apenas quando todos os campos do formulário estiverem validados corretamente.
*/


const emailRegister = document.getElementById('inputRegisterEmail')
const passwordRegister = document.getElementById('inputRegisterPassword')
const passwordConfirm = document.getElementById('inputPasswordConfirm')
const createAccountBtn = document.getElementById('createAccountBtn')
const nameRegister = document.getElementById('inputName')
const lastName = document.getElementById('inputLastName')

const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i

const nameRegEx = /^\S$|^\S[ \S]*\S$/


createAccountBtn.addEventListener('click', e =>{

  formatingData()
  
  e.preventDefault()
})

  inputName.addEventListener('keyup', () => {
    if(nameRegister.value.match(nameRegEx)){
      let warning = document.getElementById('nameMessage')
      warning.innerText = 'O campo nome é válido!'
      warning.style.color = 'green'

    }else{
      let warning = document.getElementById('nameMessage')
      warning.innerText = 'Formato inválido!'
      warning.style.color = 'red'
    }
    validityForm()
  })

  inputLastName.addEventListener('keyup', () => {
    if(lastName.value.match(nameRegEx)){
      let warning = document.getElementById('lastNameMessage')
      warning.innerText = 'O campo sobrenome é valido!'
      warning.style.color = 'green'

    }else{
      let warning = document.getElementById('lastNameMessage')
      warning.innerText = 'Formato inválido!'
      warning.style.color = 'red'
    }
    validityForm()
  })
 

  emailRegister.addEventListener('keyup', () => {
    if(emailRegister.value.match(emailRegEx)){

      let warning = document.getElementById('emailRegisterMessage')
      warning.innerText = 'O endereço de e-mail é válido!'
      warning.style.color = 'green'

    }else{
      let warning = document.getElementById('emailRegisterMessage')
      warning.innerText = 'Por favor insira um endereço de e-mail válido'
      warning.style.color = 'red'
    }
    validityForm()
  })

  passwordRegister.addEventListener('keyup', () => {
    if(passwordRegister.value.match(passwordRegEx)){

      let warning = document.getElementById('passwordRegisterMessage')
      warning.innerText = 'À senha é compatível!'
      warning.style.color = 'green'

    }else{
      let warning = document.getElementById('passwordRegisterMessage')
      warning.innerText = 'À senha deve ter no minimo 8 caracteres e pelo menos um caractere maíusculo, um minusculo e um caractere especial.'
      warning.style.color = 'red'
    }
    validityForm()
  })

  passwordConfirm.addEventListener('keyup', () =>{
    if (passwordConfirm.value === passwordRegister.value){
      let warning = document.getElementById('passwordConfirmMessage')
      warning.innerText = 'À senha é compatível!'
      warning.style.color = 'green'
    }else{
      let warning = document.getElementById('passwordConfirmMessage')
      warning.innerText = 'À senha deve ser igual em ambos os campos'
      warning.style.color = 'red'
    }
    validityForm()
  })

function validityForm(){
  if (document.getElementById('inputName').value.match(nameRegEx) &&
   document.getElementById('inputLastName').value.match(nameRegEx) &&
    document.getElementById('inputRegisterEmail').value.match(emailRegEx) &&
     document.getElementById('inputRegisterPassword').value.match(passwordRegEx) &&
      document.getElementById('inputPasswordConfirm').value.match(passwordRegEx)
      ){

      document.querySelector('button').removeAttribute('disabled')
  }else{
    document.querySelector('button').setAttribute('disabled','')
  }
}
  