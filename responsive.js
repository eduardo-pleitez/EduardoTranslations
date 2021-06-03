/* Display menu for mobile design */
document.getElementById("hamburguerIcon").addEventListener("click", displayMenu);

function displayMenu(){
  var x = document.getElementById("row-center");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

