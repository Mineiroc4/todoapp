/*Pagina de Login:
Ambos os campos devem ser normalizados (ex: retirar espaços desnecessários);
Nenhum dos campos pode ser vazio/nulo;
O email deve ser de um tipo válido (ex: aplicar expressões regulares);
O botão de acesso deve ser habilitado apenas quando todos os campos do formulário estiverem validados corretamente.
*/

// normalizando os dados da página de login de cadastro.
// pegando os elementos.
window.onload = function (){

  const accessBtn = document.getElementById('access')
     accessBtn.addEventListener("click",  (e) => {
      
      // login page
      const email = document.getElementById('inputEmail').value
      const password = document.getElementById('inputPassword').value
      // testing
      // console.log(email)
      // console.log(password)
      
      // formatando os dados (removendo espaços)
      let emailFormat = email.replace(/\s/g, '')
      let passwordFormat = password.replace(/\s/g, '')
      // testing
      console.log(emailFormat)
      console.log(passwordFormat)
      if(emailFormat === ''){
        console.log('o campo nao pode ser nulo')
      }

      e.preventDefault()
     })
    }