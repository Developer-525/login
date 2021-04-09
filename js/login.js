// JavaScript Document
function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	$.get("login?username=" + username + "&password=" + password, function(
			response) {
		console.log(response);
		if ("Success" == response) {
			window.location = "Success.html";
		} else {
			window.location = "Failure.html";
		}
	});

}