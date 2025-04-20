// app/api/github/route.js
import { Octokit } from "octokit";

export async function GET() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PAT,
  });

  try {
    const res = await octokit.request("GET /users/nugget-cloud/repos", {
      per_page: 100,
      sort: "updated",
    });
    return Response.json(res.data);
  } catch (err) {
    console.error("GitHub API error:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch repos" }), {
      status: 500,
    });
  }
}
