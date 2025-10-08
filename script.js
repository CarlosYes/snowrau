let toggleButton = document.querySelector(".toggle-mode button");
toggleButton.addEventListener("click", function () {
	document.querySelector("body").classList.toggle("noite");
	this.textContent === "Noite"
		? (this.textContent = "Dia")
		: (this.textContent = "Noite");
});