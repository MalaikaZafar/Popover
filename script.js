const myBtn = document.getElementById("myBtn");
const closeBtn = document.getElementById("closeBtn");
const myPopover = document.getElementById("myPopover");

myBtn.addEventListener("click", function () {
  myPopover.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  myPopover.classList.remove("active");
});
