let clickonme = document.querySelector('button');
clickonme.addEventListener('click', inputmsg);

function inputmsg() {
    let name = prompt("Enter the name")
    clickonme.textContent = name
}


// trim() method

let firstname = "    shubham  ";
let age = 21;
console.log(firstname);
console.log(firstname.length);
firstname = firstname.trim();
console.log(firstname);
console.log(firstname.length);


// typeof() method
console.log(typeof firstname);

console.log(age);
console.log(typeof age);