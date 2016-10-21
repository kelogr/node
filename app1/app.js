var flight=require('./vols');  //Accedim a l'informació de la carpeta i el seus móduls;

flight.setOrigin('Barcelona'); //Accedim al modul.
flight.setDestination('London');
flight.setNumber(123);

console.log(flight.getInfo());
