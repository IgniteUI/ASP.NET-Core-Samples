using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Scheduler_Core_CRUD.Models
{
    public class CreateAppointment
    {
        public string Id { get; set; }

        public string Subject { get; set; }

        public string Location { get; set; }

        public string Description { get; set; }

        public DateTime Start { get; set; }

        public DateTime End { get; set; }
    }
}
