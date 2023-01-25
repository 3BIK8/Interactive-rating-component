const links = document.querySelectorAll("a[id^='link']");
const submitBtn = document.getElementById("submitBtn");
const rating = document.getElementById("rating");
const thanks = document.getElementById("thanks");
const selected = document.getElementById("selected");

links.forEach((link) => {
	link.addEventListener("click", (e) => {
		links.forEach((link) => link.classList.remove("visited"));
		e.target.classList.add("visited");
		submitBtn.removeAttribute("disabled");
		selected.innerHTML = `You clicked ${e.target.id.substring(4)} out of 5`;
	});
});

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	rating.style.display = "none";
	thanks.style.display = "block";
});
