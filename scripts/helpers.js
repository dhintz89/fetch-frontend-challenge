// display selected data
function displayRecords(data) {
  // clear currently displayed data
  document.querySelector(".list ul").innerHTML = "";
  // iterate through array of data to create a <li> for each entry
  data.forEach(item => {
    let newEl = document.createElement("li");
    newEl.innerHTML = `id: ${item.id}, listId: ${item.listId}, name: ${item.name}`;
    document.querySelector(".list ul").appendChild(newEl);
  });
  // change Get Records button to Refresh Records & unhide Filter button
  document.querySelector(".getRecords").innerHTML = "Refresh Records";
  document.querySelector(".filter").classList.remove("hidden");
};