window.onload = function () {
	//load();
}


function load() {
	
	let xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function () {
		if(xhr.readyState == 4 && xhr.status == 200) {
			//$('#load').html(xhr.responseText);
		}
	}
	
	xhr.open('GET','load.view',true);
	xhr.send();
}