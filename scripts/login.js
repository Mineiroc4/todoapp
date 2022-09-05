/*Pagina de Login:
Ambos os campos devem ser normalizados (ex: retirar espaços desnecessários);
Nenhum dos campos pode ser vazio/nulo;
O email deve ser de um tipo válido (ex: aplicar expressões regulares);
O botão de acesso deve ser habilitado apenas quando todos os campos do formulário estiverem validados corretamente.
*/

// normalizando os dados da página de login de cadastro.
// pegando os elementos.
window.onload = function (){
  let email = document.getElementById('inputEmail')
  let password = document.getElementById('inputPassword')

     email.addEventListener("focus", function(){
        console.log("Campo selicionado")
        function validateEmail(email) {
           const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           return re.test(String(email).toLowerCase());
         }
        if(validateEmail(email)){
           email.style.backgroundColor = 'green'
           email.style.color ='black'
        }else{
           email.style.backgroundColor = 'red'
        }
        
     })

  const accessBtn = document.getElementById('access')
     accessBtn.addEventListener("click",  (e) => {
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
      // validações
      if(emailFormat === ''){
        console.log('o campo nao pode ser nulo')
      }

      e.preventDefault()
     })

    }