let menu;
let hider;
function closeAnim(){
	menu.classList.remove("endAnimated");
	menu.classList.remove("menu");
	menu.classList.add("disabled");
	menu.replaceWith(menu.cloneNode(true));
	menu = document.getElementById("menu");
	let hider = document.getElementById("hider");
	hider.onclick = hideMenu;
}
function hideMenu(){
	menu.classList.add("endAnimated");
	menu.addEventListener("animationend",closeAnim); 
}
function showMenu(){
	menu.classList.remove("disabled");
	menu.classList.add("menu");
	menuSwitch = true;
}
window.onload = function(){
	menu = document.getElementById("menu");
	let trigger = document.getElementById("trigger");
	let hider = document.getElementById("hider");
	trigger.onclick = showMenu;
	hider.onclick = hideMenu;
}