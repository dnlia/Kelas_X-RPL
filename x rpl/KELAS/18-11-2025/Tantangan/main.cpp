#include <iostream>

using namespace std;

int main()
{
    int t;
    cout<< "Pengulangan!"<<endl;
    cout<< "Program Pengulangan For"<<endl<<endl;
    cout << "Inputkan Tinggi Segitiga Sama Kaki: ";
    cin>>t;

        for (int i=1; i<=t; i++)
        {
            for (int k=2; k>=i-t; k--)
            {
                cout<< " 0";
            }
            for (int j=t; j>=i+1; j--)
            {
                cout<< " +";
            }

            cout<<endl;
        }
}
