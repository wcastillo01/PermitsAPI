using Microsoft.EntityFrameworkCore;
using PermitsAPI.Models;
using Microsoft.EntityFrameworkCore.Design;

namespace PermitsAPI.Data

{
    public class AppDBContext : DbContext
    {
        public DbSet<Permit> Permits { get; set; }
        public DbSet<PermitType> PermitTypes { get; set; }

        public AppDBContext(DbContextOptions<AppDBContext> options): base(options)
        {
        }

    }
}
