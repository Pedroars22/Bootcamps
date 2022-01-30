using System; 

class DIO {

    static void Main(string[] args) { 

    int x = int.Parse(Console.ReadLine());
              
            if (x % 2 != 0)
            {
                x = x + 1;
            } else
            {
                x = x + 2;
            }
        Console.WriteLine(x);
    }

}