using Octokit;
using System;
using System.Collections.Generic;

namespace TaskPlannerAPI.Models
{
	public class GitHubIssue
	{
		public GitHubIssue(Issue issue)
		{
			Title = issue.Title;
			Url = issue.Url;
			Number = issue.Number;
			Body = issue.Body;
			Labels = issue.Labels;
			Assignee = new Assignee(issue.Assignee);
			CreatedAt = issue.CreatedAt;
			Id = issue.Id;
			PullRequest = issue.PullRequest != null ? issue.PullRequest.ToString() : null;
		}

		//
		// Summary:
		//     The date the issue was last updated.
		//public DateTimeOffset? UpdatedAt { get; protected set; }
		//
		// Summary:
		//     The date the issue was created.
		public DateTimeOffset CreatedAt { get; protected set; }

		//
		// Summary:
		//     The user this issue is assigned to.
		public Assignee Assignee { get; protected set; }

		//
		// Summary:
		//     The set of labels applied to the issue
		public IReadOnlyList<Label> Labels { get; protected set; }

		//
		// Summary:
		//     Details about the issue.
		public string Body { get; protected set; }

		//
		// Summary:
		//     Title of the issue
		public string Title { get; protected set; }

		//
		// Summary:
		//     The issue number.
		public int Number { get; protected set; }

		//
		// Summary:
		//     The URL for this issue.
		public string Url { get; protected set; }

		//
		// Summary:
		//     The internal Id for this issue (not the issue number)
		public int Id { get; protected set; }

		public string PullRequest { get; protected set; }
	}
}
