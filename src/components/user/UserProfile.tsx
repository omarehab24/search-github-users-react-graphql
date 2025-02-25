import { useQuery } from '@apollo/client';
import { GET_USER } from '@/queries';
import { UserData } from '@/types';
import UserCard from './UserCard';

type UserProfileProps = {
    userName: string;
}

const UserProfile = ({ userName }: UserProfileProps) => {
    const { loading, error, data } = useQuery<UserData>(GET_USER, {
        variables: { login: userName },
    });

    if (loading) return <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Loading...</h2>
    if (error) return <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Error: {error.message}</h2>
    if (!data) return <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User not found</h2>

    const { name, bio, avatarUrl, url, repositories, followers, following, gists } = data.user

    return (
        <div>
            <UserCard name={name} bio={bio} url={url} avatarUrl={avatarUrl} />
        </div>
    )
}
export default UserProfile