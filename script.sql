---solo si es por consola, copiar y pegar.

CREATE DATABASE tasks;

USE tasks;

--por pg admin usar este script
CREATE TABLE tarea(
    id SERIAL PRIMARY KEY,
    titulo_tarea text,
    descripcion_tarea text,
    fecha_tarea TIMESTAMP,
    fecha_creacion TIMESTAMP
);

