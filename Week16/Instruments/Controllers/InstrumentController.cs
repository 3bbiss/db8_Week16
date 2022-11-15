using Instruments.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Instruments.Controllers
{
    // Replace everything in Route with just "instrument".
    [Route("instrument")]
    [ApiController]
    public class InstrumentController : ControllerBase
    {
        // Here are our routes:

        // GET /instrument -- returns whole list of instruments
        // POST /instrument -- adds a new instrument to the database
        // DELETE /instrument{id} -- deletes the instrument
        // POST /instrument/update -- updates instrument


        // (R)ead
        [HttpGet]
        public List<Instrument> ReadAll()
        {
            return Instrument.ReadAll();
        }

        // (C)reate
        [HttpPost]
        public Instrument Add(Instrument inst)
        {
            return Instrument.Add(inst);
        }

        // (D)elete
        public string Delete(int id)
        {
            Instrument.Delete(id);
            return "Okuh";
        }

        // (U)pdate
        // Lots of ppl use POST for their updates
        // In fact, lots of ppl use POST for everything
        // except the GetAll(), which returns the list.

        [HttpPost("update")]
        public string Update(Instrument inst)
        {
            Instrument.Update(inst);
            return "okeh";
        }


    }
}
