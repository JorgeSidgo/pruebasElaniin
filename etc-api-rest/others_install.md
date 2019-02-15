# Instalación en otros Sistemas Operativos

1. Primero deberá ejecutar con mysql el contenido del archivo ***db.sql*** para crear la base de datos 

2. Las credenciales para gestión de base de datos que utiliza la aplicación se encuentran en el archivo ***.env***, en el caso que las suyas sean distintas a las predefinidas en el archivo, pueden ser cambiadas

3. Dentro de la carpeta de la aplicación deberá ejecutar en una terminal el comando ***php artisan migrate***

4. Luego el comando ***php artisan db:seed --class RolesTableSeeder***

5. Después ***php artisan db:seed --class UsersTableSeeder***

6. Posteriormente para correr la app ejecute el comando ***php -S localhost:8089 -t public***

7. Luego debe ejecutar la aplicación cliente con ***ng serve***

### Credenciales

**Email:** tarantino@gmail.com

**Password** 123456