let screen = document.querySelector(".display_input");
let output = document.querySelector(".result");
let backbtn = document.querySelector(".backbtn");
let science = document.querySelector(".scientific");
let calculator = document.querySelector(".calculator");
let a;
/* et screen2 = document.querySelector(".kio"); */
/* et result2 = document.querySelector(".hifi") */
/* unction display1(hun){ */
 /*    screen2.value+=hun+","; */

//let d = {x:"8",'÷' :"/" };
function display(num){
    screen.value+=num;
    a = screen.value.replace('x','*').replace('÷','/').replace('√','**0.5').replace('π','*3.14');
    output.textContent = eval(a);
};
function evaluate1(){
    screen.value = output.textContent;
    output.textContent = "";
};
function del(){
    screen.value = screen.value.slice(0,-1);
    output.textContent = eval(screen.value);
};
function allclear(){
    screen.value = "";
    output.textContent = "";
}
backbtn.addEventListener("click", ()=> {
    science.classList.toggle("active");
    calculator.classList.toggle("octive");
});
function sin(){
    //screen.value +="sin";
    let index = screen.value.indexOf("sin");
    //console.log(index)
    
    output.textContent = Math.sin(screen.value);
    
}
function cos(){
    output.textContent = Math.cos(screen.value);
}
function tan(){
    output.textContent = Math.tan(screen.value);
}
function log(){
    output.textContent = Math.log(screen.value);
}
function ln(){
    output.textContent = Math.log(screen.value);
}
function e(){
    output.textContent = Math.e(screen.value);
}


















