import { Repository } from "./types";

/**
 * Calculates the top 5 most forked repositories
 * @param repositories Array of repository data from GitHub API
 * @returns Array of objects containing repository names and their fork counts
 * Example return: [{ repo: "react", count: 1000 }, { repo: "vue", count: 500 }]
 */
export const calculateMostForkedRepos = (repositories: Repository[]): { repo: string, count: number }[] => {
if (repositories.length === 0) {
    return []
  }
  
  // Transform repository data into simplified objects containing only name and fork count
  const mostForkedRepos = repositories
    .map(repo => ({ repo: repo.name, count: repo.forkCount })) 
    .sort((a, b) => b.count - a.count) // Sort by fork count in descending order
    .slice(0, 5); // Get the top 5

  return mostForkedRepos
}


/**
 * Calculates the top 5 most starred repositories
 * @param repositories Array of repository data from GitHub API
 * @returns Array of objects containing repository names and their star counts
 * Example return: [{ repo: "tensorflow", stars: 5000 }, { repo: "linux", stars: 4000 }]
 */
export const calculateMostStarredRepos = (repositories: Repository[]): { repo: string, stars: number }[] => {
  if(repositories.length === 0) {
    return []
  }

  // Transform repository data into simplified objects containing only name and star count
  const mostStarredRepos = repositories
    .map(repo => ({ repo: repo.name, stars: repo.stargazerCount }))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5);

  return mostStarredRepos
}