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

const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i


createAccountBtn.addEventListener('click', e =>{

  formatingData()

  e.preventDefault()
})

function formatingData(){
  const name = document.getElementById('inputName').value
  const lastName = document.getElementById('inputLastName').value
  let nameFormat = name.replace(/\s/g, '')
  let lastNameFormat = lastName.replace(/\s/g, '')
  console.log(nameFormat)
  console.log(lastNameFormat)
}

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
  })
  