const single = document.getElementById("single");
const trainer = document.getElementById("trainer");
const info = document.getElementById("info");
//Hover
single.addEventListener("mouseover", function(){info.textContent = "Single"});
single.addEventListener("mouseleave", function() {info.textContent = ""});
trainer.addEventListener("mouseover", function(){info.textContent = "Tracking"});
trainer.addEventListener("mouseleave", function() {info.textContent = ""});
//Click
single.addEventListener("click", function(){});
