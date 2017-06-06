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
    public class RegionsController : ApiController
    {
        private BAContext db = new BAContext();

        // GET: api/Regions
        public IQueryable<Region> GetAppRegions()
        {
            return db.AppRegions;
        }

        // GET: api/Regions/5
        [ResponseType(typeof(Region))]
        public IHttpActionResult GetRegion(int id)
        {
            Region region = db.AppRegions.Find(id);
            if (region == null)
            {
                return NotFound();
            }

            return Ok(region);
        }

        // PUT: api/Regions/5
        [Authorize(Roles = "Admin, Manager")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRegion(int id, Region region)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != region.Id)
            {
                return BadRequest();
            }

            db.Entry(region).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegionExists(id))
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

        // POST: api/Regions
        [ResponseType(typeof(Region))]
        [Authorize(Roles = "Admin, Manager")]
        public IHttpActionResult PostRegion(Region region)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AppRegions.Add(region);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = region.Id }, region);
        }

        // DELETE: api/Regions/5
        [ResponseType(typeof(Region))]
        [Authorize(Roles = "Admin, Manager")]
        public IHttpActionResult DeleteRegion(int id)
        {
            Region region = db.AppRegions.Find(id);
            if (region == null)
            {
                return NotFound();
            }

            db.AppRegions.Remove(region);
            db.SaveChanges();

            return Ok(region);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RegionExists(int id)
        {
            return db.AppRegions.Count(e => e.Id == id) > 0;
        }
    }
}