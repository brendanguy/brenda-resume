document.getElementById('my-paragraph').innerHTML = 'Thank you for visiting my resume site!';

window.alert('This is a pop up');

function greetUser() {
    let name = document.getElementById('greetingName').value;
    console.log(name);
    document.getElementById('username').innerHTML = name;
    $('#getUserName').modal('hide');
    $('greetUser').modal('hide');
}

$(document).ready(() => {
    $('#greetuser').modal('show');
}

