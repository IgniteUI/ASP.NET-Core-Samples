using Octokit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskPlannerAPI.Models
{
	public class Assignee
	{
		public int Id { get; set; }
		public string AvatarUrl { get; set; }
		public string Login { get; set; }
		public string Email { get; set; }
		public string Url { get; set; }

		public Assignee(User user)
		{
			if (user != null) {
				Id = user.Id;
				AvatarUrl = user.AvatarUrl;
				Login = user.Login;
				Email = user.Email;
				Url = user.HtmlUrl;
			}
		}
	}
}
