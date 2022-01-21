const form = document.querySelector('.form');
const send = document.getElementById('submit');

send.addEventListener('click', (e) =>{
    e.preventDefault();
    form.style.display = "none";
})