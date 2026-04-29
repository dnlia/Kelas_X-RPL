<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        return response()->json(Portfolio::all());
    }

    public function store(Request $request)
    {
        $path = null;

        if ($request->hasFile('gambar')) {
            $path = $request->file('gambar')->store('portfolio', 'public');
        }

        $portfolio = Portfolio::create([
            'nama_project' => $request->nama_project,
            'deskripsi' => $request->deskripsi,
            'link_project' => $request->link_project,
            'gambar' => $path
        ]);

        return response()->json($portfolio);
    }

    public function update(Request $request, $id)
    {
        $portfolio = Portfolio::find($id);

        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar')->store('portfolio', 'public');
            $portfolio->gambar = $gambar;
        }

        $portfolio->nama_project = $request->nama_project;
        $portfolio->deskripsi = $request->deskripsi;
        $portfolio->link_project = $request->link_project;

        $portfolio->save();

        return response()->json($portfolio);
    }

    public function destroy($id)
    {
        Portfolio::destroy($id);
        return response()->json(['message' => 'Terhapus']);
    }
}