
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
  