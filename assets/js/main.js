// Toggle mobile menu
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
	document.body.classList.toggle("show-menu");
});


// Theme picker
const themePicker = document.querySelector(".theme-picker");

themePicker.value = theme;

themePicker.addEventListener("change", event => {
	theme = event.target.value;
	document.documentElement.dataset.theme = theme;
	localStorage.setItem("theme", theme);
});
