window.onload = LetTheFunBegin;

function LetTheFunBegin(){
	CreateHell();
	document.getElementById("dcm").onclick = StartHell;
}

function CreateHell(){
	var dcm = document.createElement("BUTTON"); 
	var dcmtx = document.createTextNode("DON'T CLICK ME!");
	var currentTime = new Date();
	dcm.appendChild(dcmtx);
	dcm.setAttribute("id","dcm");
	document.body.appendChild(dcm);
	var ft = document.createElement("div");
	ft.innerHTML="Powered by <a href = \"http://mihailproductions.com\">MihailProductions</a>. All rights reserved &copy; " + currentTime.getFullYear();
	ft.setAttribute("id","footer");
	document.body.appendChild(ft);
}

function StartHell(){
var nr = "";
for( var i = 0; i < 1000; i++ ) {
	nr = nr + i.toString();
	history.pushState(0,0, nr );
}	
}
