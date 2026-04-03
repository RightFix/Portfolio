export interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
}

export interface GitHubData {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
}