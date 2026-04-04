#include <iostream>

using namespace std;

int main()
{
    int t;
    cout << "Perulangan!" <<endl<<endl;
    cout << "Program Perulangan For" <<endl;

        for (int i=1; i<=5; i++)
        {
            for (int j=1; j<=3; j++)
            {
                cout << "Ini i ke- " <<i<< " dan ini j ke- "<<j;
                cout<<endl;
            }
        }

    return 0;
}
