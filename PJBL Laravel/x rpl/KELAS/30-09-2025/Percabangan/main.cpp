#include <iostream>

using namespace std;

int main(){

    double inputTanggal;
    int tgl, bln;
    string Zodiak;

    // jumlah tanggal tiap bulan
    int tanggalPerBulan[13] = {
        0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    };


    cout << "==========  Cek Zodiak Kamu-!!!  ==========" << endl;



    cout << "Masukkan Tanggal Lahir (1-31) :";
    cin >> inputTanggal;

    // jika input angka desimal
    if (inputTanggal != (int)inputTanggal) {
        cout << "\n Input Tidak Boleh Berupa Angka Desimal!!" << endl;
        return 0;
    }

    // jika input huruf atau simbol
    if (cin.fail()) {
        cout << "\n Input Tidak Boleh Berupa huruf atau simbol!!" << endl;
        return 0;
    }

    tgl = (int)inputTanggal;

    // jika tanggal melebihi yang dimiliki bulan
    if (tgl < 1 || tgl > 31 ){
        cout << "\n Tanggal yang Dimasukkan Tidak Valid!!" << endl;
        return 0;
    }




    double inputBulan;

    cout << "Masukkan Bulan Lahir (1-12) :";
    cin >> inputBulan;

    // jika input angka desimal
    if (inputBulan != (int)inputBulan) {
        cout << "\n Input Tidak Boleh Berupa Angka Desimal!!" << endl;
        return 0;
    }

    // jika input huruf atau simbol
    if (cin.fail()) {
        cout << "\n Input Tidak Boleh Berupa huruf atau simbol!!" << endl;
        return 0;
    }

    bln = (int)inputBulan;

    // jika angka melebihi yang dimiliki bulan
    if (bln < 1 || bln > 12 ){
        cout << "\n Bulan yang Dimasukkan Tidak Ada!!" << endl;
        return 0;
    }



    // kesesuaian tanggal dan bulan
    if (tgl > tanggalPerBulan[bln]){
        cout << "\n Tanggal yang Anda Masukkan Tidak Ada Dalam Bulan" << endl;
        return 0;
    }




    // ketentuan setiap zodiak
    if ((tgl >= 20 && bln == 1) || (tgl <= 18 && bln == 2))
        Zodiak = "Aquarius";
    else if ((tgl >= 19 && bln == 2) || (tgl <= 20 && bln == 3))
        Zodiak = "Pisces";
    else if ((tgl >= 21 && bln == 3) || (tgl <= 19 && bln == 4))
        Zodiak = "Aries";
    else if ((tgl >= 20 && bln == 4) || (tgl <= 20 && bln == 5))
        Zodiak = "Taurus";
    else if ((tgl >= 21 && bln == 5) || (tgl <= 20 && bln == 6))
        Zodiak = "Gemini";
    else if ((tgl >= 21 && bln == 6) || (tgl <= 22 && bln == 7))
        Zodiak = "Cancer";
    else if ((tgl >= 23 && bln == 7) || (tgl <= 22 && bln == 8))
        Zodiak = "Leo";
    else if ((tgl >= 23 && bln == 8) || (tgl <= 22 && bln == 9))
        Zodiak = "Virgo";
    else if ((tgl >= 23 && bln == 9) || (tgl <= 22 && bln == 10))
        Zodiak = "Libra";
    else if ((tgl >= 23 && bln == 10) || (tgl <= 21 && bln == 11))
        Zodiak = "Scorpio";
    else if ((tgl >= 22 && bln == 11) || (tgl <= 21 && bln == 12))
        Zodiak = "Sagitaurus";
    else if ((tgl >= 22 && bln == 12) || (tgl <= 19 && bln == 1))
        Zodiak = "Capricorn";

    cout << "\n------------------------------\n";
    cout << "\nZodiak Kamu Adalah :" << Zodiak <<endl;
    cout << "\n------------------------------\n";

    return 0;

}
