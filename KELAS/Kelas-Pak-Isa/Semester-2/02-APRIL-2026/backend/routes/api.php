<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CVController;
use App\Http\Controllers\Api\PortfolioController;

Route::get('/cv', [CVController::class, 'index']);
Route::post('/cv', [CVController::class, 'store']);

Route::get('/portfolio', [PortfolioController::class, 'index']);
Route::post('/portfolio', [PortfolioController::class, 'store']);
Route::put('/portfolio/{id}', [PortfolioController::class, 'update']);
Route::delete('/portfolio/{id}', [PortfolioController::class, 'destroy']);