using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
namespace PermitsAPI.Models
{
    public class Permit
    {
        public int PermitId { get; set; }
        public string EmpName { get; set; }
        public string EmpLastName { get; set; }
        public int PermitTypeId { get; set; }
        public PermitType PermitType { get; set; }
        public DateTime PermitDate { get; set; }
        
    }
}
