<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller; // Ensure this is imported
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\Studenti;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller // Ensure it extends Controller
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
            'Password' => bcrypt($data['password']), // Encrypt the password
            'pozita' => $data['pozita']
        ]);

        $token = $studenti->createToken('main')->plainTextToken;

        return response(compact('studenti', 'token'));
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Email address or password is incorrect'
            ], 401);
        }

        /** @var Studenti $studenti */
        $studenti = Auth::user();
        $token = $studenti->createToken('main')->plainTextToken;

        return response(compact('studenti', 'token'));
    }

    public function logout(Request $request)
    {
        /** @var Studenti $studenti */
        $studenti = $request->user();
        $studenti->currentAccessToken()->delete();
        
        return response('', 204);
    }
}
