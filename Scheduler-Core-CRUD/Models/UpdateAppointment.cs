using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Scheduler_Core_CRUD.Models
{
    public class UpdateAppointment
    {
        public string Id { get; set; }

        public string Subject { get; set; }

        public string Description { get; set; }
    }
}
