<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        DB::table('users')
            ->insert([
                'firstname'=>'Quentin',
                'lastname'=>'Tarantino',
                'username'=>'quentintarantino',
                'email'=>'tarantino@gmail.com',
                'password'=> Hash::make('123456'),
                'etc_token'=>str_random(64),
                'created_at'=>new DateTime,
                'updated_at'=>new DateTime,
                'role_id'=>2
            ]);

        DB::table('users')
            ->insert([
                'firstname'=>'Wes',
                'lastname'=>'Anderson',
                'username'=>'wesanderson',
                'email'=>'wes@gmail.com',
                'password'=> Hash::make('123456'),
                'etc_token'=>str_random(64),
                'created_at'=>new DateTime,
                'updated_at'=>new DateTime,
                'role_id'=>1
            ]);

        DB::table('users')
            ->insert([
                'firstname'=>'Stanley',
                'lastname'=>'Kubrick',
                'username'=>'stanleykubrick',
                'email'=>'delarge@gmail.com',
                'password'=> Hash::make('123456'),
                'etc_token'=>str_random(64),
                'created_at'=>new DateTime,
                'updated_at'=>new DateTime,
                'role_id'=>1
            ]);
    }
}
