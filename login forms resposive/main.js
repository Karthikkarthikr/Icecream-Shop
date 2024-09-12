
function btn(){
  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;
  if(name == 'karthik12022004@gmail.com' && password == '1234')
  {
    alert("successfull Login!")
    window.location.assign("/home page/index.html")
  }
  else{
    alert("Wrong entry invalid")
  }
}


form.addEventListener('submit',(e)=>
{
   if(name.value === '' || name.value == null)
   {
     e.preventDefault();
     name_error.innerHTML = "*UserName is required";
   }
   else{
    name_error.innerHTML ="";
   }
   if(password.value === '' || password.value == null)
    {
      e.preventDefault();
      password_error.innerHTML = "*Password is required";
    }
    else{
      password_error.innerHTML ="";
     }
})




// function btn(){
//   if(name.value == '' && password.value == '')
//   {
//     alert('Invalid! Please Login the form');
//   }
//   else if(name.value == 'karthik' && password.value == 'karthik'){
//     alert('Login Sucessfully');
//   }
//   else{
//     alert('Invalid! Please Login the form');
//   }
// }