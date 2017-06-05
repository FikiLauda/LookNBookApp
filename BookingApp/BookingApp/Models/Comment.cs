using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Comment
    {
        [Range(1,5)]
        [Required]
        public int Grade { get; set; }

        [StringLength(300)]
        public string Text { get; set; }

        [Key]
        [Column(Order = 1)]
        public int AccId { get; set; }

        [ForeignKey("AccId")]
        public Accommodation Accommodation { get; set; }

        [Key]
        [Column(Order = 2)]
        public int USerId { get; set; }

        [ForeignKey("USerId")]
        public AppUser User { get; set; }
    }
}