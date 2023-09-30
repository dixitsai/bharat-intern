var ply = document.getElementsByClassName('ply');
function play(){
    alert('Please watch it on Respective OTT Platform!');
}
for (var i = 0;i<ply.length;i++){
    ply[i].addEventListener('click',play);
}
var buttons = document.getElementsByClassName('button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', exec1);
}
function exec1(){
    window.location.href = 'html/login.html';
}

var button = document.getElementById('submit');

button.addEventListener('click', function(event) {
    if (!document.getElementById('email').checkValidity() || !document.getElementById('pass').checkValidity()) {
        event.preventDefault();
        alert('Please fill in all required fields in a proper format!');
    } else {
        window.location.href = '../html/explore.html';
    }
});