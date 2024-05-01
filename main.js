
const number = document.querySelector(".number");
const plus = document.querySelector(".myBtn");
const minus = document.querySelector(".myBtn2");
const wrapper = document.querySelector(".wrapper");
const reset = document.querySelector(".reset");
const addTen = document.querySelector(".addTen");


let son = 0;
number.textContent = son;


plus.addEventListener("click", () => {
    son = son + 1;
    number.textContent = son;
    if (son < 0) {
        son = 0
    }
});

minus.addEventListener("click", () => {


    if (son <= 0) {

        son = 0
    } else {
        son = son - 1
        number.textContent = son;
    }
});

reset.addEventListener("click", function name() {
    son = 0
    number.textContent = son;
})

wrapper.style.display = 'flex';
wrapper.style.justifyContent = 'center';
wrapper.style.marginTop = '300px';
wrapper.style.gap = '30px'
plus.style.width = '100px';
plus.style.backgroundColor = 'green';
plus.style.border = 'none'
minus.style.width = '100px';
minus.style.backgroundColor = 'red'
minus.style.border = 'none'
plus.style.color = 'white'
plus.style.fontSize = '40px'
minus.style.fontSize = '40px'
minus.style.color = 'white'
number.style.fontSize = '20px'
plus.style.cursor = 'pointer'
minus.style.cursor = 'pointer'
reset.style.cursor = 'pointer'
reset.style.borderRadius = '15px'
minus.style.borderRadius = '15px'
plus.style.borderRadius = '15px'
reset.style.border = 'none'
reset.style.color = 'white'
reset.style.backgroundColor = 'grey';
reset.style.width = '100px' 
addTen.style.color = 'black'
addTen.style.backgroundColor = 'yellow'
addTen.style.border = 'none'
addTen.style.cursor = 'pointer'
addTen.style.borderRadius = '15px'
addTen.style.width = '100px'
addTen.style.fontSize = '20px'