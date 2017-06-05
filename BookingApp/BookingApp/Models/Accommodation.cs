using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Accommodation
    {
        public int Id { get; set; }

        [StringLength(256)]
        [Required]
        public string Name { get; set; }

        [StringLength(1000)]
        public string Description { get; set; }

        [StringLength(256)]
        [Required]
        public string Address { get; set; }

        [Range(1,5)]
        [Required]
        public decimal AverageGrade { get; set; }

        [Required]
        public decimal Latitude { get; set; }

        [Required]
        public decimal Longitude { get; set; }

        [Required]
        public string ImageUrl { get; set; }

        [Required]
        public bool Approved { get; set; }

        public int AccTypeId { get; set; }

        [ForeignKey("AccTypeId")]
        public AccommodationType Type { get; set; }

        public int PlaceId { get; set; }

        [ForeignKey("PlaceId")]
        public Place Place { get; set; }

        public List<Comment> Comments { get; set; }

        public int OwnerId { get; set; }

        [ForeignKey("OwnerId")]
        public AppUser Owner { get; set; }
    }
}