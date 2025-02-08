const datos = [
    {
    id: 1,
    nombre: 'Juan',
    habilidades: ['JavaScript', 'HTML', 'CSS'],
    proyectos: [
    { id: 1, nombre: 'Proyecto 1' },
    { id: 2, nombre: 'Proyecto 2' }
    ]
    },
    {
    id: 2,
    nombre: 'María',
    habilidades: ['Python', 'SQL', 'Django'],
    proyectos: [
    { id: 3, nombre: 'Proyecto 3' },
    { id: 4, nombre: 'Proyecto 4' }
    ]
    },
    {
    id: 3,
    nombre: 'Pedro',
    habilidades: ['Java', 'Spring', 'Hibernate'],
    proyectos: [
    { id: 5, nombre: 'Proyecto 5' },
    { id: 6, nombre: 'Proyecto 6' }
    ]
    }
    ]

const busqueda = (datos)=>{
    const userJS= datos.filter(({habilidades}) => habilidades.includes('JavaScript'))
        return JSON.stringify(userJS, null, 2)
}
const usersJS = busqueda(datos) 
console.log(usersJS)

const verProyectos = (datos)=>{
    const proyectosUser = datos.map(persona => persona.proyectos.map(proyecto => proyecto.nombre)).flatMap(proyecto=>proyecto);
        return proyectosUser
}

const allProyrect = verProyectos(datos)
console.log(allProyrect)
