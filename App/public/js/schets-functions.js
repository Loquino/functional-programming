
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

// // function lengteFilteren (){
// //     goederen = data.results.bindings.lengte.value.replace('cm', "");
// // }
// lengteFilteren();

console.log(data)

// Test funtie om te controleren of de javaScript wordt geladen.
function test () {
    let qoute = 'Hallo dit is een test';
    console.log(qoute);
}
test();


// test multiplicator funtie 
function multiplicator(factor){
    return x => x * factor;
}

let vermenigvuldigdoortwee = multiplicator(2);
let vermenigvuldigdoordrie = multiplicator(3);

console.log(vermenigvuldigdoortwee(2) + ' dit is een test over de multiplicator functie')


// DESCARGA LAS IMAGENES
function getBase64Image(imgUrl, callback) {

    let img = new Image();

    // onload fires when the image is fully loadded, and has width and height

    img.onload = function(){

      let canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      let ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
      let dataURL = canvas.toDataURL("image/png"),
          dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

      callback(dataURL); // the base64 string

    };

    // set attributes and src 
    img.setAttribute('crossOrigin', 'anonymous'); //
    img.src = imgUrl;

}


// Test multiplicator functie 
function multiplicator(factor){
    return x => x * factor;
}

let vermenigvuldigdoortwee = multiplicator(2);
let vermenigvuldigdoordrie = multiplicator(3);

console.log(vermenigvuldigdoortwee(2) + ' dit is een test over de multiplicator functie')

//----


//let newCleaning = cleaning.splice(2,4) ;

//=====

// function delRest (){
//     if (cleaning[8].length > 3) {
//         // for (i = 0; i < 3; i++) {
//         // cleaning[8] = cleaning[8] + i;
//         // console.log('TRUE is groter' + cleaning[8] );
//         // }
//         let losseLetters = cleaning[8].slice(0,2); //
//         console.log(losseLetters + 'TEST 123');
//        // woordMeerDanDrie.split('').filter(letter => letter.length > 3);
//         //   console.log('TRUE is groter');
        

//     }
//     else{
//         //console.log('testing!!!!!222');
//     }
// }

//let filterCleaning = cleaning.(delRest);

///console.log(delRest())

//=====


// function alleenLengtes (){
//     let alleLengtes = goederen.map(goederen => console.log(goederen.lengte.value));  
// }
// alleenLengtes();




/*
// functional programing 2.0
let cleaning = x.map(size => size {
size = size.replace();

if (size == 2){
    size = size.replace('2', '')
} els {

}

};*/


