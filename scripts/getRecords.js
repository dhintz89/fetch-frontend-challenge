// make data globally available to avoid unneccessary calls to API
let dataArry = [];

// pull records from site using cors-anywhere app as proxy to avoid CORS issues
function getRecords() {
  fetch('https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json')
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .then(data => processRecords(data));
};

// filter, sort, display
function processRecords(data) {
  // filter out null or blank names
  const filteredArry = data.filter(i => i.name);
  // multi-level sort on filtered array - sort first by listId, sort ties by name (much faster than multiple sorts)
  filteredArry.sort((a,b) => {
    if(a.listId < b.listId) return -1;
    if(a.listId > b.listId) return 1;
    if(parseInt(a.name.split(" ")[1]) < parseInt(b.name.split(" ")[1])) return -1;
    if(parseInt(a.name.split(" ")[1]) > parseInt(b.name.split(" ")[1])) return 1;
    return 0;
  });
  // set global dataArry to resulting filtered, sorted array
  dataArry = filteredArry;
  displayRecords(dataArry);
}