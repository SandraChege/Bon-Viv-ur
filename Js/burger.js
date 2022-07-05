var menu=document.getElementsByClassName(containers);
var act=header.getElementsByClassName("links");

for (var i = 0; i < act.length; i++) {
    act[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }