<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return view('Backend.user.select', ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('Backend.user.insert');
    }

    /**
     * Store a newly created resource in storage.
     */ 
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required | min: 3'
        ]);

        User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'level' => $request->level
        ]);

        return redirect('admin/user');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $users = User::where('id', $id)->get();
        $levels = User::where('level', $users[0] ['level']);
        $jumlah = $levels->count();

        if ($jumlah == 1) {
            session()->flash('pesan', 'Data hanya satu, tidak bisa dihapus');
        } else {
            User::where('id', $id)->delete();
        }

        return redirect('admin/user');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::where('id', $id)->first();
        return view('Backend.user.update', ['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->validate([
            'password'=>'required | min:3'
        ]);

        User::where('id', $id)->update([
            'password' => bcrypt($data['password'])
        ]);

        return redirect('admin/user');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
