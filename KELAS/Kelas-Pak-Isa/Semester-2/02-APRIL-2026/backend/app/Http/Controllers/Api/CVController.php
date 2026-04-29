<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CV;
use Illuminate\Http\Request;

class CVController extends Controller
{
    public function index()
    {
        return CV::first();
    }

    public function store(Request $request)
    {
        $cv = CV::updateOrCreate(
            ['id' => 1],
            [
                'nama_lengkap' => $request->nama_lengkap,
                'email'        => $request->email,
                'telepon'      => $request->telepon,
                'alamat'       => $request->alamat,
                'pendidikan'   => $request->pendidikan,
                'pengalaman'   => $request->pengalaman,
                'skills'       => $request->skills,
                'cita_cita'    => $request->cita_cita,
            ]
        );

        return response()->json($cv);
    }
}