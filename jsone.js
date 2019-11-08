console.log('pataco')
/*iniciammos la llamada con una constante o variable creando un nuevo requerimiento xmlrequest
este guardado en una variabla*/
const silex = new XMLHttpRequest();
/*con el metodo open pasamos los datos a requerir con el metodo, la url y el boleano para ser responsivo
o no*/
silex.open("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=db1518d33ee641d79ba46f8d55e2e349", true)
/*se completa el enunciado con la constante send()*/
silex.send();
/*con la constante que enuncia de que si esta realizada la peticion realice un resumen de la respuestas obtenida
que podria ser infavorable o favorable*/
silex.onreadystatechange = function(){
	/*preguntamos si los estados de la solicitud son readystate y status que representan codigos de connecion
	y respuesta*/
	if(this.readyState ==4 && this.status == 200){ 
          let p = document.querySelector(".claser");
          /*si la respuesta es favorable se obtiene los datos en formato
          de texto con this para refetirse a la solicitud original responsetext
          para obtener el texto de la respuesta*/
		 let resp = this.responseText;
		 console.log(resp)
		 /*la respuesta se convierte en formato json para poder convertir estos datos 
		 en objetos json o arrays */
		 let datos = JSON.parse(resp)
		   console.log(datos)
           var v = datos.articles;
           /*realizamos un siclo for para recorer el json para publicarlo en pantalla*/
           for ( let d of v  ) {
           	/*con innerhtml colocamos esos datos dentro de un contenedor | += | suma un elemento
           	por cada recorrido*/
             p.innerHTML += `<div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="${d.urlToImage}">
          <span class="card-title">${d.author}</span>
        </div>
        <div class="card-content">
            <b>${d.publishedAt}</b>
          <p>${d.title}</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>

             `
           	 
           }
		 
	}else{
		console.log('not nozhink')
	}
}