// console.clear();

const navExpand = [].slice.call(document.querySelectorAll(".nav-expand"));
const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Back
	</a>
</li>`;

navExpand.forEach(item => {
  item
    .querySelector(".nav-expand-content")
    .insertAdjacentHTML("afterbegin", backLink);
  item
    .querySelector(".nav-link")
    .addEventListener("click", () => item.classList.add("active"));
  item
    .querySelector(".nav-back-link")
    .addEventListener("click", () => item.classList.remove("active"));
});

// ---------------------------------------
// not-so-important stuff starts here

const sidenavToggle = document.getElementById("sidenav-toggle");
const sidenavClose = document.getElementById("sidenav-close");

sidenavToggle.addEventListener("click", function() {
  document.body.classList.toggle("has-overlay");
});

sidenavClose.addEventListener("click", function() {
  document.body.classList.remove("has-overlay");
});
