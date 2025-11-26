@extends('Backend.back')

@section('admincontent')

    <div class="row">

        <div>
            <h1>{{ number_format($order->total) }}</h1>
        </div>

        <div class="col-6">
            <form action="{{ url('admin/order/'. $order->idorder) }}" method="post">
                @csrf

                @method('PUT')

                <div class="mt-2">
                    <label class="form-label" for="">Total</label>
                    <input class="form-control" min="{{ $order->total }}" value="{{ $order->total }}" type="number" name="bayar" id="">
                    <span class="text-danger">
                        @error('kategori')
                            {{ $message }}
                        @enderror
                    </span>
                </div>

                <div class="mt-4">
                    <button class="btn btn-primary" type="submit">BAYAR</button>
                </div>


            </form>
        </div>
    </div>

@endsection