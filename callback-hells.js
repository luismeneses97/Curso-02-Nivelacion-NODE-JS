const empleados = [
    {
        id: 1,
        nombre:"Fernando"
    },
    {
        id: 2,
        nombre:"Martha"
    },
    {
        id: 3,
        nombre:"Manuel"
    }
]

const sueldos = [
    {
        id:1,
        sueldo: 1500
    },
    {
        id:2,
        sueldo: 2000
    },
]
//manuel no cobra sueldo
const getEmpleadoById = (id, callback) =>{
    const empleado = empleados.find((e) => e.id === id);
 
    if(empleado){
        callback(null, empleado);
        return;
    }
    callback(new Error("El empleado no existe"));
}

const id = 2;

getEmpleadoById(id, (error, empleado) => {
    if(error){
        console.log('ERROR!!!...');
        
        console.log(error);
        return;
    }
    console.log(`El empleado: ${empleado.nombre}...`);
});
