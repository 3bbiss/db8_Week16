using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIdemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PracticeController : ControllerBase
    {
        // (We just have HttpGet with nothing after it. No words or path)
        //      Path: /api/Practice
        // We can call these methods anything we want. It's irrelevent to the route/path.
        [HttpGet]
        public string index()
        {
            return "Hellooo!";
        }


        // Path:   /api/Practice/number
        [HttpGet("number")]
        public int test1()
        {
            return 50;
        }

        // Path:   /api/Practice/stuff
        [HttpGet("stuff")]
        public Stuff test2()
        {
            return new Stuff() { Height = 20, Word = "Hello", YesNo = true };
        }


        // Path:   /api/Practice/list
        [HttpGet("list")]
        public List<Stuff> test3()
        {
            List<Stuff> result = new List<Stuff>();
            result.Add(new Stuff() { Height = 50, Word = "Another", YesNo = false });
            result.Add(new Stuff() { Height = 10, Word = "Kratos", YesNo = true });
            result.Add(new Stuff() { Height = 30, Word = "Atreus", YesNo = true });
            return result;
        }


        //Path:   /api.Practice/double
        // Path: /api/Practice/double?num=15
        [HttpPost("double")]
        public int test4(int num)
        {
            return 2 * num;
        }

        //
        [HttpPost("process")]
        public Stuff test5(Stuff data)
        {
            data.Height = data.Height * 2;
            data.Word = "Oyyy!";
            data.YesNo = !data.YesNo;
            return data;
        }

        // Path: (We just have HttpPost with nothing after it.)
        [HttpPost]
        public string test6(Stuff data)
        {
            return $"{data.Word} saved.";
        }


    }

    // Outside the class PracticeController, but still inside the namespace...

    public class Stuff
    {
        public int Height { get; set; }
        public string Word { get; set; }
        public bool YesNo { get; set; }
    }
}
