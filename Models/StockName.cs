using System;
using System.Collections.Generic;

namespace ItoCalculusProject.Models
{
    public class StockNameHandler
    {
        public int StockID { get; set; }
        public int StockName { get; set; }
        public virtual IList<StockData> StockDatas { get; set; }
    }
}
