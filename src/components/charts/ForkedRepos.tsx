import { calculateMostForkedRepos } from "@/utils"
import { Repository } from "@/types"

const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
    const mostForkedRepos = calculateMostForkedRepos(repositories)
    console.log("mostForkedRepos: ", mostForkedRepos)
    return (
        <div>ForkedRepos</div>
    )
}
export default ForkedRepos