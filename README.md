# NVMW Expos
> Project for the 'Front-end Applications' course of the Information Design *Tech Track*

![Image here]()

## Description
NVMW Expos is a web app where students can explore the NVMW collection and create expos themselves based on four different themes. 

### Features
* Explore the collections of four different themes
* Create expos by adding items or deleting items
* Show their expos to friends using the expos page

#### Explore collections of four different themes
![Image here]()
Users can choose one of four different themes to base their expo on. They can therefore explore each collection of items.

#### Create expos by adding or deleting items
![Image here]()
In the results page users can add or delete items from their current expo using the 'add to expo' or 'delete from expo' button.

#### Show expos on the expos page
![Image here]()
All expos get stored in local storage and are being used on the expos page. The expos page gives an overview of all expos created by the user. A user can show their expos to others by going to the expos page.

## Installation
NVMW Expos is built using [Preact JS]() and bootstrapped using the Preact CLI.

For detailed explanation on how things work using the `preact-cli`, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

### Prerequisites
Before getting started you should have the following things sorted out:

### Scripts
``` bash
# install dependencies
npm install

# spin up a dev server on http://localhost:8080
npm run dev
```

## Deployment
For deployment I've set up CD via Netlify. Setting up CD via Netlify is very simple. You have to follow the following few steps:
1. Create an account on [Netlify]()
2. Authorize Netlify to use your GitHub repo
3. Tell Netlify to run your build script everytime you push to master, in this case it's `npm run build`

## Testing
Since jest is installed you can write unit tests for every component if you want to. Make sure to install `jest-preset-preact` beforehand.
