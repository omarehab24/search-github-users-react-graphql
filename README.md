# GitHub User Search

A React application that allows you to search for GitHub users and display their profiles, repositories, statistics, and more using GitHub's GraphQL API.

## Features

- Search for GitHub users by username
- View user profile information including bio and avatar
- Display user statistics (repositories, followers, following, gists)
- Visualize repository data with charts:
  - Most used programming languages
  - Most popular repositories (by stars)
  - Most forked repositories

## Technologies Used

- React 19
- TypeScript
- GitHub GraphQL API
- Apollo Client for GraphQL
- Tailwind CSS for styling
- Reusable shadcn/ui components
- Recharts for data visualization
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- GitHub Personal Access Token with appropriate permissions

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/search-github-users.git
   cd search-github-users
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your GitHub token:
   ```
   VITE_GITHUB_TOKEN=your_github_personal_access_token
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
search-github-users/
├── src/
│   ├── components/
│   │   ├── charts/       # Chart visualization components
│   │   ├── form/         # Search form components
│   │   ├── ui/           # Reusable UI components
│   │   └── user/         # User profile components
│   ├── App.tsx           # Main application component
│   ├── apolloClient.ts   # Apollo Client setup
│   ├── main.tsx          # Entry point
│   ├── queries.ts        # GraphQL queries
│   └── types.ts          # TypeScript type definitions
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Usage

1. Enter a GitHub username in the search form
2. View the user's profile information, statistics, and repository data
3. Explore the charts to gain insights into the user's GitHub activity

## API

This project uses GitHub's GraphQL API. The main query fetches:

- User profile information
- Repository details
- Language statistics
- Follower and following counts
- Gist counts

## Building for Production

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
