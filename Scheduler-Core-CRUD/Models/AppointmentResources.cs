using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Scheduler_MVC_Wrapper.Models
{
    public class AppointmentsResources
    {
        public List<AppointmentItem> Appointments { get; set; }

        public List<ResourceItem> Resources { get; set; }
    }
}