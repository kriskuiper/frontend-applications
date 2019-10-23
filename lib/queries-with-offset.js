export default function(offsetNumber) {
	return {
		clothingQuery: `
			PREFIX dc: <http://purl.org/dc/elements/1.1/>
			PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
			PREFIX dct: <http://purl.org/dc/terms/>
			PREFIX edm: <http://www.europeana.eu/schemas/edm/>
			PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
			PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

			SELECT ?result ?title ?description (SAMPLE(?img) AS ?img) WHERE {
				?result edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster2705> .
				?result dc:title ?title .
				OPTIONAL { ?result dc:description ?description } .
				?result edm:isShownBy ?img .
			} LIMIT 24 OFFSET ${offsetNumber}
		`,
		cultureQuery: `
			PREFIX dc: <http://purl.org/dc/elements/1.1/>
			PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
			PREFIX dct: <http://purl.org/dc/terms/>
			PREFIX edm: <http://www.europeana.eu/schemas/edm/>
			PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
			PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

			SELECT ?result ?title ?subject ?subjectLabel ?description (SAMPLE(?img) AS ?img) WHERE {
				VALUES ?subjectLabel { "Afrikaans" "Iraans" }
				?result edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster2652> .
				?result dc:subject ?subject .
				?result dc:title ?title .
				OPTIONAL { ?result dc:description ?description } .
				?result edm:isShownBy ?img .
				?subject skos:prefLabel ?subjectLabel .
			} LIMIT 1000 OFFSET ${offsetNumber}
		`,
		weaponQuery: `
			PREFIX dc: <http://purl.org/dc/elements/1.1/>
			PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
			PREFIX dct: <http://purl.org/dc/terms/>
			PREFIX edm: <http://www.europeana.eu/schemas/edm/>
			PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
			PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

			SELECT ?result ?title ?description (SAMPLE(?img) AS ?img) WHERE {
				?result edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster2091> .
				?result dc:title ?title .
				OPTIONAL { ?result dc:description ?description } .
				?result edm:isShownBy ?img .
				FILTER langMatches(lang(?title), "ned")
			} LIMIT 24 OFFSET ${offsetNumber}
		`,
		jewelleryQuery: `
			PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
			PREFIX dc: <http://purl.org/dc/elements/1.1/>
			PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
			PREFIX dct: <http://purl.org/dc/terms/>
			PREFIX edm: <http://www.europeana.eu/schemas/edm/>
			PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
			PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

			SELECT ?result ?title ?description (SAMPLE(?img) AS ?img) ?time WHERE {
				?result edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster2713> .
				?result dc:title ?title .
				OPTIONAL { ?result dc:description ?description } .
				?result edm:isShownBy ?img .
				?result dct:created ?time .
				FILTER(xsd:integer(?time) >= 1900 && xsd:integer(?time) <= 2000)
				FILTER langMatches(lang(?title), "ned")
			} LIMIT 24 OFFSET ${offsetNumber}
		`
	};
}
