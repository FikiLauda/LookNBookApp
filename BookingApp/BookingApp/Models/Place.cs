using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Place
    {
        public int Id { get; set; }

        [StringLength(256)]
        [Required]
        public string Name { get; set; }

        public List<Accommodation> Accomodations { get; set; }

        public int RegionId { get; set; }

        [ForeignKey("RegionId")]
        public Region Region { get; set; }
    }
}