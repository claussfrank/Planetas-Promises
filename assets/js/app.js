var ajax = new XMLHttpRequest();
var url ="data/earth-like-results.json"

//funcion  que  nos  ayuda a jalar  la  apis

function getJSON(url){
	return new Promise(function(resolve,reject){
		var ajax = new XMLHttpRequest();
		ajax.open("GET",url);
		ajax.send();
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4){
				resolve(JSON.parse(ajax.responseText));
				
			}
		}
	}) 
}

getJSON(url)
.then (function(mensaje){
	console.log(mensaje)
	return(getJSON(mensaje.results[0]))
})
.then(function(resultado){
	console.log(resultado)
})