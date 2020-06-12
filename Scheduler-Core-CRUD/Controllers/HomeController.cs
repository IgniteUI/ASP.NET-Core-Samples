using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Infragistics.Web.Mvc;
using Microsoft.AspNetCore.Mvc;
using Scheduler_Core_CRUD.Models;
using Scheduler_MVC_Wrapper.Models;

namespace Scheduler_Core_CRUD.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            AppointmentsResources res = new AppointmentsResources();
            res.Appointments = this.getAppointments();
            res.Resources = this.getResources();

            return this.View(res);
        }

        private List<AppointmentItem> getAppointments()
        {
            return new List<AppointmentItem>
            {
                new AppointmentItem(11, new DateTime(2020, 6, 8), new DateTime(2020, 6, 8), "tusktorgjs", null, "Description", 1),
                new AppointmentItem(5,  new DateTime(2020, 6, 10), new DateTime(2020, 6, 10), "tusktorgjs", null, "Description", 6),
                new AppointmentItem(10, new DateTime(2020, 6, 20), new DateTime(2020, 6, 20), "tusktorgjs", null, "Description", 11),
                new AppointmentItem(12, new DateTime(2020, 6, 30), new DateTime(2020, 6, 30), "tusktorgjs", null, "Description", 2),
                new AppointmentItem(7, new DateTime(2020, 6, 1), new DateTime(2020, 6, 1), "tusktorgjs", null, "Description", 8)
            };
        }

        private List<ResourceItem> getResources()
        {
            return new List<ResourceItem>
            {
                new ResourceItem(1, "grape", SchedulerResourceColorScheme.Teal),
                new ResourceItem(2, "grape"),
                new ResourceItem(3, "grape"),
                new ResourceItem(4, "grape"),
                new ResourceItem(5, "grape"),
                new ResourceItem(6, "grape"),
                new ResourceItem(7, "grape"),
                new ResourceItem(8, "grape"),
                new ResourceItem(9, "grape"),
                new ResourceItem(10, "grape"),
                new ResourceItem(11, "grape"),
            };
        }

        [HttpPost]
        public void Create([FromBody] CreateAppointment appointment)
        {
            var res = appointment;

            //Update DB
        }

        public void Delete([FromBody] string appointmentId)
        {
            var res = appointmentId;

            //Update DB
        }

        public void Update([FromBody] UpdateAppointment appointment)
        {
            var res = appointment;

            //Update DB
        }
    }
}
