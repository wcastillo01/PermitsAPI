using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PermitsAPI.Data;
using PermitsAPI.Models;
using PermitsAPI.DTOs;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PermitsAPI.Controllers
{
    [Route("api/[controller]")]
    public class PermitController : Controller
    {
        private readonly AppDBContext database;

        public PermitController(AppDBContext database)
        {
            this.database = database;
        }

        //Action methods

        [HttpGet]
        public IActionResult GetPermits()
        {
            var permitsTemp = ( from p in database.Permits
                            from pt in database.PermitTypes
                            where p.PermitTypeId == pt.PermitTypeId
                            select new
                            {
                                PermitId = p.PermitId,
                                EmpName = p.EmpName,
                                EmpLastName = p.EmpLastName,
                                PermitTypeId = pt.PermitTypeId,
                                PermitDescription = pt.Description,
                                PermitDate = p.PermitDate

                            }).ToList();
            List<PermitDTO> permits = new List<PermitDTO>();

            foreach(var permit in permitsTemp)
            {
                PermitDTO permitDTO = new PermitDTO
                {
                    PermitId = permit.PermitId,
                    EmpName = permit.EmpName,
                    EmpLastName = permit.EmpLastName,
                    PermitTypeId = permit.PermitTypeId,
                    PermitDescription = permit.PermitDescription,
                    PermitDate = permit.PermitDate
                };

                permits.Add(permitDTO);
            }

            return Ok(permits);
            //return Ok(database.Permits.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult GetPermitbyId([FromRoute] int id)
        {
            return Ok(database.Permits.Find(id));
        }


        [HttpPost]
        public async Task<IActionResult> AddPermit([FromBody] PermitDTO permitDto)
        {
            if (!ModelState.IsValid)
                return new JsonResult("Error while creating new permit");

            var permitType = database.PermitTypes.Where(pt => pt.PermitTypeId == permitDto.PermitTypeId).FirstOrDefault();

            var permit = new Permit() {
                EmpName = permitDto.EmpName,
                EmpLastName = permitDto.EmpLastName,
                PermitDate = DateTime.Now,
                PermitTypeId = permitDto.PermitTypeId,
                PermitType = permitType
            };

            database.Permits.Add(permit);
            await database.SaveChangesAsync();

            return new JsonResult("Permit created successfully");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePermit([FromRoute] int id, [FromBody] Permit objPermit)
        {
            if(objPermit == null || id != objPermit.PermitId)
                return new JsonResult("Permit not found");

            database.Permits.Update(objPermit);
            await database.SaveChangesAsync();
            return new JsonResult("Permit updated successfully");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePermit([FromRoute] int id)
        {
            var findPermit = await database.Permits.FindAsync(id);
            if (findPermit == null)
                return NotFound();

            database.Permits.Remove(findPermit);
            await database.SaveChangesAsync();
            return new JsonResult("Permit deleted successfully");
        }

    }
}
