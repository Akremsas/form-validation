var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  let strong = document.querySelector("#error");
  let password = document.querySelector("#userName");
function checkInput(){
     let passValue = document.querySelector("#userName").value;
     if(passValue==='')
     {  
       strong.innerHTML = "Please Fill the form control ";
       console.log(strong);
       error.classList.remove("good");
       error.classList.add("error-message");
    }
     if(strongRegex.test(passValue)){
      strong.innerHTML = "strong password";
      error.classList.add("good");
    }
    if(strongRegex.test(passValue)===false && passValue!==""){
      strong.innerHTML = "weak password";
      error.classList.add("good");
      }
    else{
    error.classList.remove("error");
  }
}

