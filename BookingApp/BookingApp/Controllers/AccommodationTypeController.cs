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
    public class AccommodationTypeController : ApiController
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
        [Route("AccommodationTypes")]
        public IQueryable<AccommodationType> m1()
        {
            return db.AppAccommodationTypes;
        }

        [HttpGet]
        [Route("AccommodationTypes/{id}")]
        public IHttpActionResult m2(int id)
        {
            bool isAdmin = UserManager.IsInRole(User.Identity.Name, "Admin");//User.Identity.Name => Username Identity User-a! UserManager trazi po njegovom username-u, i onda poredi! 
            var user = db.Users.FirstOrDefault(u => u.UserName == User.Identity.Name);//Vadimo iz Identity baze po username-u Identity User-a, koji u sebi sadrzi AppUser-a!
            if (isAdmin /*|| (user != null && user.appUserId.Equals(id))*/)//Ako korisnik nije admin, i nije AppUser koji trazi podatke o sebi, nije autorizovan!
            {
                AccommodationType appAccommodationType = db.AppAccommodationTypes.Find(id);
                if (appAccommodationType == null)
                {
                    return NotFound();
                }

                return Ok(appAccommodationType);
            }

            return Unauthorized();
        }

        [Authorize(Roles = "Admin, Manager")]
        [HttpPut]
        [Route("AccommodationTypes/{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult m3(int id, AccommodationType appAccommodationType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != appAccommodationType.Id)
            {
                return BadRequest();
            }

            db.Entry(appAccommodationType).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccommodationExists(id))
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

        [Authorize(Roles = "Admin, Manager")]
        [HttpPost]
        [Route("AccommodationTypes")]
        [ResponseType(typeof(AccommodationType))]
        public IHttpActionResult m4(AccommodationType appAccommodationType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AppAccommodationTypes.Add(appAccommodationType);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { controller = "AccommodationType", id = appAccommodationType.Id }, appAccommodationType);
        }

        [Authorize(Roles = "Admin, Manager")]
        [HttpDelete]
        [Route("AccommodationTypes/{id}")]
        [ResponseType(typeof(AccommodationType))]
        public IHttpActionResult m5(int id)
        {
            AccommodationType appAccommodationType = db.AppAccommodationTypes.Find(id);
            if (appAccommodationType == null)
            {
                return NotFound();
            }

            db.AppAccommodationTypes.Remove(appAccommodationType);
            db.SaveChanges();

            return Ok(appAccommodationType);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AccommodationExists(int id)
        {
            return db.AppAccommodationTypes.Count(e => e.Id == id) > 0;
        }
    }
}
