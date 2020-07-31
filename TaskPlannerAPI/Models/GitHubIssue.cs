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
			CommentsUrl = issue.CommentsUrl;
			EventsUrl = issue.EventsUrl;
			Number = issue.Number;
			Body = issue.Body;
			User = issue.User;
			Labels = issue.Labels;
			Assignee = issue.Assignee;
			Assignees = issue.Assignees;
			Milestone = issue.Milestone;
			Comments = issue.Comments;
			CreatedAt = issue.CreatedAt;
			UpdatedAt = issue.UpdatedAt;
			Id = issue.Id;
			State = ItemState.Open.ToString(); ;
		}

		public GitHubIssue(string title, int id)
		{
			Title = title;
			Id = id;
			State = ItemState.Open.ToString();
		}

		//
		// Summary:
		//     The date the issue was last updated.
		public DateTimeOffset? UpdatedAt { get; protected set; }
		//
		// Summary:
		//     The date the issue was created.
		public DateTimeOffset CreatedAt { get; protected set; }
		//
		// Summary:
		//     The date the issue was closed if closed.
		public DateTimeOffset? ClosedAt { get; protected set; }

		//
		// Summary:
		//     The number of comments on the issue.
		public int Comments { get; protected set; }
		//
		// Summary:
		//     The milestone, if any, that this issue is assigned to.
		public Milestone Milestone { get; protected set; }
		//
		// Summary:
		//     The multiple users this issue is assigned to.
		public IReadOnlyList<Octokit.User> Assignees { get; protected set; }
		//
		// Summary:
		//     The user this issue is assigned to.
		public User Assignee { get; protected set; }
		//
		// Summary:
		//     The set of labels applied to the issue
		public IReadOnlyList<Label> Labels { get; protected set; }
		//
		// Summary:
		//     The user that created the issue.
		public User User { get; protected set; }
		//
		// Summary:
		//     Details about the user who has closed this issue.
		public User ClosedBy { get; protected set; }
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
		//     Whether the issue is open or closed.
		public string State { get; protected set; }
		//
		// Summary:
		//     The issue number.
		public int Number { get; protected set; }
		//
		// Summary:
		//     The Events URL of this issue.
		public string EventsUrl { get; protected set; }
		//
		// Summary:
		//     The Comments URL of this issue.
		public string CommentsUrl { get; protected set; }
		//
		// Summary:
		//     The URL for the HTML view of this issue.
		public string HtmlUrl { get; protected set; }
		//
		// Summary:
		//     The URL for this issue.
		public string Url { get; protected set; }
		//
		// Summary:
		//     The internal Id for this issue (not the issue number)
		public int Id { get; protected set; }
	}
}
