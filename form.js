var userName = document.getElementsById("userName");
var gamil = document.getElementsById("gmail");
var password = document.getElementsById("password");
var password2 = document.getElementsById("password2");
var form = document.getElementById("form")

form.addEventListener( 'submit', function (e){
    e.preventDefault();
    if (userName.value === ''){
        alert('enter user name')

    }
})
