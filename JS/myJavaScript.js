document.getElementById('my-paragraph').innerHTML = 'Thank you for visiting my resume site!';

function greetUser() {
    let name = document.getElementById('greetingName').value;
    console.log(name);
    document.getElementById('username').innerHTML = name;
    $('#getUserName').modal('hide');
    $('greetUser').modal('hide');
}

$(document).ready(() => {
    $('#greetuser').modal('show');
});

function greetings () {
    let user = window.prompt('Please enter your name:');
    window.alert('Hi! $(user)! Thank you for reviewing my resume site.');
}

function getTimeOfDay() {
    let now = new Date();
    let hour = now.getHours();
    return hour;
}

function customizeGreeting() {
    let hour = getTimeOfDay();
    let message = 'Hello;'
    if (hour >= 5 && hour < 12) {
        message = 'Good Morning';
    else if (hour >= 12 && hour < 18) {
        message = 'Good Afternoon';
    else if (hour >= 18) {
        message = 'Good Evening';
    }
}

function displayGreetingMessage(message);
}

function displayGreetingMessage(message) {
    document.getElementById('message').innerHTML = message;
}
}