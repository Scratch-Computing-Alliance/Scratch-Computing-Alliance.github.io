document.addEventListener("DOMContentLoaded", () => {
	const copyright = document.getElementById("copyright");

	let d = new Date();
	const years = d.getFullYear();

	copyright.innerHTML = copyright.innerHTML.replace("%CURRYEAR%", years);
});

function redirHome() {
	window.location.href = "/";
}