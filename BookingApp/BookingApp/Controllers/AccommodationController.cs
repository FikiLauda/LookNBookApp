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
    public class AccommodationController : ApiController
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
        [Route("Accommodations")]
        public IQueryable<Accommodation> m1()
        {
            return db.AppAccommodations;
        }

        [HttpGet]
        [Route("Accommodations/{id}")]
        public IHttpActionResult m2(int id)
        {
            bool isAdmin = UserManager.IsInRole(User.Identity.Name, "Admin");//User.Identity.Name => Username Identity User-a! UserManager trazi po njegovom username-u, i onda poredi! 
            var user = db.Users.FirstOrDefault(u => u.UserName == User.Identity.Name);//Vadimo iz Identity baze po username-u Identity User-a, koji u sebi sadrzi AppUser-a!
            if (isAdmin /*|| (user != null && user.appUserId.Equals(id))*/)//Ako korisnik nije admin, i nije AppUser koji trazi podatke o sebi, nije autorizovan!
            {
                Accommodation appAccommodation = db.AppAccommodations.Find(id);
                if (appAccommodation == null)
                {
                    return NotFound();
                }

                return Ok(appAccommodation);
            }

            return Unauthorized();
        }

        [Authorize(Roles = "Admin, Manager")]
        [HttpPut]
        [Route("Accommodations/{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult m3(int id, Accommodation appAccommodation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != appAccommodation.Id)
            {
                return BadRequest();
            }

            db.Entry(appAccommodation).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccomodationExists(id))
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

        [Authorize(Roles = "Manager")]
        [HttpPost]
        [Route("Accommodations")]
        [ResponseType(typeof(Accommodation))]
        public IHttpActionResult m4(Accommodation appAccommodation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AppAccommodations.Add(appAccommodation);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { controller = "Accommodation", id = appAccommodation.Id }, appAccommodation);
        }

        [Authorize(Roles = "Admin, Manager")]
        [HttpDelete]
        [Route("Accommodations/{id}")]
        [ResponseType(typeof(Accommodation))]
        public IHttpActionResult m5(int id)
        {
            Accommodation appAccommodation = db.AppAccommodations.Find(id);
            if (appAccommodation == null)
            {
                return NotFound();
            }

            db.AppAccommodations.Remove(appAccommodation);
            db.SaveChanges();

            return Ok(appAccommodation);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AccomodationExists(int id)
        {
            return db.AppAccommodations.Count(e => e.Id == id) > 0;
        }
    }
}
