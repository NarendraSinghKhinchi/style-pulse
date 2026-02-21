import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"

export function Pagination() {
    return (
        <div className="flex items-center justify-between border-t pt-6 sm:pt-10">
            <Button variant="outline" className="h-10 sm:h-11 px-4 sm:px-6 rounded-lg gap-2 font-medium">
                <IconArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Previous</span>
            </Button>

            <div className="flex items-center">
                {[1, 2, 3, "...", 8, 9, 10].map((page, idx) => (
                    <button
                        key={idx}
                        className={cn(
                            "h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-lg text-sm sm:text-base font-medium transition-colors",
                            page === 1
                                ? "bg-foreground/10 text-foreground"
                                : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                        )}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <Button variant="outline" className="h-10 sm:h-11 px-4 sm:px-6 rounded-lg gap-2 font-medium">
                <span className="hidden sm:inline">Next</span>
                <IconArrowRight className="h-4 w-4" />
            </Button>
        </div>
    )
}
