import { type Repository } from "@/types"
import { calculateMostUsedLanguages } from "@/utils"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';

const UsedLanguages = ({ repositories }: { repositories: Repository[] }) => {
    const mostUsedLanguages = calculateMostUsedLanguages(repositories)

    const chartConfig = {
        language: {
            label: "Language",
            color: "#2563eb",
        },
    } satisfies ChartConfig

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center mb-4">Used languages</h2>
            {/* ChartContainer handles responsive sizing and theme variables */}
            <ChartContainer config={chartConfig} className="w-full h-96">
                {/* BarChart is the main container for the bar chart visualization */}
                {/* accessibilityLayer adds ARIA labels for better screen reader support */}
                <BarChart accessibilityLayer data={mostUsedLanguages}>
                    {/* CartesianGrid adds horizontal guide lines */}
                    <CartesianGrid vertical={false} />
                    {/* XAxis configures the horizontal axis showing language names */}
                    <XAxis
                        dataKey="language"
                        tickLine={false} // Removes tick marks
                        tickMargin={10} /> // Adds spacing between labels and axis
                    {/* YAxis configures the vertical axis showing the count of each language */}
                    <YAxis dataKey="count" />
                    {/* ChartTooltip shows details when hovering over bars */}
                    <ChartTooltip content={<ChartTooltipContent />} />
                    {/* Bar component defines how each data point is rendered */}
                    {/* Uses CSS variable for color and adds rounded corners */}
                    <Bar dataKey="count" fill='var(--color-language)' radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}
export default UsedLanguages