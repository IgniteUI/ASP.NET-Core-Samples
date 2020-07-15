using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;

namespace DockManager_DataAnalysis
{
    public class StaticData
    {
        static Random Random = new Random();
        public static List<string> Settlements = new List<string> { "Deliverable", "Cash" };
        public static List<string> Contracts = new List<string> { "Forwards", "Futures", "Options", "Swap", "CFD" };
        public static List<string> Types = new List<string> { "Copper", "Coal", "Coffee", "Natural Gas", "Soy Meat", "US 30YR Future", "Diesel", "Lumber", "Oil", "Soy oil", "LV Cattle", "AUD/USD Future", "Rice", "Soybean", "Cocoa", "RBOB Gas", "US 2Y Future", "FD Cattle", "S&P 600 MINI", "Corn", "S&P MID MINI", "USD/CHF Future", "DOW Future", "Platinum", "Oats", "Silver", "S&P Future", "Wheat", "Sugar", "Uranium", "USD IDX Future", "Milk", "GBP/USD Future", "Palladium", "US 10YR Future", "OJ Future", "Cotton", "Lean Hogs", "Ethanol", "NAS Future", "Euro$ 3M", "Gold", "USD/JPY Future", "Brent", "USD/CAD Future" };
        public static List<string> Categories = new List<string> { "Metal", "Oil", "Agriculture", "Interest Rate", "Livestock", "Currencies", "Index" };
        public static Dictionary<string, List<string>> Regions = new Dictionary<string, List<string>>();
        public static List<string> DynamicProps = new List<string> { "OpenPrice", "Buy", "Sell", "StartY", "HighY", "LowY", "HighD", "LowD" };
        static StaticData()
        {
            Regions.Add("North America", new List<string>() { "Canada", "United States", "Mexico" });
            Regions.Add("Middle East", new List<string>() { "Turkey", "Iraq", "Saudi Arabia", "Syria", "UAE", "Israel", "Jordan", "Lebanon", "Oman", "Kuwait", "Qatar", "Bahrain", "Iran" });
            Regions.Add("Europe", new List<string>() { "Russia", "Germany", "France", "United Kingdom", "Italy", "Spain", "Poland", "Romania", "Netherlands", "Belgium", "Greece", "Portugal", "Czech Republic", "Hungary", "Sweden", "Austria", "Switzerland", "Bulgaria", "Denmark", "Finland", "Slovakia", "Norway", "Ireland", "Croatia", "Slovenia", "Estonia", "Iceland" });
            Regions.Add("Africa", new List<string>() { "Nigeria", "Ethiopia", "Egypt", "South Africa", "Algeria", "Morocco", "Cameroon", "Niger", "Senegal", "Tunisia", "Libya" });
            Regions.Add("Asia Pacific", new List<string>() { "Afghanistan", "Australia", "Azerbaijan", "China", "Hong Kong", "India", "Indonesia", "Japan", "Malaysia", "New Zealand", "Pakistan", "Philippines", "Korea", "Singapore", "Taiwan", "Thailand" });
            Regions.Add("South America", new List<string>() { "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela" });

        }
        public double RandomDouble(double min, double max)
        {
            return Random.NextDouble() * (max - min) + min;
        }

        public string RandomString(List<string> collection)
        {
            return collection[Random.Next(collection.Count)];
        }

        private static StaticData instance = null;
        private static readonly object padlock = new object();

        protected StaticData()
        {
        }

        public static StaticData Instance
        {
            get
            {
                lock (padlock)
                {
                    if (instance == null)
                    {
                        instance = new StaticData();
                    }
                    return instance;
                }
            }
        }

    }
    [Serializable]
    public class FinancialRecord: DynamicObject
    {
        private StaticData Data = StaticData.Instance;

        public Dictionary<string, double> PriceDiffs { get; set; }

        public double this[string index]
        {
            get
            {
                return this.PriceDiffs[index];
            }

            set
            {
                this.PriceDiffs.Add(index, value);
            }
        }

        public FinancialRecord()
        {
            PriceDiffs = new Dictionary<string, double>();
            Category = Data.RandomString(StaticData.Categories);
            Type = Data.RandomString(StaticData.Types);
            Country = Data.RandomString(StaticData.Regions.Keys.ToList());
            Region = Data.RandomString(StaticData.Regions[Country]);
            Contact = Data.RandomString(StaticData.Contracts);
            Settlement = Data.RandomString(StaticData.Settlements);

            Price = Data.RandomDouble(0.4100, 18066.39);
            StartY = Data.RandomDouble(0.440, 16691);
            Buy = Data.RandomDouble(0.436, 17712.146);
            HighY = Data.RandomDouble(0.484, 18083);
            OpenPrice = Data.RandomDouble(0.4363, 17711);
            LowY = Data.RandomDouble(0.395, 15299);
            HighD = Data.RandomDouble(0, 17727);
            LowD = Data.RandomDouble(0, 17642);
            Sell = Data.RandomDouble(0.436, 17712.157);

            this.GetType().GetProperties().ToList()
                                          .FindAll(prop => StaticData.DynamicProps.Contains(prop.Name))
                                          .ForEach(prop => this[$"{prop.Name}Diff"] = this.GetPriceDiff((double)prop.GetValue(this, null)));
        }
        public string Category { get; set; }
        public string Type { get; set; }
        public string Country { get; set; }

        public double Price { get; set; }

        public double StartY { get; set; }
        public double Buy { get; set; }
        public double HighY { get; set; }
        public double OpenPrice { get; set; }
        public double LowY { get; set; }
        public double HighD { get; set; }
        public double LowD { get; set; }
        public double Sell { get; set; }
        public string Region { get; set; }
        public string Contact { get; set; }
        public string Settlement { get; set; }

        public double GetPriceDiff(double from)
        {
            return (((from - Price) / Price) * 100) * 150;
        }
    }
}


