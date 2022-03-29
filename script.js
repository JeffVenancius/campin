let eye = false;
function toggleEye(){
	let password = document.getElementById("password");
	let type = "password";
	
	eye = !eye;
	if (eye){type = "text"};
	password.setAttribute("type", type);
}

function checkCustom(){
	let checkbox = document.getElementById("checkbox__custom");
	if (checkbox.innerHTML == ""){
		checkbox.innerHTML = `<img src="assets/check.svg"></img>`;
		checkbox.style.backgroundColor = "#FFC632";
	}
	else{
		checkbox.innerHTML = "";
		checkbox.style.backgroundColor = "transparent";
	}
}

function checkCase(email){
	let element = "e-mail";
	let icon = "mail";
	if (!email){
		element = "password";
		icon = "lock";
	}
	return [document.getElementById(element + "__icon") , "assets/" + icon]
}

function firstFocus(email = true){
	let focusArr = checkCase(email);
	focusArr[0].src = focusArr[1] + "-focus.svg";
}

function firstUnfocus(email = true){
	let focusArr = checkCase(email);
	focusArr[0].src = focusArr[1] + ".svg";
}

