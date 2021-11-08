using System;
using System.Collections.Generic;
using System.Linq;

namespace Game
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Rules rule = new Rules();
            rule.showTable(10,4);
            rule.showTable(10,5);
        }
    }
}