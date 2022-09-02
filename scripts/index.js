// normalizando os dados da página de login de cadastro.

// pegando os elementos.
window.onload = function (){

const accessBtn = document.getElementById('access')
   accessBtn.addEventListener("click",  () => {
    
    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value
    
    console.log(email)
    console.log(password)

    function normalizaData(){ 
      let newData = {
        email: email.value,
        password: password.value
      }

    }
    console.log(normalizaData)
   })
  }