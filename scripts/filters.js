// filters based on dropdown selection
function filterRecords(option) {
  toDisplay = dataArry.filter(item => item.listId === option);
  displayRecords(toDisplay)
  document.querySelector(".clearFilters").classList.remove("hidden");
};

// display all records
function clearFilters() {
  displayRecords(dataArry);
}