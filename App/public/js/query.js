// Databases
const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-15/sparql"

//Note that the query is wrapped in es6 template strings to allow for easy copy pasting
const query = `
#+ summary: Get photos through edm:object

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?cho ?title ?typeLabel ?lengte ?datum ?afb ?bes WHERE {

  <https://hdl.handle.net/20.500.11840/termmaster1248> skos:narrower* ?type .
  ?type skos:prefLabel ?typeLabel .

  ?cho edm:object ?type .
  ?cho dc:title ?title .
  ?cho dct:extent ?lengte.
  ?cho dct:created ?datum.
  ?cho edm:isShownBy ?afb.
  ?cho dc:description ?bes.
  FILTER langMatches(lang(?title), "ned")
} LIMIT 10000

`
// Daan voor vragen voor promises 
// Wiebe voor klein naar groot


/*
//
  - Van uit een functie
  - Van uit een promises.
//

*/
  //Test if the endpoint is up and print result to page 
  // (you can improve this script by making the next part of this function wait for a succesful result)

  getData(url, query)

  async function getData(url, query) {
    const response = await fetch(url+ "?query=" + encodeURIComponent(query) + "&format=json");
    const json = await response.json();
    const dataKi = await json.results.bindings;
    //console.log(dataKi)

    let dataArrayKi = dataKi.map(dataKi => dataKi.lengte.value);
    

    let x = dataArrayKi;
    let cleaningKi = 
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
                
        )
        console.log(cleaningKi)
    };


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
