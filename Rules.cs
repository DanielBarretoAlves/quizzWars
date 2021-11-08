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
                Console.Write("[ "+ table[i]+" ] ");
            }
            Console.WriteLine("");        }
    }
    
}