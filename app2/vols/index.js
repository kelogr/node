module.exports = function(info){


var values={ //como array
	number:null,
	origin:null,
	destination:null,
	departs:null,
	arrives:null,
	actualDepart:null,
	actualArrive:null
};

//Aquest funció les podrem exportar i utilitzarles a altres arxius.
//Han d'estar en exports per poder utilitzarlos.


//omplir objecte values
for(var prop in values) //Recorre les arrays en javascript (prop representa cada uno de los valores de l'array)
{
	if(values[prop]!=='undefined'){ //=== (representa que son identicos en valor i en tipo de dato)
		values[prop]=info[prop]; 
	}
};
var functions={
	/*Actualitza les dades de sortida*/ triggerDepart:function(){
		values.actualDepart=Date.now();
	},
	triggerArrive:function(){
		values.actualArrive=Date.now();
	},
	getInformation:function(){
		return values;
	}
};
	return functions;
};

/*exports.setNumber=function(num){
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
};*/ 