// namespace BusinessV2API.Models
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace BusinessV2API
{
    [Table("employee")]
    public class Employee
    {
        [Key]
        public int id { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string department { get; set; }
        public DateTime hiredate { get; set; }


        public static MySqlConnection DB;

        // CRUD operations - These are static methods.
        // This part handles just the database operations.
        // So, don't think about controllers, URLs, routs, paths


        // (R)ead all

        public static List<Employee> GetAll()
        {
            return DB.GetAll<Employee>().ToList();
        }


        // (R)ead one

        public static Employee Get(int id)
        {
            return DB.Get<Employee>(id);
        }


        // (C)reate
        public static Employee Save(Employee emp)
        {
            DB.Insert(emp);
            return emp;
        }


        // (D)elete
        public static void Delete(int id)
        {
            Employee emp = new Employee() { id = id };
            DB.Delete(emp);
        }

        // (U)pdate
        public static void Update(Employee emp)
        {
            DB.Update(emp);
        }
    }
}
