using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class RoomReservations
    {
        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }

        [Timestamp]
        [Required]
        public byte[] Timestamp { get; set; }

        [Key]
        [Column(Order = 1)]
        public int RoomId { get; set; }

        [ForeignKey("RoomId")]
        public Room Room { get; set; }

        [Key]
        [Column(Order = 2)]
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public AppUser User { get; set; }
    }
}