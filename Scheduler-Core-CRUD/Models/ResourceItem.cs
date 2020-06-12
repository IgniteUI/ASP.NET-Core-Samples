using Infragistics.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Scheduler_MVC_Wrapper.Models
{
    public class ResourceItem : IModel
    {
        public ResourceItem(int id, string displayName)
        {
            this.ID = id;
            this.DisplayName = displayName;
        }

        public ResourceItem(int id, string displayName, SchedulerResourceColorScheme? colorScheme)
            : this(id, displayName)
        {
            this.ColorScheme = colorScheme;
        }

        [JsonProperty("id")]
        public int ID { get; set; }

        [JsonProperty("displayName")]
        public string DisplayName { get; set; }

        [JsonProperty("colorScheme")]
        [JsonConverter(typeof(StringEnumConverter))]
        public SchedulerResourceColorScheme? ColorScheme { get; set; }

        public string ToJson()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}