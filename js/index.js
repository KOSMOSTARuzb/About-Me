let Typing = 0;
function setup(){
    setTimeout(type, 2000);
}
function type() {
    let text = "Name: Suyunov Muxammad\nAge: "+Age();
    text+="\nStudent of Presidential school in Jizzakh";
    const Name = document.getElementById("name");
    const lines = text.split("\n");
    Typing=0;
    let temp = 0;
    lines.forEach(line => {
        typeWriter(Name, line, 0, 50, temp);
        temp++;
    });
}
function typeWriter(element, text, i, delay, identity){
    if(Typing==identity){
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(()=>{typeWriter(element,text,i,delay,identity)}, delay);
        }else{
            Typing++;
            element.innerHTML += "<br>";
        }
    }else{
        setTimeout(()=>{
            typeWriter(element,text,i,delay,identity)
        },delay);
    }
}
function Age() {
    const today = new Date();
    const birthDateObj = new Date("2007-04-19");
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }
    return age;
}

addEventListener("DOMContentLoaded", (event) => {setup()});