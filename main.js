console.log("hi!");

const printToDomString = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (fancyArray) => {
  let domString = "";
  fancyArray.forEach ((animal) =>{
    domString += `<h1>${animal.name}</h1>`;
  })
  printToDomString(domString, "zoo");
};


function executeThisCodeIfXHRFails () {


}

function executeThisCodeAfterFileLoaded () {
  const data = JSON.parse(this.responseText);
  buildDomString(data.animals);
}

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET","animals.json");
  myRequest.send();
};

startApplication ();
