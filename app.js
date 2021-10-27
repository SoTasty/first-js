const name = "Aldiyar";
let age = 18;
let boo = true;

const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav__link");
const testBtn = document.querySelector('#testBtn');

console.log(navLinks);

function sayHello() {
    let message = "Hello " + name;
    console.log(message);
}

sayHello();

function simpleMath(a, b) {
    let result = a + b;
    return result;
}

let sum = simpleMath(123, 123);

console.log(sum);


window.addEventListener("scroll", function() {
    let scrollPos = window.pageYOffset;

    if(scrollPos > 0) {
        header.classList.add('red')
    } else {
        header.classList.remove('red')
    }

    console.log(scrollPos)
});


testBtn.addEventListener("click", function() {
    console.log('clicked');
});


for(let navItem of navLinks) {
    navItem.addEventListener("click", function() {
        console.log(navItem.text);
    });  
}
