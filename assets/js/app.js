var ajax = new XMLHttpRequest();
var url = "data/earth-like-results.json";


//funcion  que  nos  ayuda a jalar el Json

function getJSON(url) {
	return new Promise (function (resolve,reject) {
		//peticion ajax
		var ajax = new XMLHttpRequest();
		ajax.open("GET", url);
		ajax.send();
		ajax.onreadystatechange = function() {
			if(ajax.readyState == 4){
				// te  devuelve  un string  y  para convertirlo en  un  objetp le pones JSON.parse
				resolve(JSON.parse(ajax.responseText));

			}
		}
	}) 
}

getJSON(url)
	.then (function(mensaje) {
	return Promise.all(mensaje.results.map(getJSON));
})
	.then (function(resultado){
	  resultado.forEach(function(planeta){
		  
		var nombrePlaneta = planeta.pl_name;
		var imagenPlaneta = planeta.pl_name;  
		var fecha = planeta.pl_disc;
		var distancia = planeta.st_dist;
		var cards = document.getElementById("Cards"); 
		var nuevaPlantilla = "";  
		

		var plantilla = 
			'<div class="col s12 m6">'+
			'<div class="card">'+
			'<div class="card-image">'+
			'<img src="static/img/**imagen**.jpg">'+
			'<span class="card-title">**planet**</span>'+
			'</div>'+
			'<div class="card-content">'+
			'<p><strong>Discover in:</strong><span>**fecha**</span></p>'+
			'<p><strong>Distance:</strong><span>**distancia**</span></p>'+
			'</div>'+
			'</div>'+
			'</div>';
	

		nuevaPlantilla += plantilla.replace('**planet**',nombrePlaneta).replace('**fecha**',fecha).replace('**distancia**',distancia).replace('**imagen**',imagenPlaneta)
		
		  cards.innerHTML+= nuevaPlantilla;
	});
	
});