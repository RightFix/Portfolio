import { useState, useEffect } from 'react';
import type { GitHubData, GitHubUser, GitHubRepo } from '../types/github';

const USERNAME = 'RightFix';

export function useGitHubData() {
  const [data, setData] = useState<GitHubData>({
    user: null,
    repos: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=30`),
        ]);

        if (userRes.status === 403 || reposRes.status === 403) {
          const rateLimitRes = await fetch('https://api.github.com/rate_limit');
          const rateLimitInfo = await rateLimitRes.json();
          if (rateLimitInfo.resources.core.remaining === 0) {
            throw new Error('rate_limit');
          }
        }

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('Failed to fetch GitHub data');
        }

        const user: GitHubUser = await userRes.json();
        const repos: GitHubRepo[] = await reposRes.json();

        setData({
          user,
          repos,
          loading: false,
          error: null,
        });
      } catch (error) {
        setData((prev) => ({
          ...prev,
          loading: false,
          error: error instanceof Error && error.message === 'rate_limit'
            ? 'API rate limit exceeded. Please try again in an hour.'
            : 'Unable to load GitHub data. Please try again later.',
        }));
      }
    }

    fetchGitHubData();
  }, []);

  return data;
}