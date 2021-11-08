using System;
using System.Collections.Generic;
using System.Linq;

namespace Game
{
    public class Program
    {

        public static string createName()
        {
            Console.WriteLine("Digite Seu Nome");
            return Console.ReadLine();
        }

        public static int creatTableSize()
        {
            Console.WriteLine("Informe o tamanho do tabuleiro");
            return int.Parse(Console.ReadLine());
        }
        public static void Main(string[] args)
        {
            string name;
            int tableSize;
            int pontuation = 0;
            Console.WriteLine("************************");
            Console.WriteLine("Bem Vindo");
            Console.WriteLine("************************");
            name = createName();
            tableSize = creatTableSize();
            int pos = 0;
            bool running = true;
            Rules game = new Rules();
            while (running != false)
            {
                game.showTable(tableSize, pos);
                int mov = game.showMove();
                pos+= mov;
                switch (mov)
                {
                    case 1:

                    break;
                    case 2:

                    break;
                    
                    default:
                    game.hardQuestion();
                    break;
                }


                running = false;
            }
        }
    }
}