using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class AccommodationType
    {
        public int Id { get; set; }

        [StringLength(256)]
        [Index(IsUnique = true)]
        [Required]
        public string Name { get; set; }

        public List<Accommodation> Accomodations { get; set; }
    }
}