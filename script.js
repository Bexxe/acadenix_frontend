var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
    checkboxes.style.maxHeight="160px";
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}


   