import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';

import { type Repository } from "@/types"
import { calculateMostStarredRepos } from "@/utils"

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
    // Calculate most starred repositories and return array of {repo: string, stars: number}
    const popularRepos = calculateMostStarredRepos(repositories)

    // Configuration for the chart's styling and labels
    const chartConfig = {
        repo: {
            label: "Repository",
            color: '#e11c47', // Red color for the bars
        },
    } satisfies ChartConfig

    return (
        <div>
            <h2 className='text-2xl font-semibold text-center mb-4'>Popular Repos</h2>
            {/* ChartContainer: Custom wrapper component that handles responsive sizing and theme */}
            <ChartContainer config={chartConfig} className='h-40 md:h-100 w-full'>
                {/* BarChart: Main chart component from recharts */}
                {/* accessibilityLayer adds ARIA labels for better screen reader support */}
                <BarChart accessibilityLayer data={popularRepos}>
                    {/* CartesianGrid: Adds horizontal guide lines (vertical disabled) */}
                    <CartesianGrid vertical={false} />

                    {/* XAxis: Horizontal axis showing repository names */}
                    {/* tickFormatter truncates long repository names to 10 characters */}
                    <XAxis
                        dataKey='repo'
                        tickLine={false}
                        tickMargin={10}
                        tickFormatter={(value) => value.slice(0, 7)}
                    />

                    {/* YAxis: Vertical axis showing star counts */}
                    <YAxis dataKey='stars' />

                    {/* ChartTooltip: Custom tooltip component that appears on hover */}
                    {/* ChartTooltipContent: Renders the actual content inside the tooltip */}
                    <ChartTooltip content={<ChartTooltipContent />} />

                    {/* Bar: The actual bar elements of the chart */}
                    {/* fill uses CSS variable for consistent theming */}
                    {/* radius adds rounded corners to the bars */}
                    <Bar dataKey='stars' fill='var(--color-repo)' radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}
export default PopularRepos