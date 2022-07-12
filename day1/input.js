function validateform(){  
   var name=document.myform.name.value;
   var password=document.myform.password.value;

   if(name==null || name==""){
    alert("enter the name");
    return false;
   }
   else if(password=password.length<6){
    alert("Enter the valid password");
    return false;
   }

    }