<?php namespace App\Http\Controllers;

use App\Role;
use Illuminate\Support\Facades\Input;

class RolesController extends Controller {

    const MODEL = "App\Role";

    public function get($id) {

        $role = Role::find($id);

        return response()->json($role, 200);
    }

    public function all() {
        $roles = Role::all();

        return response()->json($roles, 200);
    }

}
