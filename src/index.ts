import { Probot } from "probot";

export = (app: Probot) => {
  app.on("pull_request.opened", async (context) => {

    // octokit.rest.repos.compareCommitsWithBasehead({
    //   owner,
    //   repo,
    //   basehead,
    // });

    const { data: diff } = await context.octokit.rest.pulls.get({
      owner: "octokit",
      repo: "rest.js",
      pull_number: context.payload.pull_request.id,
      mediaType: {
        format: "diff",
      },
    });

    const pullRequestComment = context.pullRequest({
      body: `Hello World! ${JSON.stringify(diff)}`,
    });

    await context.octokit.pulls.createReview(pullRequestComment);
  });


  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
