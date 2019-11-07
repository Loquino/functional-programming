
// DATA ophalen en weergeven op de website
function showDataOnDisplay(){
    document.getElementById("displaydata").innerHTML = data.results.bindings[5].afb.value;
    
}
showDataOnDisplay();
let goederen = data.results.bindings;
function alleenLengtes (){
    let alleLengtes = goederen.map(goederen => console.log(goederen.lengte.value));
}
alleenLengtes();

function lengteFilteren (){
    goederen = data.results.bindings.lengte.value.replace('cm', "");
}
lengteFilteren();

console.log(data)

// Test funtie om te controleren of de javaScript wordt geladen.
function test () {
    let qoute = 'Hallo dit is een test';
    console.log(qoute);
}
test();

