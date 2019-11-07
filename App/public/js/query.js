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
function runQuery(url, query){
  //Test if the endpoint is up and print result to page 
  // (you can improve this script by making the next part of this function wait for a succesful result)

	// Call the url with the query attached, output data
	fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
	.then(res => res.json())
	.then(json => {
	// console.log(json)
  console.table(json.results.bindings);

  })
}

runQuery(url, query)