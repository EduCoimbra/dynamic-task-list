const form = document.querySelector('form');
const emailInput = document.getElementById('email-field');
const messageBack = document.getElementById('f-fback-msg');

addEventListener('submit', function(event){
    event.preventDefault();

    if(emailInput.value === "") {
        messageBack.textContent = "Please enter an email";
        messageBack.style.color = "red";

    } else{
        messageBack.textContent = "Success! You are subscribed.";
        messageBack.style.color = "green";
    }
})
