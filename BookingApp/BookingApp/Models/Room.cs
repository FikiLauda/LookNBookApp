using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Room
    {
        public int Id { get; set; }

        [Required]
        public int RoomNumber { get; set; }

        [Range(1,4)]
        [Required]
        public int BedCount { get; set; }

        [StringLength(1000)]
        [Required]
        public string Description { get; set; }

        [Required]
        public int PricePerNight { get; set; }

        public int AccId { get; set; }

        [ForeignKey("AccId")]
        public Accommodation Accommodation { get; set; }

        public List<RoomReservations> Reservations { get; set; }
    }
}