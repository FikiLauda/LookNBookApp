using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BookingApp.Models;

namespace BookingApp.Controllers
{
    public class RoomReservationsController : ApiController
    {
        private BAContext db = new BAContext();

        // GET: api/RoomReservations
        public IQueryable<RoomReservations> GetAppRoomReservations()
        {
            return db.AppRoomReservations;
        }

        // GET: api/RoomReservations/5
        [ResponseType(typeof(RoomReservations))]
        public IHttpActionResult GetRoomReservations(int id)
        {
            RoomReservations roomReservations = db.AppRoomReservations.Find(id);
            if (roomReservations == null)
            {
                return NotFound();
            }

            return Ok(roomReservations);
        }

        // PUT: api/RoomReservations/5
        [ResponseType(typeof(void))]
        [Authorize]
        public IHttpActionResult PutRoomReservations(int id, int id1, RoomReservations roomReservations)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != roomReservations.RoomId && id1 != roomReservations.UserId)
            {
                return BadRequest();
            }

            db.Entry(roomReservations).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoomReservationsExists(id,id1))
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

        // POST: api/RoomReservations
        [ResponseType(typeof(RoomReservations))]
        [Authorize]
        public IHttpActionResult PostRoomReservations(RoomReservations roomReservations)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AppRoomReservations.Add(roomReservations);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (RoomReservationsExists(roomReservations.RoomId, roomReservations.UserId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { roomId = roomReservations.RoomId, userId = roomReservations.UserId }, roomReservations);
        }

        // DELETE: api/RoomReservations/5
        [ResponseType(typeof(RoomReservations))]
        [Authorize]
        public IHttpActionResult DeleteRoomReservations(int id)
        {
            RoomReservations roomReservations = db.AppRoomReservations.Find(id);
            if (roomReservations == null)
            {
                return NotFound();
            }

            db.AppRoomReservations.Remove(roomReservations);
            db.SaveChanges();

            return Ok(roomReservations);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RoomReservationsExists(int id, int id1)
        {
            return db.AppRoomReservations.Count(e => e.RoomId == id && e.UserId == id1) > 0;
        }
    }
}