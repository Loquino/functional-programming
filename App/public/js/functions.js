// Functie om de data op te halen en weer te geven in de console
//let goederenQuery = ;
let goederen = data.results.bindings;
let dataArray = goederen.map(goederen => goederen.lengte.value);

let x = dataArray;

let cleaning = 
x.map(size => size
            //.replace(/cm/g, '')
            //.replace(/H/g, '')
            //.replace(/h/g, '')
            //.replace(/L/g, '')
            .replace(/x/g, '')
            .replace(/×/g, '')
            .replace(/Dm/g, '')
            .replace(/circa/g, '')
            .replace(/midden/g, '')
            .replace(/object/g, '')
            .replace(/algemeen/g, '')
            .replace(/,/g, '.')
            .replace(/NI/g,'')
            .replace('[]', '')
            .replace('()', '')
            .replace(';', '')
            .replace(/[a-z]/g, '')
            .replace(/[A-Z]/g, '')
            .replace(/['"\u0040\u0026\u2122\u00ae]/g, '')
            .replace(/[\r\n]+/g, ' ')
            .replace(' ', '')
            .slice(0,4)
            .trim()
            .replace( /( )\w(\w)\s/g, '')
            .replace(/^\./, "")
            .replace(/\s\d/g, '')
            
    );





// functie om een afbeelding op te halen & info
function showDataOnDisplay(){
    document.getElementById("title1").innerHTML = data.results.bindings[103].title.value;
    document.getElementById("title2").innerHTML = data.results.bindings[50].title.value;
    document.getElementById("title3").innerHTML = data.results.bindings[34].title.value;
    document.getElementById("title4").innerHTML = data.results.bindings[78].title.value;
    document.getElementById("title5").innerHTML = data.results.bindings[17].title.value;
}
showDataOnDisplay();
// IMG ON DISPLAY 
document.getElementById("item1").src = data.results.bindings[103].afb.value;
document.getElementById("item2").src = data.results.bindings[50].afb.value;
document.getElementById("item3").src = data.results.bindings[34].afb.value;
document.getElementById("item4").src = data.results.bindings[78].afb.value;
document.getElementById("item5").src = data.results.bindings[17].afb.value;

// Test functie om te controleren of de javaScript wordt geladen.
function test () {
    let qoute = 'Hallo dit is een test';
    console.log(qoute);
}
test();

// console.log(data) // laat de data in de console.log zien 