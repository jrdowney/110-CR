namespace PropertyRental.Models
{
    public class Property{
        public int id {get; set;}

        public string name {get; set;}

        public int rooms {get; set;}

        public decimal bath {get; set;}

        public decimal price {get; set;}

        public int sqrFeet {get; set;}

        public string imageUrl {get; set;}

        public string description {get; set;}
    }
}