<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{


    public function all(Request $request)
    {
        $users = User::all();
        return response()->json($users, 200);
    }

    public function get($id)
    {

        $user = User::find($id);

        return response()->json($user, 200);
    }

    public function create(Request $request)
    {
        $data = $request->json()->all();

        $user = User::create([
            'firstname' => $data['firstname'],
            'lastname' => $data['lastname'],
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'role_id' => $data['role_id'],
            'etc_token' => str_random(50)
        ]);


    }

    public function update(Request $request)
    {
        $data = $request->json()->all();

        $user = User::find($data['id']);
        $user->firstname = $data['firstname'];
        $user->lastname = $data['lastname'];
        $user->username = $data['username'];
        $user->email = $data['email'];
        $user->role_id = $data['role_id'];
        $user->save();

        return response()->json($user, 200);
    }

    public function delete($id, Request $request)
    {
        $user = User::find($id);

        if($user->etc_token == $request->header('etc_token')) {
            return response()->json(3, 200);
        }

        $user->delete();

        return response()->json(1, 200);
    }

    public function getToken(Request $request)
    {

        try {
            $data = $request->json()->all();

            $user = User::where('email', $data['email'])->first();

            if ($user && Hash::check($data['password'], $user->password)) {
                return response()->json($user, 200);
            } else {
                return response()->json('{id: null,
                                        firstname: null,
                                        lastname: null,
                                        username: null,
                                        email: null,
                                        role_id: 1
                                      }', 200);
            }
        } catch (ModelNotFoundException $e) {
            return response()->json(['error', 'No content'], 406);
        }
    }

}
