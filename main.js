
for(let x = 1; x <= 100; x++) {
    let div = document.createElement(`div`)
    div.innerText = ""
    if(x % 3 === 0 && x % 5 === 0){
        div.innerText += "FizzBazz";
        div.classList.add("red");
}   else if (x % 5 === 0){
        div.innerText += "Buzz";
        div.classList.add(`green`);
}   else if (x % 3 === 0){
        div.innerText += "Fizz";
        div.classList.add(`yellow`);
}   else {
        div.innerText += x;
        div.classList.add(`blue`);
}
    document.getElementById(`small-box-cont`).appendChild(div);
}
