namespace Game
{
    class Rules
    {
        public void showTable(int length, int pos)
        {
            string[] table = new string[length];
            table[pos] = "X";
            for (int i = 0; i < length; i++)
            {
                Console.Write("[ " + table[i] + " ] ");
            }
            Console.WriteLine("");
        }


        public int showMove()
        {
            int number = 0;
            Console.WriteLine("Escola o Nivel da Pergunta");
            Console.WriteLine("1- Facil");
            Console.WriteLine("2 - Medio");
            Console.WriteLine("3 - Dificil");
            int choice = int.Parse(Console.ReadLine());
            switch (choice)
            {
                case 1:
                    number++;
                    break;

                case 2:
                    number = 2;

                    break;
                default:
                    number = 3;
                    break;
            }

            return number;
        }


        public void hardQuestion()
        {
            Console.WriteLine("O que significa 'Schlafzimmer'em Alemão");
            Console.WriteLine("1 - Quarto");
            Console.WriteLine("2 - Banheiro");
            Console.WriteLine("3 - Cozinha");
            int answer= int.Parse(Console.ReadLine());
            switch (answer)
            {
                case 1:
                Console.WriteLine("Correto");
                break;
                case 2:
                Console.WriteLine("Errado!");
                break;
                
                default:
                Console.WriteLine("Errado!");
                break;
            }

        }

        public void easyQuestion()
        {
            
        }

        public void mediumQuestion()
        {
            
        }







    }

}