#include <iostream>

using namespace std;

int main()
{
    int t;
    cout << "Perulangan!"<<endl;
    cout << "Bangun Segitiga Siku-siku"<<endl<<endl;
    cout << "Inputkan Tinggi Segitiga Siku-siku : ";
    cin>>t;

    cout << "\n \n";
    cout << "Segitiga Siku-siku == kanan atas == \n";
        for (int i=1; i<=t; i++)
        {
            for (int k=1; k<=i-1; k++)
            {
                cout<<"  ";
            }
            for (int j=t; j>=i; j--)
            {
                cout<<" +";
            }

            cout<<endl;
        }


    cout << "\n \n";
    cout << "Segitiga Siku-siku == kanan bawah == \n";
        for (int i=1; i<=t; i++)
        {
            for (int k=t; k>=i; k--)
            {
                cout<<"  ";
            }
            for (int j=1; j<=i; j++)
            {
                cout<<" +";
            }

            cout<<endl;
        }


    cout << "\n \n \n";
    cout << "Segitiga Siku-siku == kiri atas == \n";
        for (int i=1; i<=t; i++)
        {
            for (int j=t; j>=i; j--)
            {
                cout<<" +";
            }
            for (int k=1; k<=i-1; k++)
            {
                cout<<"  ";
            }

            cout<<endl;
        }


    cout << "\n \n \n";
    cout << "Segitiga Siku-siku == kiri bawah == \n";
        for (int i=1; i<=t; i++)
        {
            for (int k=1; k<=i; k++)
            {
                cout<<" +";
            }

            cout<<endl;
        }
}
