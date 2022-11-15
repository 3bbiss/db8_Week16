using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace Instruments.Models
{
    [Table("instrument")]
    public class Instrument
    {
        [Key]
        public int id { get; set; }
        public string thetype { get; set; }
        public string color { get; set; }
        public int year { get; set; }


        // Static properties and methods
        // This is where we'll add our CRUD ops

        public static MySqlConnection DB;

        // (R)ead: Read all rows from table
        public static List<Instrument> ReadAll()
        {
            return DB.GetAll<Instrument>().ToList();
        }

        // (C)reate

        public static Instrument Add(Instrument inst)
        {
            DB.Insert(inst);
            return inst;
        }

        public static void Delete(int id)
        {
            Instrument inst = new Instrument() { id = id};
            DB.Delete(inst);
        }

        public static void Update(Instrument inst)
        {
            DB.Update(inst);
        }

    }
}
