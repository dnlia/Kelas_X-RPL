#include <iostream>

using namespace std;

int main()
{
    int t;
    cout << "Perulangan!"<<endl<<endl;
    cout << "Program Pengulangan For" <<endl;

        for (int i=1; i<=5; i++)
        {
            cout<< "\n";
            for (int j=1; j<=3; j++)
            {
                cout<< "Unit "<<i<<"."<<j;
                cout<<endl;
            }
        }

    return 0;
}
