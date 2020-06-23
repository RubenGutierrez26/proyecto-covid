function getParameterByName(name) {
    
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
	results = regex.exec(window.location);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function sleep(milliseconds) {
 	var start = new Date().getTime();
 	for (var i = 0; i < 1e7; i++) {
  		if ((new Date().getTime() - start) > milliseconds) {
   			break;
  		}
	}
}


function mostrarResul() {
/*------------------PARA HALLAR LA RESPUESTA-------------------*/
	var suma=0;
	for (var i=1; i<10; i++){
		var resp=getParameterByName("rad"+i);
		suma=suma+parseInt(resp);
	}
	console.log(suma);

	var suma2=0;
	for (var i=1; i<21; i++){
		var resp=getParameterByName("ra"+i);
		suma2=suma2+parseInt(resp);
	}
	console.log(suma2);

/*---------------PARA MENSAJE DE RESPUESTA----------------------------------------*/
	if(suma<5){
		document.getElementById("respuestafinal").innerHTML = "■  USTED PODRÍA TENER DEPRESIÓN CON/SIN LIMITACIÓN DE LA FUNCIONALIDAD. LE RECOMENDAMOS BUSCAR AYUDA EN EL DEPARTAMENTO DE SALUD MENTAL PARA UNA EVALUACIÓN MÁS PROFUNDA. LE OFRECEMOS UN CONTACTO EN EL MATERIAL INFORMATIVO DE LA PARTE INFERIOR.";
	}else{
		document.getElementById("respuestafinal").innerHTML = "■  No encontramos un Sindrome depresivo con la prueba. Sin embargo, si desea recibir ayuda encontrá un contacto en el material informativo.";
	}
	
	if(suma2<11){
		document.getElementById("respuestafinal2").innerHTML = "■  USTED PODRÍA TENER ANSIEDAD. LE RECOMENDAMOS BUSCAR AYUDA PSICOLÓGICA O PSIQUIÁTRICA PARA UNA EVALUACIÓN MÁS PROFUNDA. LE OFRECEMOS UN CONTACTO EN EL MATERIAL INFORMATIVO DE LA PARTE INFERIOR.";
	}else{
		document.getElementById("respuestafinal2").innerHTML = "■  No encontramos un Sd. ansioso con la prueba. Sin embargo, si desea recibir ayuda encontrá un contacto en el material informativo.";
	}

	document.getElementById("PUNTAJE1").innerHTML = "Su puntaje fue de: "+suma;	
	document.getElementById("PUNTAJE2").innerHTML = "Su puntaje fue de: "+suma2;	

/*--------------------------------------Guardar datos en la BD de la SEGUNDA parte de la encuesta-------------------------------------------*/
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", "https://encuesta-api26.herokuapp.com/encuestastwo");
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	let obj = {
		"preg1": getParameterByName('rad1'),
		"preg2": getParameterByName('rad2'),
		"preg3": getParameterByName('rad3'),
		"preg4": getParameterByName('rad4'),
		"preg5": getParameterByName('rad5'),
		"preg6": getParameterByName('rad6'),
		"preg7": getParameterByName('rad7'),
		"preg8": getParameterByName('rad8'),
		"preg9": getParameterByName('rad9'),
		"preg10": getParameterByName('preg2'),
		"preg11": getParameterByName('ra1'),
		"preg12": getParameterByName('ra2'),
		"preg13": getParameterByName('ra3'),
		"preg14": getParameterByName('ra4'),
		"preg15": getParameterByName('ra5'),
		"preg16": getParameterByName('ra6'),
		"preg17": getParameterByName('ra7'),
		"preg18": getParameterByName('ra8'),
		"preg19": getParameterByName('ra9'),
		"preg20": getParameterByName('ra10'),
		"preg21": getParameterByName('ra11'),
		"preg22": getParameterByName('ra12'),
		"preg23": getParameterByName('ra13'),
		"preg24": getParameterByName('ra14'),
		"preg25": getParameterByName('ra15'),
		"preg26": getParameterByName('ra16'),
		"preg27": getParameterByName('ra17'),
		"preg28": getParameterByName('ra18'),
		"preg29": getParameterByName('ra19'),
		"preg30": getParameterByName('ra20'),
		"preg31": getParameterByName('preg3'),
		"rpta": suma,
		"rpta2": suma2,


	}; 
	let jsonData = JSON.stringify(obj); 
	xmlhttp.send(jsonData); 
	console.log(jsonData);
	
}


