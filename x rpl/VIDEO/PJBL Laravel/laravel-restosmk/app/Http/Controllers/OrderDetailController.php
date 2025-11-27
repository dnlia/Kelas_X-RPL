<?php

namespace App\Http\Controllers;

use App\Models\OrderDetail;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderDetailRequest;
use App\Http\Requests\UpdateOrderDetailRequest;
use Illuminate\Http\Request;

class OrderDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $details = OrderDetail::join('orders', 'order_details.idorder', '=', 'orders.idorder')
                                ->join('menus', 'order_details.idmenu', '=', 'menus.idmenu')
                                ->join('pelanggans', 'orders.idpelanggan', '=', 'pelanggans.idpelanggan')
                                ->select(['order_details.*', 'orders.*', 'menus.*', 'pelanggans.*'])
                                ->paginate(3);
        return view('Backend.detail.select', ["details" => $details]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $tglmulai = $request->tglmulai;
        $tglakhir = $request->tglakhir;

        $details = OrderDetail::join('orders', 'order_details.idorder', '=', 'orders.idorder')
        ->join('menus', 'order_details.idmenu', '=', 'menus.idmenu')
        ->join('pelanggans', 'orders.idpelanggan', '=', 'pelanggans.idpelanggan')
        ->whereBetween('orders.tglorder', [$tglmulai, $tglakhir])
        ->select(['order_details.*', 'orders.*', 'menus.*', 'pelanggans.*'])
        ->paginate(3);
        return view('Backend.detail.select', ["details" => $details]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderDetailRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(OrderDetail $orderDetail)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrderDetail $orderDetail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderDetailRequest $request, OrderDetail $orderDetail)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderDetail $orderDetail)
    {
        //
    }
}
