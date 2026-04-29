#include <iostream>

using namespace std;

int main()
{
    int t;
    cout<< "Pengulangan!"<<endl;
    cout<< "Program Pengulangan For"<<endl<<endl;
    cout << "Inputkan angka untuk membuat Segitiga Sama Sisi: ";
    cin>>t;

        for (int i=1; i<=t; i++)
        {
            for (int k=t; k>=i; k--)
            {
                cout<<" ";
            }
            for (int j=1; j<=i; j++)
            {
                cout<<" +";
            }

            cout<<endl;
        }
}
