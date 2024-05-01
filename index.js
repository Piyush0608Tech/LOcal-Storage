function handleFormSubmit(event){
    event.preventDefault()
    const username = event.target.username.value
      const email = event.target.email.value
    const phone = event.target.phone.value
     
   const obj = { username: username, email: email, phone: phone }
    const modifiedObj = JSON.stringify(obj) 
     localStorage.setItem(email, modifiedObj)
     
   displayUsers()
  }
  module.exports = handleFormSubmit
  
  function displayUsers() {
    const userList = document.getElementById("userlist")
    userList.innerHTML = ""
  
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      const userData = JSON.parse(localStorage.getItem(key))
  
   
      const listItem = document.createElement("li")
      listItem.textContent = `${userData.username} - ${userData.email} - ${userData.phone}`
      
      const deleteButton = document.createElement("button")
      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => {
        localStorage.removeItem(key); 
        displayUsers()
      }
  
      listItem.appendChild(deleteButton)
        userList.appendChild(listItem) 
    }
  }
/* scale
function handleFormSubmit(event) {
    event.preventDefault();
  
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    //Showing the list of user details on screen
    const newLi = document.createElement('li');
    newLi.innerHTML = username + ' - ' + email + ' - ' + phone;
    const userList = document.querySelector('#userList');
    userList.appendChild(newLi);
  
    //Best way to store details in local storage is using objects.
    const obj = { username: username, email: email, phone: phone };
    const modifiedObj = JSON.stringify(obj); //Coverting to JSON objects
    localStorage.setItem(email, modifiedObj);
  }



/*update 
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