console.log("Página en construcción con Patricio Estrella");

function clickPatricio() {
    alert("La mayonesa es un instrumento?");
}

function changeColor( elementHtml, color ) {
    // alert("Que emoción, voy a cambiar mi color")
    console.log(elementHtml);
    console.log(color);
    
    elementHtml.style.color = color;
}

function changeColorWithPrompt( elementHtml) {
    const color = prompt("Dime el color en inglés", "yellow");
    changeColor( elementHtml, color );
}

function resetColor(){
    document.querySelectorAll("h3").forEach(element => {
        element.style.color = "black";
    });
}