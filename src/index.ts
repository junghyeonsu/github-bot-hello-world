import { Probot } from "probot";

export = (app: Probot) => {
  app.on("pull_request.opened", async (context) => {
    const pullRequestComment = context.pullRequest({
      body: "Hello World!",
    });

    await context.octokit.pulls.createReviewComment(pullRequestComment);
  });

  // app.on("issues.opened", async (context) => {
  //   const issueComment = context.issue({
  //     body: "Thanks for opening this issue!",
  //   });
  //   await context.octokit.issues.createComment(issueComment);
  // });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
