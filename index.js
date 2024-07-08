function checkViewportWidth() {
	let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	let wrappers = document.querySelectorAll("wrapper");
	let viewportAlerts = document.querySelectorAll("viewport-alert");
	if (viewportWidth < 360) {
		wrappers.forEach((wrapper) => {wrapper.style.display = "none";});
		viewportAlerts.forEach((viewportAlert) => {viewportAlert.style.display = "flex";});
	} else {
		wrappers.forEach((wrapper) => {wrapper.style.display = "";});
		viewportAlerts.forEach((viewportAlert) => {viewportAlert.style.display = "none";});
	}
}

checkViewportWidth();
window.addEventListener("resize", checkViewportWidth);