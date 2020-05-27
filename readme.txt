Este proyecto es una prueba para usar nodejs en conjunto con mongdb y el framework express.

npm i connect-flash... passport-local

connect-flash > se usa para realizar la conexion entra paginas web
bcryptjs > se usa para cifrar y descifrar passwords, seguridad en la app
express-handlebars > crear vistas o archivos html (hbs) que se pueden enviar 
express-session > guarda datos desde memoria del servidor para mantener sesiones o login
method_override > enviar peticiones put o delete desde una vista(en lugar de usar get y post)
mongoose > manejador de mongodb
passport > modulo para autenticar usuarios
passport-local > indica que estara autenticando usuario desde nuestra bd.

npm i dotenv nodemon handlebars npm-check-updates -D

dotenv > usar variables de entorno en nuestra aplicacion (guarda valores de conexion a bd)
nodemon > realiza reinicios automaticos cada que se realiza un cambio 
handlebars > soluciona problemas que se presentan cuando usas express-handlebars
npm-check-updates > supervisa si existen actualizaciones de los modulos usados
-D indica que son dependencias del desarrollo

dentro de la carpeta src se usan las siguientes carpetas

helpers > almacena funciones que realizan algo en la vista de la app(codigo adicional que se le brinda a los hadlebars)
config > configuracion de modulos especificos
controllers > almacena funciones que se usan cuando el usuario visita rutas de nuestro server
models > almacena los modelos de datos(esquemas que se usan en la bd)
public > colocar archivos publicos, estatico(ccs, imagenes, fuentes que se pueden acceder sin problemas)
routes  > rutas o url qeu tendra la app
views > almacena archivos dehandlebars o html que se envia al cliente

/*mongo db como base de datos*/

Si tratamos de inciair mongodb y obtenermos el siguiente error:
exception in initAndListen: IllegalOperation: Attempted to create a lock file on a read-only directory: /data/db, terminating

se soluciona dando los permisos necesarios a esa ruta:
--> sudo chmod -R go+w /data/db

cada que se va a usar se tiene que activar
si tenemos el error que el puerto (27017) mongod ya se esta usando podemos matar los procesos asociados a mongod
sudo killall mongodb
 
 despues iniciar nuevamente 
 --> mongo con mongod

Se usa el modulo ENV para crear valores contantes que se usan posteriormente. (variables globales o constantes)

en el archivo index se uso require para los valores de la bd creados en .env file
pero los datos de conexion se usan en el archivo database.js por lo que el require va ahi.

para usar la conexion a la bd por medio de bd y host es necesario usar el signo de `` ya que el apostrofe no lo toma en cuenta 

mongo incia la consola de mongodb
show dbs ver las bases de datos
use 'base de datos'
db.users.find().pretty ver la informacion de una tabla(coleccion) en especifico

** cuando cree el modelo del usuario use el parametro mail y cuando hice el modelado user el parametro email, esto creo en la base dos indices, uno para mail y otro para email, cuando quise insertar un nuevo usuario me indicaba que mail era nullo

E11000 duplicate key error index in mongodb mongoose

, de algun modo la tabla estaba esperando el parametro mail, para solucionar esto se borran los indices de la base 

db.collection.dropIndexes()

/* Mongoose modelado de datos */

en el modelo nota se crea la estructura de las notas
el esquema se crea a travez de un modelo, primero se crea un esquema y de ahi se importa en el modelo para 
poder hacer uso de el. 

El esquema define que es lo que se quiere guardar en la base de datos, a partir de este esquema se crea 
el modelo.

Note es el schema para los datos de la nota que se guarda, user es el esquema para los de usuario
en ambos casos se usa la opcino timestamps para saber el momento de creacion y actualizacion de los regustro

el modelo user tendra los datos relacionados con el usuarios.

nombre, mail, password, para el caso del password se crean dos metodos uno para encriptar y otro 
para hacer la comparacion de passwords, si la funcion regresa true se permite el acceso.

/* Express handlebars  Plantillas para la vista*/

extienden la funcionalidad de html




