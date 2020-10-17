// pull records from site using cors-anywhere app as proxy to avoid CORS issues
function displayRecords() {
  fetch('https://cors-anywhere.herokuapp.com/https://fetch-hiring.s3.amazonaws.com/hiring.json')
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .then(data => display(data)); 

  function display(data) {
    // filter out null or blank names
    const filteredAry = data.filter(i => i.name);
    // multi-level sort on filtered array - sort first by listId, sort ties by name (much faster than multiple sorts)
    filteredAry.sort((a,b) => {
      if(a.listId < b.listId) return -1;
      if(a.listId > b.listId) return 1;
      if(parseInt(a.name.split(" ")[1]) < parseInt(b.name.split(" ")[1])) return -1;
      if(parseInt(a.name.split(" ")[1]) > parseInt(b.name.split(" ")[1])) return 1;
      return 0;
    });
    // iterate through resulting sorted array to create a <li> for each entry
    filteredAry.forEach(item => {
      let newEl = document.createElement("li")
      newEl.innerHTML = `id: ${item.id}, listId: ${item.listId}, name: ${item.name}`;
      document.querySelector(".list ul").appendChild(newEl);
    });
    // change Get Records button to Refresh Records
    document.querySelector(".getRecords").innerHTML = "Refresh Records";
  };
};