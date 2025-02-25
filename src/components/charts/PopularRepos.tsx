import { type Repository } from "@/types"
import { calculateMostStarredRepos } from "@/utils"

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
    const popularRepos = calculateMostStarredRepos(repositories)
    console.log("popularRepos: ", popularRepos)
    return (
        <div>PopularRepos</div>
    )
}
export default PopularRepos