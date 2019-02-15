<?php namespace App;


use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

class User extends Model implements AuthenticatableContract, AuthorizableContract{

    use Authenticatable, Authorizable;

    protected $fillable = [
        'firstname', 'lastname',
        'username', 'email',
        'password', 'etc_token',
        'role_id'
    ];

    protected $hidden = [
        'password'
    ];

    protected $dates = [];

    public static $rules = [
        // Validation rules
    ];

    // Relationships

    public function role() {
        return $this->belongsTo('App\Role');
    }

}
