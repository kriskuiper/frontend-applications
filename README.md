# NVMW Expos
> A blazingly fast web app where students can create their own expos using 

![Image here](/assets/screenshot1.png)

## Description
NVMW Expos is a web app where students can explore the NVMW collection and create expos themselves based on four different themes.

## Target audience
This application is intended for students with an interest in Dutch colonies and the history of slavery, especially cultural and colonial speaking.

### Features
* Explore the collections of four different themes
* Create expos by adding items or deleting items
* Show their expos to friends using the expos page

#### Explore collections of four different themes
![Exploring collections](/assets/screenshot2.png)
Users can choose one of four different themes to base their expo on. They can therefore explore each collection of items.

#### Create expos by adding or deleting items
![Creating expos](/assets/screenshot3.png)
In the results page users can add or delete items from their current expo using the 'add to expo' or 'delete from expo' button.

#### Show expos to friends using the espos page
![Sharing expos with friends](/assets/screenshot4.png)
All expos get stored in local storage and are being served using the expos page. The expos page gives an overview of all expos created by the user. A user can show their expos to others by going to the expos page.

## Installation
``` bash
# clone the repo from github
git clone https://github.com/kriskuiper/frontend-applications.git

# install dependencies
npm install

# spin up a dev server on http://localhost:8080
npm run dev

# Happy coding!
```

NVMW Expos is built using [Preact JS](https://preactjs.com/) and bootstrapped using the Preact CLI.

For detailed explanation on how things work using the `preact-cli`, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## Deployment
For deployment I've set up CD via Netlify. Setting up CD via Netlify is very simple. You have to follow the following few steps:
1. Create an account on [Netlify]()
2. Authorize Netlify to use your GitHub repo
3. Tell Netlify to run your build script everytime you push to master, in this case it's `npm run build`

## Data flow
Data is being pulled from the NVMW collection database using SPARQL queries. SPARQL is a SQL like query language. One of my SPARQL queries looks like this:

```
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
} LIMIT 24 OFFSET 0
```

All data fetching and storage is done using the utility functions in `/lib`. Results get fetched using `fetch-results-for-query.js`, storing results and expos in session- and localStorage is done using functions out of the `browser-storage.js` file. All of the SPARQL queries are stored in `queries-with-offset.js` and converted to a complete endpoint (with the specific query as queryparam to the base url) using `format-url-with-query.js`

## Testing
Since jest is installed you can write unit tests for every component if you want to. Make sure to install `jest-preset-preact` beforehand.
