<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\StudentiController;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\Studenti;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    
    public function register(RegisterRequest $request)
{
    $data = $request->validated();
    /** @var \App\Models\Studenti $studenti */
    $studenti = Studenti::create([
        'Emri' => $data['name'],
        'Mbiemri' => $data['mbiemri'],
        'Mosha' => $data['mosha'],
        'Email' => $data['email'],
        'Password' => $data['password'],
        'pozita' => $data['pozita']
    ]);

    $token = $studenti->createToken('main')->plainTextToken; // Assign token to a variable

    return response(compact('studenti', 'token')); // Return token in the response
}

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)){
            return response([
                'message' => 'Email adress or password is incorrect'
            ]);

        }
        /** @var Studenti $studenti */
        $studenti = Auth::user();
        $token = $studenti->createToken('main')->plainTextToken;
        return response(compact('user','token'));

    }
    public function logout(Request $request)
{
    /** @var Studenti $studenti */
    $studenti = $request->user();
    $studenti->currentAccessToken()->delete(); // Change $user to $studenti
    return response('', 204);
}

}
