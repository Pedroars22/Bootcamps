using System; 

class DIO {

    static void Main(string[] args) { 

       for(int i = 1; i < 10; i++)
            {
                for(int j = 7; j > 4; j--)    //escreva seu código nos espaços em branco
                {
                    if (i % 2 != 0)
                    {
                        Console.WriteLine("I=" + i + " J=" + j);
                    }
                }
            }
    }

}