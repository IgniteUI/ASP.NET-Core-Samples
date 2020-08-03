using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Octokit;
using TaskPlanner.Models;

namespace TaskPlanner.Controllers
{
	[ApiController]
	[EnableCors("AllowOrigin")]
	[Route("getAllIssues")]
	public class IssuesController : ControllerBase
	{

		[HttpGet]
		public async Task<List<GitHubIssue>> GetIssues()
		{
			List<GitHubIssue> gitHubIssues = new List<GitHubIssue>();
			Connection gitHubConnection = new Connection(new ProductHeaderValue("igniteui-angular"));
			GitHubClient client = new GitHubClient(gitHubConnection);

			IReadOnlyList<Issue> issues = await client.Issue.GetAllForRepository("igniteui", "igniteui-angular");

			foreach (var issue in issues)
			{
				GitHubIssue iss = new GitHubIssue(issue);
				gitHubIssues.Add(iss);
			}
			return gitHubIssues;
		}
	}
}
