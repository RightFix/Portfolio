import type { VercelRequest, VercelResponse } from '@vercel/node';

const USERNAME = 'RightFix';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const token = process.env.GITHUB_TOKEN;

  const headers = token
    ? { Authorization: `token ${token}` }
    : {};

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, { headers }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=30`, { headers }),
    ]);

    if (userRes.status === 403 || reposRes.status === 403) {
      response.status(403).json({ error: 'rate_limit' });
      return;
    }

    if (!userRes.ok || !reposRes.ok) {
      response.status(500).json({ error: 'Failed to fetch GitHub data' });
      return;
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    response.json({ user, repos });
  } catch (error) {
    response.status(500).json({ error: 'Internal server error' });
  }
}