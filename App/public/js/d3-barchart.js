//import {useData} from './functions.js';
//let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160].sort(d3.ascending); //Huidige data.

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