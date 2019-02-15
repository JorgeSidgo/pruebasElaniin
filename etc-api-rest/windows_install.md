# Instalación en Windows 

1. Primero deberá ejecutar con mysql el contenido del archivo ***db.sql*** para crear la base de datos 

2. Las credenciales para gestión de base de datos que utiliza la aplicación se encuentran en el archivo ***.env***, en el caso que las suyas sean distintas a las predefinidas en el archivo, pueden ser cambiadas

3. Con la base de datos creada y las credenciales correctas, ejecute el archivo ***install.bat***, el cual realizará la migración de base de datos, insertará los datos predefinidos en la base de datos y la correrá sobre localhost en el puerto 8089

4. Luego debe ejecutar la aplicación cliente con ***ng serve***

### Credenciales

**Email:** tarantino@gmail.com

**Password** 123456