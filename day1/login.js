function validlogin(){
    var name=document.loginform.username.value;
    var password=document.loginform.password.value;

    if(name==null||name==""){
      alert("Can't valid null value");
      return false;    
    }
    else if(password.legth<6||password==""){
        alert("Incorrect or Null Password");
        return false;
    }

}