using BookingApp.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace BookingApp.Controllers
{
    [RoutePrefix("api")]
    public class RoomController : ApiController
    {
        private BAContext db = new BAContext();

        private ApplicationUserManager _userManager;

        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? Request.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }

        [HttpGet]
        [Route("Rooms")]
        public IQueryable<Room> m1()
        {
            return db.AppRooms;
        }

        [Authorize]
        [HttpGet]
        [Route("Rooms/{id}")]
        public IHttpActionResult m2(int id)
        {
            bool isAdmin = UserManager.IsInRole(User.Identity.Name, "Admin");//User.Identity.Name => Username Identity User-a! UserManager trazi po njegovom username-u, i onda poredi! 
            var user = db.Users.FirstOrDefault(u => u.UserName == User.Identity.Name);//Vadimo iz Identity baze po username-u Identity User-a, koji u sebi sadrzi AppUser-a!
            if (isAdmin /*|| (user != null && user.appUserId.Equals(id))*/)//Ako korisnik nije admin, i nije AppUser koji trazi podatke o sebi, nije autorizovan!
            {
                Room appRoom = db.AppRooms.Find(id);
                if (appRoom == null)
                {
                    return NotFound();
                }

                return Ok(appRoom);
            }

            return Unauthorized();
        }

        [Authorize]
        [HttpPut]
        [Route("Rooms/{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult m3(int id, Room appRoom)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != appRoom.Id)
            {
                return BadRequest();
            }

            db.Entry(appRoom).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoomExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [HttpPost]
        [Route("Rooms")]
        [ResponseType(typeof(Room))]
        public IHttpActionResult m4(Room appRoom)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AppRooms.Add(appRoom);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { controller = "Room", id = appRoom.Id }, appRoom);
        }

        [HttpDelete]
        [Route("Rooms/{id}")]
        [ResponseType(typeof(Room))]
        public IHttpActionResult m5(int id)
        {
            Room appRoom = db.AppRooms.Find(id);
            if (appRoom == null)
            {
                return NotFound();
            }

            db.AppRooms.Remove(appRoom);
            db.SaveChanges();

            return Ok(appRoom);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RoomExists(int id)
        {
            return db.AppRooms.Count(e => e.Id == id) > 0;
        }
    }
}
