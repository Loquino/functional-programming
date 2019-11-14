//let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160].sort(d3.ascending);
let arr = cleaning;
arr = arr.map(Number);
console.log(arr);

// Als de waardes in een array onder de '10' zijn haal ze dan weg van de array
function isBigEnough(value) {
    return value >= 10;
  }

let filtered = arr.filter(isBigEnough);

let dataset = filtered.sort(d3.ascending);

let svgWidth = 6890, svgHeight = 350, barPadding = 5;
let barWidth = 25;

// De canvas van het staf daigram 
let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// 
let barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
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
