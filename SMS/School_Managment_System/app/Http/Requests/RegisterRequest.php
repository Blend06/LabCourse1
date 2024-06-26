<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password; // Import the Password class


class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:55',
            'mbiemri' => 'required|string|max:55',
            'mosha' => 'required|integer|max:3',
            'email' => 'required|email|unique:studenti,email',
            'password' => [
                'required',
                Password::min(8)
                    ->letters()
                    ->symbols()
            ]

        ];
    }
}
