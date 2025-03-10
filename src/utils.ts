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
    if (repositories.length === 0) {
        return []
    }

    // Transform repository data into simplified objects containing only name and star count
    const mostStarredRepos = repositories
        .map(repo => ({ repo: repo.name, stars: repo.stargazerCount }))
        .sort((a, b) => b.stars - a.stars)
        .slice(0, 5);

    return mostStarredRepos
}

/**
 * Calculates the top 5 most used programming languages across all repositories
 * @param repositories Array of repository data from GitHub API
 * @returns Array of objects containing language names and their occurrence count
 * Example return: [{ language: "JavaScript", count: 10 }, { language: "Python", count: 7 }]
 */

export const calculateMostUsedLanguages = (repositories: Repository[]): { language: string, count: number }[] => {
    if (repositories.length === 0) {
        return []
    }

    // Initialize a map to track how many times each language appears
    // Example: { "JavaScript": 5, "Python": 3, "TypeScript": 2 }
    const languageMap: { [key: string]: number } = {};

    repositories.forEach(repo => {
        if (repo.languages.edges.length === 0) {
            return
        }

        // Iterate through each language in the repository
        // languages.edges comes from GitHub's GraphQL API structure
        // Nested loop, O(n^2), bad for large datasets
        repo.languages.edges.forEach(languageEdge => {
            const { name } = languageEdge.node;

            // Increment the count for this language, initializing to 1 if it's the first occurrence
            languageMap[name] = (languageMap[name] || 0) + 1;
        })
    })

    // If no languages were found in any repository, return empty array
    if (Object.keys(languageMap).length === 0) {
        return []
    }

    // Convert the language map into an array of objects and sort them
    return (
        // Object.entries(languageMap)
        //   .map(([language, count]) => ({ language, count }))
        //   .sort((a, b) => b.count - a.count)
        //   .slice(0, 5)

        // This approach is more efficient because it sorts and then slices before mapping. It does less work overall since mapping happens only on the 5 items we care about, not the entire array.
        Object.entries(languageMap)
            .sort(([, a], [, b]) => b - a) // Sorts this array based on the values (count) in descending order
            .slice(0, 5)
            .map(([language, count]) => ({ language, count }))
    )
}