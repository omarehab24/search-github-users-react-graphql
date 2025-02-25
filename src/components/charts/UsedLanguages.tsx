import { type Repository } from "@/types"
import { calculateMostUsedLanguages } from "@/utils"

const UsedLanguages = ({ repositories }: { repositories: Repository[] }) => {
    const mostUsedLanguages = calculateMostUsedLanguages(repositories)
    console.log("mostUsedLanguages: ", mostUsedLanguages)
    return (
        <div>UsedLanguages</div>
    )
}
export default UsedLanguages