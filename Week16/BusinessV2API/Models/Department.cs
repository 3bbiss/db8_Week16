//namespace BusinessV2API.Models
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace BusinessV2API
{
    [Table("department")]
    public class Department
    {
        // For Department, our key is a string.
        // Since it's not autoincrement, we use
        // ExplicitKey. And set the id type to string.
        [ExplicitKey]
        public string id { get; set; }
        public string name { get; set; }
        public string location { get; set; }


        public static MySqlConnection DB;

        // (R)ead all

        public static List<Department> GetAll()
        {
            return DB.GetAll<Department>().ToList();
        }


        // (R)ead one

        public static Department Get(string id)
        {
            return DB.Get<Department>(id);
        }


        // (C)reate
        public static Department Save(Department dep)
        {
            DB.Insert(dep);
            return dep;
        }


        // (D)elete
        public static void Delete(string id)
        {
            Department emp = new Department() { id = id };
            DB.Delete(emp);
        }

        // (U)pdate
        public static void Update(Department emp)
        {
            DB.Update(emp);
        }

    }


}
