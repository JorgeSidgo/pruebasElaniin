
@ECHO OFF

php artisan migrate
php artisan db:seed --class RolesTableSeeder
php artisan db:seed --class UsersTableSeeder
php -S localhost:8089 -t public
