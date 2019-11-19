import { url, query, getData } from './query.js';

//===>>
function useData (){
    let data = getData(url, query).then(results => {
      //console.log("This is in useData: ", results)
    
    let dataArray = results.map(result => result.lengte.value);
    //console.log(dataArray)
    
    //Van de data haal alle alleen de Afbeeldingen op
    let dataPicLink = results.map(result => result.afb.value);
    
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
    
    
    
    // Verschoonde data transformeren en plaatsen in een nieuwe data -> in een nieuwe objecten. (code van Victor).
    const restOfData = results.map(item => {
        let newArr = {};
        newArr.title = item.title.value;
        newArr.pic = item.afb.value;
        newArr.info = item.bes.value;
        return newArr;
       });
       
       
    // Code gemaakt met behulp van Robert & Eyup (overgenomen van Victor). 
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

       
        // Longshot idea voor afbeeldingen.
        let alleenPics =  d3.select("article")
        .data(dataset)
        .enter()
        .append("img")
        .attr("width",200)
        .attr("height",200)
        .attr("src", (d, i) => ownPic[i])
  
  //END 
     })
    }

  useData();




// Test functie om te controleren of de javaScript wordt geladen.
function test () {
    let qoute = 'Hallo dit is een test, de javaScipt wordt geladen';
    console.log(qoute);
}
test();

// console.log(data) // laat de data in de console.log zien 
