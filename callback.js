/*setTimeout(() => {
    console.log('Hola mundo');
},2000)*/

const getUsuarioById = (id, callback) => {
    const user = {
        id,
        nombre:'Luis',
    }

    setTimeout(() => {

        callback(user);
        return user;
    }, 1000);
}

const usuario = getUsuarioById(10, (usuario) => {
    console.log(usuario.nombre);
});



