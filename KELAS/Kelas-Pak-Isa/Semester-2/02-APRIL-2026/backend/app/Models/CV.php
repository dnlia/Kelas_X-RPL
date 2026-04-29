<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CV extends Model
{
    protected $table = 'tblcv';
    
    protected $fillable = [
        'nama_lengkap',
        'email',
        'telepon',
        'alamat',
        'pendidikan',
        'pengalaman',
        'skills',
        'cita_cita'
    ];
}
