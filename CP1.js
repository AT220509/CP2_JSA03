//Bai 3
localStorage.setItem("user",JSON.stringify());

function register(event) {
    event.preventDefault();
    let userName = document.getElementById("username").value;
    let passWord = document.getElementById("password").value; 
    let user = {
      username: userName,
      password: passWord,
    };
  
    let userList = JSON.parse(localStorage.getItem("userList")) || [];
  
    userList.push(user);
  
    localStorage.setItem("userList", JSON.stringify(userList));
}
function getData(event) {
    event.preventDefault(event);
  
    let userList = JSON.parse(localStorage.getItem("userList")) || [];
}