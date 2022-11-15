using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BusinessV2API.Controllers
{
    // Let's changge the base route to explicitly "employee"
    // it was this:
    //      [Route("api/[controller]")]
    //
    // Change to [Route("employee")]

    [Route("employee")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        // (R)ead all
        [HttpGet]
        public List<Employee> GetAll()
        {
            return Employee.GetAll();
        }


        // (R)ead one
        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            return Employee.Get(id);
        }


        [HttpPost]
        // (C)reate
        public Employee Save(Employee emp)
        {
            return Employee.Save(emp);
        }


        // (D)elete
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            Employee.Delete(id);
            return "okeh";
        }


        // (U)pdate
        [HttpPut]
        public string Update(Employee emp)
        {
            Employee.Update(emp);
            return "upditido";
        }

    }
}
