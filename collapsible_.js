var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var collapsed_content = this.nextElementSibling;
    if (collapsed_content.style.display === "block") {
      collapsed_content.style.display = "none";
    } else {
      collapsed_content.style.display = "block";
    }
  });
}
