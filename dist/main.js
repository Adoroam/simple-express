function makeCard() {
  document.createElement("div");
}

document.body.onclick = function () {
  var search_val = document.getElementById("search").value;
  if (search_val.length) {
    console.log(search_val)
  }
}