import { useQuery } from '@apollo/client';
import { GET_USER } from '@/queries';
import { UserData } from '@/types';
import UserCard from './UserCard';
import StatsContainer from './StatsContainer';
import ForkedRepos from '../charts/ForkedRepos';

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
            <StatsContainer totalRepos={repositories.totalCount} totalFollowers={followers.totalCount} totalFollowing={following.totalCount} gists={gists.totalCount} />
            {
                repositories.totalCount > 0 && (
                    <div className='grid md:grid-cols-2 gap-4'>
                        <ForkedRepos repositories={repositories.nodes} />
                    </div>
                )
            }
        </div>

    )
}
export default UserProfile