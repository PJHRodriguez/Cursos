/*CREATE DATABASE mensajes_db;

SHOW DATABASES;

DROP DATABASE mensajes_db;

CREATE TABLE mensajes_db.mensajes(
	id_mensaje INT NOT NULL AUTO_INCREMENT,
    mensaje VARCHAR(280) NOT NULL,
    autor VARCHAR(45) NOT NULL,
    fecha DATETIME NOT NULL,
    PRIMARY KEY (id_mensaje)
);

SELECT * FROM mensajes_db.mensajes;

INSERT INTO mensajes_db.mensajes(mensaje,autor,fecha)
VALUES ('Hola mundo','Pablo', CURRENT_TIME())

UPDATE mensajes_db.mensajes 
SET mensaje = "Hola", autor = 'Pepe' 
WHERE id_mensaje = 1;

DELETE FROM mensajes_db.mensajes
WHERE id_mensaje = 1;
*/