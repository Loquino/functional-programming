
// =====>>
// Functie om de data op te halen en weer te geven in de console
//let goederenQuery = ;
let goederen = data.results.bindings;
let dataArray = goederen.map(goederen => goederen.lengte.value);
let dataPicLink = goederen.map(goederen => goederen.afb.value);

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
    document.getElementById("title1").textContent = data.results.bindings[103].title.value;
    document.getElementById("title2").textContent = data.results.bindings[50].title.value;
    document.getElementById("title3").textContent = data.results.bindings[34].title.value;
    document.getElementById("title4").textContent = data.results.bindings[78].title.value;
    document.getElementById("title5").textContent = data.results.bindings[17].title.value;
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

// =====>>// =====>>
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



    // function textInHtml (){ dataset.map(item => item.document.getElementById('block').textContent = dataPics) };
    // textInHtml();

// let picBlock = d3.select("block")
//     .attr('width' 50)
//     .attr('height' 50)
//     // 





//let text = textEnter.map(function(d) { return d.dataPics; });

//document.getElementById('block').textContent = dataPics;



/*
// functional programing 2.0
let cleaning = x.map(size => size {
size = size.replace();


if (size == 2){
    size = size.replace('2', '')
} els {

}

};*/


function picDisplay(){
    document.getElementById("block").textContent = dataPics;
}
picDisplay();



// Schets voor text
var textLabels = text
    .attr("x", function(d) { return d.cx; })
    .attr("y", function(d) { return d.cy; })
    .text( function (d) { return "( " + d.cx + ", " + d.cy +" )"; })
    .attr("font-family", "sans-serif")
    .attr("font-size", "20px")
    .attr("fill", "red");




       // console.log(getData())
// let getQData = function(){
//     cosole.log getData(cleaningKi);
// }
// console.log (getQData)
    //function runQuery(url, query){
	// Call the url with the query attached, output data
//   const response = await fetch(url+"?query="+ encodeURIComponent(query) +"&format=json");
//   .then(res => res.json())
//   .then(json => {
//     // console.log(json);
//     // console.log(json.results.bindings);
//     let dataQuery = json.results.bindings;
//     let dataArrQue = goederen.map(goederen => goederen.lengte.value);
//     console.log(dataQuery);
//     console.log(json.results.bindings);

//   })
  
// }


//runQuery(url, query)

// let dataQuery = dataResults;


// let x = dataArrayKi;
// let cleaningKi = 
// x.map(size => size
//             //.replace(/cm/g, '')
//             //.replace(/H/g, '')
//             //.replace(/h/g, '')
//             //.replace(/L/g, '')
//             .replace(/x/g, '')
//             .replace(/×/g, '')
//             .replace(/Dm/g, '')
//             .replace(/circa/g, '')
//             .replace(/midden/g, '')
//             .replace(/object/g, '')
//             .replace(/algemeen/g, '')
//             .replace(/,/g, '.')
//             .replace(/NI/g,'')
//             .replace('[]', '')
//             .replace('()', '')
//             .replace(';', '')
//             .replace(/[a-z]/g, '')
//             .replace(/[A-Z]/g, '')
//             .replace(/['"\u0040\u0026\u2122\u00ae]/g, '')
//             .replace(/[\r\n]+/g, ' ')
//             .replace(' ', '')
//             .slice(0,4)
//             .trim()
//             .replace( /( )\w(\w)\s/g, '')
//             .replace(/^\./, "")
//             .replace(/\s\d/g, '')
            
//     )





/*


// ===>> FUNCTION JS FILE 
      //Van de data haal alle alleen de lengte op
      let dataArray = data.map(data => goederen.lengte.value);

      //Van de data haal alle alleen de Afbeeldingen op
      let dataPicLink = goederen.map(goederen => goederen.afb.value);
      
      let x = dataArray;
      
      // Hieronder staat de verschoonde data van de json file
      let cleaning = 
      x.map(size => size 
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
      
      // ===> D3 CODE DEIVER 
      
      // Haal de verschoonde data op en maak vna de string nummer naar array values.
      let arr = cleaning;
      arr = arr.map(Number);
          // // controleer of de data
          // console.log(arr);
      
      
      
      // Verschoonde data tranformeren en plaatsen in een nieuwe data -> in een nieuwe objecten. (code van Victor).
      const restOfData = goederen.map(item => {
          let newArr = {};
          newArr.title = item.title.value;
          newArr.pic = item.afb.value;
          newArr.info = item.bes.value;
          return newArr;
         });
         
         
      // code gemaakt met behulp van Robert & Eyup (overgenomen van Victor). 
      // - Deze code is gebruikt om de verschoonde data.lengte om hierboven in de nieuwe data te plaatsen.
      for(let count=0; count < restOfData.length;count++){
      
      restOfData[count].size = arr[count]
      }
      const restOfDataWithSize = restOfData;
          // // controleren of de loop werkt. 
          // console.log(restOfDataWithSize);
      
      
      // Specifieke nieuwe data values zetten in een variabel in deze case: elment.size & elment.pic
      let ownLeng = restOfData.map(element => {
          return element.size;
      });
      
      let ownPic = restOfData.map(element => {
          return element.pic;
      }); 
          // // controleer of de variablelen
          // console.log(ownLeng);
          // console.log(ownPic);
      
      // Als de waardes in een array onder de '10' zijn haal ze dan weg van de array
      function isBigEnough(value) {
          return value >= 10;
        }
      
      let filtered = ownLeng.filter(isBigEnough);
      let dataset = filtered.sort(d3.ascending);
      
      let svgWidth = 6890, svgHeight = 350, barPadding = 5;
      let barWidth = 25;
      
      // De canvas van het staf daigram 
      let svg = d3.select('svg')
          .attr("width", svgWidth)
          .attr("height", svgHeight);
      
      // Haal de svg en maakt de staf diagramen aan
      let barChart = svg.selectAll("rect")
          .data(dataset)
          .enter()
          .append("rect", "p")
          .attr("y", function(d) {
               return svgHeight - d 
          })
          .attr("height", function(d) { 
              return d; 
          })
          .attr("width", barWidth - barPadding)
          .attr("transform", function (d, i) {
              let translate = [barWidth * i, 0]; 
              return "translate("+ translate +")";
          });
      
      
      // Haal de footer van de html 
      let alleenText =  d3.select("footer")
          .data(dataset)
          .enter()
          .append("img")
          .attr("width",200)
          .attr("height",200)
          .attr("src", (d, i) => ownPic[i]) // Lennart :) helps me 

*/



// //===>>

// // functie om een afbeelding op te halen & info
// function showDataOnDisplay(){
//     document.getElementById("title1").textContent = data.results.bindings[103].title.value;
//     document.getElementById("title2").textContent = data.results.bindings[50].title.value;
//     document.getElementById("title3").textContent = data.results.bindings[34].title.value;
//     document.getElementById("title4").textContent = data.results.bindings[78].title.value;
//     document.getElementById("title5").textContent = data.results.bindings[17].title.value;
// }
// showDataOnDisplay();

// // IMG ON DISPLAY 
// document.getElementById("item1").src = data.results.bindings[103].afb.value;
// document.getElementById("item2").src = data.results.bindings[50].afb.value;
// document.getElementById("item3").src = data.results.bindings[34].afb.value;
// document.getElementById("item4").src = data.results.bindings[78].afb.value;
// document.getElementById("item5").src = data.results.bindings[17].afb.value;
// //====>>