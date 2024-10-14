<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVehicleRequest extends FormRequest
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
            'name' => ['required'],
            'registration' => ['required'],
            'no_seats' => ['required', 'integer', 'min:1'],
            'can_tow' => ['required', 'boolean'],
            'purchase_price' => ['required', 'numeric', 'min:0'],
        ];
    }
}
