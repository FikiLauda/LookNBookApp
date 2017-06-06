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
    public class CommentController : ApiController
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
        [Route("Comments")]
        public IQueryable<Comment> m1()
        {
            return db.AppComments;
        }

        [HttpGet]
        [Route("Comments/{id}")]
        public IHttpActionResult m2(int id)
        {
            bool isAdmin = UserManager.IsInRole(User.Identity.Name, "Admin");//User.Identity.Name => Username Identity User-a! UserManager trazi po njegovom username-u, i onda poredi! 
            var user = db.Users.FirstOrDefault(u => u.UserName == User.Identity.Name);//Vadimo iz Identity baze po username-u Identity User-a, koji u sebi sadrzi AppUser-a!
            if (isAdmin /*|| (user != null && user.appUserId.Equals(id))*/)//Ako korisnik nije admin, i nije AppUser koji trazi podatke o sebi, nije autorizovan!
            {
                Comment appComment = db.AppComments.Find(id);
                if (appComment == null)
                {
                    return NotFound();
                }

                return Ok(appComment);
            }

            return Unauthorized();
        }

        [Authorize]
        [HttpPut]
        [Route("Comments/{id}/{id1}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult m3(int id, int id1, Comment appComment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != appComment.AccId && id !=appComment.USerId)
            {
                return BadRequest();
            }

            db.Entry(appComment).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommentExists(id, id1))
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

        [Authorize]
        [HttpPost]
        [Route("Comments")]
        [ResponseType(typeof(Comment))]
        public IHttpActionResult m4(Comment appComment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AppComments.Add(appComment);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { controller = "Comment", accId = appComment.AccId, userId = appComment.USerId }, appComment);
        }

        [Authorize]
        [HttpDelete]
        [Route("Comments/{id}")]
        [ResponseType(typeof(Comment))]
        public IHttpActionResult m5(int id)
        {
            Comment appComment = db.AppComments.Find(id);
            if (appComment == null)
            {
                return NotFound();
            }

            db.AppComments.Remove(appComment);
            db.SaveChanges();

            return Ok(appComment);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CommentExists(int id, int id1)
        {
            return db.AppComments.Count(e => e.AccId == id && e.USerId == id1) > 0;
        }
    }
}
