// display selected data

function displayRecords(data) {
  // clear currently displayed data
  document.querySelector(".list").innerHTML = "";

  // display table headers
  let header1 = document.createElement("div");
  header1.innerHTML = "ListId";
  header1.classList.add("grid-1");
  header1.classList.add("header");
  let header2 = document.createElement("div");
  header2.innerHTML = "Id";
  header2.classList.add("grid-2");
  header2.classList.add("header");
  let header3 = document.createElement("div");
  header3.innerHTML = "Name";
  header3.classList.add("grid-3");
  header3.classList.add("header");
  document.querySelector(".list").appendChild(header1);
  document.querySelector(".list").appendChild(header2);
  document.querySelector(".list").appendChild(header3);

  // iterate through array of data to create a <li> for each entry
  data.forEach((item, i) => {
    // determine bg-color based on odd or even row and odd or even listId
    let bc;
    if(item.listId % 2 === 0) {
      i % 2 === 0 ? bc = "#ffffff" : bc = "#dec3c3";
    } else {
      i % 2 === 0 ? bc = "#ffffff" : bc = "#c3d8de";
    }
    // create rows based on data
    let g1 = document.createElement("div");
    g1.innerHTML = item.listId;
    g1.classList.add("grid-1");
    g1.style.backgroundColor = bc;
    let g2 = document.createElement("div");
    g2.innerHTML = item.id
    g2.classList.add("grid-2");
    g2.style.backgroundColor = bc;
    let g3 = document.createElement("div");
    g3.innerHTML = item.name
    g3.classList.add("grid-3");
    g3.style.backgroundColor = bc;
    document.querySelector(".list").appendChild(g1);
    document.querySelector(".list").appendChild(g2);
    document.querySelector(".list").appendChild(g3);
  });

  // change Get Records button to Refresh Records & unhide Filter button
  document.querySelector(".getRecords").innerHTML = "Refresh Records";
  document.querySelector(".filters").classList.remove("hidden");
};