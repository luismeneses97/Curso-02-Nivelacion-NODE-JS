const personaje = {
    nombre: 'Pepe',
    apellido: 'Argento',
    profesion : 'Zapatero',
    getDescripcion(){
        return `${nombre} ${apellido} es ${profesion}`
    }
}

// const nombre = personaje.nombre;
// const apellido = personaje.apellido;
// const profesion = personaje.profesion;
 //const{nombre, apellido, profesion} = personaje;
 const imprimir_personaje = ({nombre, apellido, profesion}) => {
     console.log(nombre, apellido, profesion);
 }


 const personajes = ['pepe','moni','koki'];

 const[,, p3] = personajes;
 console.log(p3);


 




