// create dropdown menu
function createDropdown() {
  // determine unique listId values based on data available in dataArry (current data)
  let dropdownOptions = [];
  dataArry.forEach(val => {
    if(!dropdownOptions.find(opt => opt === val.listId)) {
      dropdownOptions.push(val.listId);
    }
  });
  // create element for each option with an eventListener to filter on click based on selected div id
  document.querySelector(".filterMenu").innerHTML = "";
  dropdownOptions.forEach(option => {
    let newEl = document.createElement("div");
    newEl.classList.add("option");
    newEl.id = option;
    newEl.innerText = `ListId ${option}`;
    newEl.addEventListener("click", filterRecords);
    document.querySelector(".filterMenu").appendChild(newEl);
  });
  // reveal filter options
  document.querySelector(".filterMenu").classList.remove("hidden");
};


// filters data based on dropdown selection
function filterRecords(event) {
  toDisplay = dataArry.filter(item => item.listId === parseInt(event.target.id));
  displayRecords(toDisplay);
  // reveal Clear Filters button
  document.querySelector(".clearFilters").classList.remove("hidden");
  // hide filter options
  document.querySelector(".filterMenu").classList.add("hidden");
};


// display all records
function clearFilters() {
  displayRecords(dataArry);
  // hide filter options and Clear Filters button
  document.querySelector(".filterMenu").classList.add("hidden");
  document.querySelector(".clearFilters").classList.add("hidden");
}