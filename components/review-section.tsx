import { Button } from "@/components/ui/button"
import { Review } from "@/lib/constants"
import { IconAdjustmentsHorizontal, IconChevronDown, IconCircleCheckFilled, IconDots, IconStarFilled } from "@tabler/icons-react"

interface ReviewSectionProps {
    reviews?: Review[]
}

export function ReviewSection({ reviews = [] }: ReviewSectionProps) {
    return (
        <div className="space-y-8 sm:space-y-12 py-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold">All Reviews</h2>
                    <span className="text-muted-foreground">({reviews.length})</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <Button variant="secondary" className="h-12 w-12 rounded-full p-0">
                        <IconAdjustmentsHorizontal className="h-5 w-5" />
                    </Button>
                    <Button variant="secondary" className="h-12 rounded-full px-4 sm:px-6 hidden sm:flex gap-2 font-medium">
                        <span>Latest</span>
                        <IconChevronDown className="h-4 w-4" />
                    </Button>
                    <Button className="h-12 rounded-full px-6 sm:px-8 font-bold">
                        Write a Review
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {reviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </div>

            {reviews.length > 0 && (
                <div className="flex justify-center pt-8">
                    <Button variant="outline" className="h-12 px-10 rounded-full font-bold">
                        Load More Reviews
                    </Button>
                </div>
            )}
        </div>
    )
}

function ReviewCard({ name, rating, verified, text, date }: Review) {
    return (
        <div className="border rounded-[20px] p-6 sm:p-8 space-y-4">
            <div className="flex justify-between items-start">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <IconStarFilled key={i} className="h-5 w-5 text-yellow-500" />
                    ))}
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                    <IconDots className="h-6 w-6" />
                </button>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-xl font-bold">{name}</span>
                {verified && <IconCircleCheckFilled className="h-5 w-5 text-green-500" />}
            </div>
            <p className="text-muted-foreground leading-relaxed">
                &quot;{text}&quot;
            </p>
            <p className="text-sm font-medium text-muted-foreground pt-2">
                Posted on {date}
            </p>
        </div>
    )
}
