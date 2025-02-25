import { Skeleton } from "../ui/skeleton"

/**
 * Loading component that displays placeholder content while data is being fetched
 * Uses shadcn/ui's Skeleton component to create loading animations
 */
const Loading = () => {
    return (
        <div>
            {/* Large header skeleton
        - h-[194px]: Fixed height of 194px
        - w-full: Full width on mobile
        - lg:w-1/2: Half width on large screens
        - mb-8: Bottom margin of 2rem */}
            <Skeleton className='h-[194px] w-full lg:w-1/2 mb-8 rounded ' />

            {/* Grid container for smaller skeletons
        - grid-cols-1: Single column on mobile
        - lg:grid-cols-2: 2 columns on large screens
        - xl:grid-cols-4: 4 columns on extra large screens
        - gap-2: Small gap between grid items */}
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 mb-8'>
                {/* Four identical skeleton items
          - h-[70px]: Fixed height of 70px
          - rounded: Rounded corners */}
                <Skeleton className=' h-[70px] rounded' />
                <Skeleton className=' h-[70px] rounded' />
                <Skeleton className=' h-[70px] rounded' />
                <Skeleton className=' h-[70px] rounded' />
            </div>
        </div>
    )
}
export default Loading