import { Button } from "../ui/button"
import { Card, CardTitle, CardHeader, CardDescription } from "../ui/card"

type UserCardProps = {
    name: string
    bio: string
    url: string
    avatarUrl: string
}

const UserCard = ({ name, bio, url, avatarUrl }: UserCardProps) => {

    return (
        <Card className="w-full lg:w-1/2 mb-8">
            <CardHeader className="flex-row gap-x-8 items-center">
                <img src={avatarUrl} alt={name} className="w-36 h-36 rounded object-cover" />
                <div className="flex flex-col gap-y-2">
                    <CardTitle>{name || "Name"}</CardTitle>
                    <CardDescription>{bio || "Bio"}</CardDescription>
                    <Button asChild size='sm' className="w-30 mt-2">
                        <a href={url} target="_blank" rel="noreferrer">
                            Follow
                        </a>
                    </Button>
                </div>
            </CardHeader>
        </Card>
    )
}
export default UserCard