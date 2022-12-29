let clickonme = document.querySelector('button');
clickonme.addEventListener('click', inputmsg);

function inputmsg() {
    let name = prompt("Enter the name")
    clickonme.textContent = name
}