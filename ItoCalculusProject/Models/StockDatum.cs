using System;


namespace ItoCalculusProject.Models
{
    public class StockDatum
    {
        public int ID { get; set; }

        public decimal OpenPrice { get; set; }
        public decimal ClosePrice { get; set; }
        public int Time { get; set; }
    }
}
