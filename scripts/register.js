  /*Ambos os campos devem ser normalizados (ex: retirar espaços desnecessários);
Nenhum dos campos pode ser vazio/nulo;
O email deve ser de um tipo válido (ex: aplicar expressões regulares);
Os campos “senha” e “repetir senha” devem possuir a mesma informação para serem considerados válidos;
O botão de cadastro deve ser habilitado apenas quando todos os campos do formulário estiverem validados corretamente.
*/

  // register page
window.onload = function (){
  // coletando os valores de cada input partindo do click no botão.
const registerBtn = document.getElementById('createAccountBtn')
registerBtn.addEventListener("click", () => {

 const name = document.getElementById('inputName').value
 const lastName = document.getElementById('inputLastName').value
 const emailRegister = document.getElementById('inputRegisterEmail').value
 const passwordRegister = document.getElementById('inputRegisterPassword').value
 const passwordConfirm = document.getElementById('inputPasswordConfirm').value
  //testing
//  console.log(name)
//  console.log(lastName)
//  console.log(emailRegister)
//  console.log(passwordRegister)
//  console.log(passwordConfirm)

  // formatando os dados (removendo os espaços)
  let nameFormat = name.replace(/\s/g, '')
  let lastNameFormat = lastName.replace(/\s/g, '')
  let emailRegisterFormat = emailRegister.replace(/\s/g, '')
  let passwordRegisterFormat = passwordRegister.replace(/\s/g, '')
  let passwordConfirmFormat = passwordConfirm.replace(/\s/g, '')
// testing
 console.log(nameFormat)
 console.log(lastNameFormat)
 console.log(emailRegisterFormat)
 console.log(passwordRegisterFormat)
 console.log(passwordConfirmFormat)

 preventDefault()
})
}