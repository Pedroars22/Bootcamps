using System; 

class DIO {

    static void Main(string[] args) { 

     string str;
            while((str=Console.ReadLine())!= null)
            {
                if ( str == null  )
                {
                       
                }
                else          //Escreva o seu código nos espaços em branco
                { 
                    int x = int.Parse(str);
                    if ( x == 0 )
                    {
                    Console.WriteLine("vai ter copa!"); 
                    }
                    else
                    {
                        Console.WriteLine("vai ter duas!");
                    }
                }
            }

    }

}