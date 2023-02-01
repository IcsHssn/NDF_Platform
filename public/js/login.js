var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
var username = document.getElementById("inputEmail").value;
var password = document.getElementById("inputPassword").value;
if ( username == "1100000000" && password == "123456") {
    alert ("مرحبا حسن الفيفي");
    window.open ('/home'); // Redirecting to other page.
}
else {
    attempt --;// Decrementing by one.
    alert("اسم المستخدم او كلمة المرور غير صحيحة");
    // Disabling fields after 3 attempts.
}
}