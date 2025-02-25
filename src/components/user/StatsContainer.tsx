import StatsCard from "./StatsCard"

type StatsContainerProps = {
    totalRepos: number
    totalFollowers: number
    totalFollowing: number
    gists: number
}

const StatsContainer = (props: StatsContainerProps) => {
    const { totalRepos, totalFollowers, totalFollowing, gists } = props
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            <StatsCard title="Repositories" count={totalRepos} />
            <StatsCard title="Followers" count={totalFollowers} />
            <StatsCard title="Following" count={totalFollowing} />
            <StatsCard title="Gists" count={gists} />
        </div>
    )
}
export default StatsContainer