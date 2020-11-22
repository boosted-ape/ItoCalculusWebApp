using System;
using System.Collections.Generic;
using System.Linq;

namespace ItoCalculusProject.Models
{
    public class StockNameHandler
    {
        public int StockID { get; set; }
        public int StockName { get; set; }
        public readonly List<StockDatum> _stockData = new List<StockDatum>();
        public IReadOnlyCollection<StockDatum> StockData => _stockData.AsReadOnly();

        public void AddStockData(int Id, decimal openPrice, decimal closePrice, int time)
        {
            if(!StockData.Any(i => i.ID == Id))
            {
                _stockData.Add(new StockDatum()
                {
                    OpenPrice = openPrice,
                    ClosePrice = closePrice,
                    Time = time
                });
                return;
            }
            var existingData = StockData.FirstOrDefault(i => i.ID == Id);
            
        }
    }
}
