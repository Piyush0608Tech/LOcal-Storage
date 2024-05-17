const form = document.getElementById('myform');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const userDetails = {
        username,
        email,
        phone
    };
    const userDetailsJSON = JSON.stringify(userDetails);
    localStorage.setItem(email, userDetailsJSON);
    alert('User details submitted successfully!');
    show(userDetails)
});

function show(userDetails){
    const cre = document.getElementById("userList");
    const list = document.createElement("li");
    list.textContent = userDetails.username+' _ '+userDetails.email+' _ '+userDetails.phone;
    const del = document.createElement("button");
    del.textContent="delete";
    del.onclick = () =>{
        localStorage.removeItem(userDetails.email);
        cre.removeChild(list);
    }
    const edit = document.createElement("button");
    edit.textContent="edit";
    edit.onclick = () =>{
        localStorage.removeItem(userDetails.email);
        cre.removeChild(list);
        document.getElementById("username").value=userDetails.username;
        document.getElementById("email").value=userDetails.email;
        document.getElementById("phone").value=userDetails.phone;
    }
    list.appendChild(del);
    list.appendChild(edit);
    cre.appendChild(list);
}