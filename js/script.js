'use strict';

console.log('Javascript connection Successful');


// Banner Collapse
const banner = document.getElementById('corona__saftey');
banner.addEventListener('click', function () {
    banner.style.display = "none";
});


// Scroll Up
const scrollUp = document.querySelector('.scrollUp');
scrollUp.addEventListener('click', function() {
    window.scrollTo(0,0)
});


// Nursing waitlist form
var form = document.getElementById("waitList__Form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        form.reset()
        status.classList.add('success');
        status.innerHTML = "Thanks for your submission!";
      }).catch(error => {
        status.classList.add('error');
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)


console.log('Hello World');

