using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BusinessV2API.Controllers
{
    [Route("department")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        // (R)ead all
        [HttpGet]
        public List<Department> GetAll()
        {
            return Department.GetAll();
        }


        // (R)ead one
        [HttpGet("{id}")]
        public Department Get(string id)
        {
            return Department.Get(id);
        }


        [HttpPost]
        // (C)reate
        public Department Save(Department emp)
        {
            return Department.Save(emp);
        }


        //// (D)elete
        //[HttpDelete("{id}")]
        //public string Delete(string id)
        //{
        //    Department.Delete(id);
        //    return "okeh";
        //}


        //// (D)elete
        //[HttpDelete("{id}")]
        //public string Delete(string id)
        //{
        //    Department.Delete(id);
        //    return "{\"status\": \"ok\"}";
        //}


        // (D)elete
        [HttpDelete("{id}")]
        public string Delete(string id)
        {
            Department.Delete(id);
            return "{\"status\": \"ok\"}";
        }


        // (U)pdate
        [HttpPut]
        public Object Update(Department dep)
        {
            Department.Update(dep);
            return new { status = "ok" };
        }
    }
}
