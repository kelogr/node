var Flight=require('./vols');  //Accedim a l'informació de la carpeta i el seus móduls;

var pl_data1={
	number:847,
	origin:'BCN',
	destination:'MAD'
};

var pl_data2={
	number:848,
	origin:'MAD',
	destination:'BCN'
};

//crear avió 1
var pl1=new Flight();
pl1.fill(pl_data1);
//Sortida de l'avió
pl1.triggerDepart();

console.log(pl1.getInformation());

//crear avio2
var pl2= new Flight();
pl2.fill(pl_data2)
pl2.triggerArrive();

console.log(pl2.getInformation());
