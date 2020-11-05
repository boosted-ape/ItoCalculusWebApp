using System;


namespace ItoCalculusProject.Models
{
    public class StockData
    {
        public int ID { get; set; }

        public int OpenPrice { get; set; }
        public int ClosePrice { get; set; }
        public int Time { get; set; }
    }
}
