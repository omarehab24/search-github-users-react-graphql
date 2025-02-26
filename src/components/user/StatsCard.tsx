import { Card, CardTitle, CardDescription } from "../ui/card"

type StatsCardProps = {
    title: string,
    count: number
}

const StatsCard = ({ title, count }: StatsCardProps) => {
    return (
        <Card>
            <div className="flex flex-row justify-between items-center px-6">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{count}</CardDescription>
            </div>
        </Card>
    )
}
export default StatsCard