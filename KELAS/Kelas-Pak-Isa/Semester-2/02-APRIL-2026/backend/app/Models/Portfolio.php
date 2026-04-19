<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    protected $table = 'tblporto';
    
    protected $fillable = [
        'nama_project', 
        'deskripsi', 
        'gambar',
        'link_project'
    ];
}