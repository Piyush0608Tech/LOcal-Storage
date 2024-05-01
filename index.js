// update 
function handleFormSubmit(event){
    event.preventDefault();
    const username = event.target.username.value;
      const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    const obj = JSON.stringify({username:username,
                               email:email,
                               phone:phone});
    localStorage.setItem('User Details', obj)
  }
 

/*
    function handleFormSubmit(event) {
    event.preventDefault();
    
  
    const userDetails = {
      'Username': document.getElementById('username').value,
      'Email': document.getElementById('email').value,
      'Phone': document.getElementById('phone').value
    };
  
   
    localStorage.setItem('Username', userDetails.Username);
    localStorage.setItem('Email', userDetails.Email);
    localStorage.setItem('Phone', userDetails.Phone);
    console.log(localStorage.getItem("Username"));
}
  */