@extends('Backend.back')

@section('admincontent')

    <h2>Update Data</h2>

    <div class="row">
        <div class="col-6">
            <form action="{{ url('admin/postmenu/'.$menu->idmenu) }}" method="post" enctype="multipart/form-data">
                @csrf

                <select class="form-select" name="idkategori">
                    @foreach ($kategoris as $kategori)
                        <option @selected($kategori->idkategori==$menu->idkategori) value="{{ $kategori->idkategori }}">{{ $kategori->kategori }}</option>
                    @endforeach
                </select>

                <div class="mt-2">
                    <label class="form-label" for="">Menu</label>
                    <input class="form-control" type="text" value="{{ $menu->menu }}" name="menu" id="">
                    <span class="text-danger">
                        @error('menu')
                            {{ $message }}
                        @enderror
                    </span>
                </div>

                <div class="mt-2">
                    <label class="form-label" for="">Deskripsi</label>
                    <input class="form-control" type="text" value="{{ $menu->deskripsi }}" name="deskripsi" id="">
                    <span class="text-danger">
                        @error('deskripsi')
                            {{ $message }}
                        @enderror
                    </span>
                </div>

                <div class="mt-2">
                    <label class="form-label" for="">Harga</label>
                    <input class="form-control" type="number" value="{{ $menu->harga }}" name="harga" id="">
                    <span class="text-danger">
                        @error('harga')
                            {{ $message }}
                        @enderror
                    </span>
                </div>

                <div class="mt-2">
                    <label class="form-label" for="">Gambar</label>
                    <input class="form-control" type="file" name="gambar" id="">
                    <span class="text-danger">
                        @error('gambar')
                            {{ $message }}
                        @enderror
                    </span>
                </div>

                <div class="mt-4">
                    <button class="btn btn-primary" type="submit">Simpan</button>
                </div>


            </form>
        </div>
    </div>

@endsection