using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
using PermitsAPI.Models;
using PermitsAPI.Data;

namespace PermitsAPI.Controllers
{
    [Route("api/[controller]")]

    public class PermitTypeController : Controller
    {
        private readonly AppDBContext database;

        public PermitTypeController(AppDBContext database)
        {
            this.database = database;
        }

        [HttpGet]
        public IActionResult GetPermits()
        {
            return Ok(database.PermitTypes.ToList());
        }

        [HttpPost]
        public async Task<IActionResult> AddType(PermitType objPermitType)
        {
            if (!ModelState.IsValid)
                return new JsonResult("Error while creating new permit");

            database.PermitTypes.Add(objPermitType);
            await database.SaveChangesAsync();
            return new JsonResult("Permit created successfully");

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePermitType([FromRoute] int id)
        {
            var findPermitType = await database.PermitTypes.FindAsync(id);
            if (findPermitType == null)
                return NotFound();

            database.PermitTypes.Remove(findPermitType);
            await database.SaveChangesAsync();
            return new JsonResult("Permit deleted successfully");
        }
    }
}
