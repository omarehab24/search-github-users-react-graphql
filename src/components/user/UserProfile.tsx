type UserProfileProps = {
    userName: string;
}

const UserProfile = ({ userName }: UserProfileProps) => {
    return (
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {userName}
        </h2>
    )
}
export default UserProfile