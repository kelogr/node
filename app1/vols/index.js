var number, origin, destination;

//Aquest funció les podrem exportar i utilitzarles a altres arxius.
//Han d'estar en exports per poder utilitzarlos.

exports.setNumber=function(num){
	number=num;
};

exports.setOrigin=function(o){
	origin = o;
}; 

exports.setDestination=function(d){
	destination = d;
};

exports.getInfo=function(){
	return {
		number: number,
		origin: origin,
		destination: destination 	//Primera columna son los campos, la segunda son los valores;
	};
}; 