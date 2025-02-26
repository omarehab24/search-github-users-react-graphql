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
                <img src={avatarUrl} alt={name} className="size-24 md:size-32 rounded object-cover" />
                <div className="flex flex-col gap-y-2 min-w-0">
                    <CardTitle className="break-words">{name || "Name"}</CardTitle>
                    <CardDescription className="break-words line-clamp-5">{bio || "Bio"}</CardDescription>
                    <Button asChild className="mt-2 w-fit">
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