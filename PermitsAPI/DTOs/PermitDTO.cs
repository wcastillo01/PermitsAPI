using System;
namespace PermitsAPI.DTOs
{
    public class PermitDTO
    {
        public int PermitId { get; set; }
        public string EmpName { get; set; }
        public string EmpLastName { get; set; }
        public int PermitTypeId { get; set; }
        public DateTime PermitDate { get; set; }
    }
}
