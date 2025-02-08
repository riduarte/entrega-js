let usuario = {
    Nombre :'Richard',
    Apellidos: 'Duarte P.',
    bootcampModulos : [
        { nombre: "Introducción a Git", fechaInicio: "2025-02-01" },
        { nombre: "Fundamentos de Node.js", fechaInicio: "2025-02-10" },
        { nombre: "Bases de datos con MySQL", fechaInicio: "2025-03-01" },
        { nombre: "Fundamentos de React", fechaInicio: "2025-03-10" },
        { nombre: "Consumo de APIs en React", fechaInicio: "2025-03-25" }
    ]

}
console.log(usuario.bootcampModulos[3].fechaInicio)