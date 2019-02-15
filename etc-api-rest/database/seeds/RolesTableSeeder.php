<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')
            ->insert([
                'desc'=>'Administrator',
                'created_at'=>new DateTime,
                'updated_at'=>new DateTime
            ]);

        DB::table('roles')
            ->insert(['desc'=>'Colaborator',
                'created_at'=>new DateTime,
                'updated_at'=>new DateTime
            ]);
    }
}
