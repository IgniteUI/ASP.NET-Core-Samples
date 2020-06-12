using Infragistics.Web.Mvc;
using Newtonsoft.Json;
using System;

namespace Scheduler_MVC_Wrapper.Models
{
    public class AppointmentItem : IModel
    {
        public AppointmentItem(int id, DateTime start, DateTime end, string subject, string location, string description)
        {
            this.ID = id;
            this.Start = start;
            this.End = end;
            this.Subject = subject;
            this.Location = location;
            this.Description = description;
        }

        public AppointmentItem(int id, DateTime start, DateTime end, string subject, string location, string description, int resourceId)
            : this(id, start, end, subject, location, description)
        {
            this.ResourceId = resourceId;
        }

        [JsonProperty("id")]
        public int ID { get; set; }

        [JsonProperty("resourceId")]
        public int ResourceId { get; set; }

        [JsonProperty("start")]
        public DateTime Start { get; set; }

        [JsonProperty("end")]
        public DateTime End { get; set; }

        [JsonProperty("subject")]
        public string Subject { get; set; }

        [JsonProperty("location")]
        public string Location { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        public string ToJson()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}