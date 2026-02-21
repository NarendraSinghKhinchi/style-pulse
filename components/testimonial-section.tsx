import { TESTIMONIALS } from "@/lib/constants"
import { IconArrowLeft, IconArrowRight, IconCircleCheckFilled, IconStarFilled } from "@tabler/icons-react"

export function TestimonialSection() {
    return (
        <section className="py-12 sm:py-20 overflow-hidden">
            <div className="container mx-auto px-4 space-y-12 sm:space-y-16">
                <div className="flex items-end justify-between">
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter max-w-lg">
                        Our Happy Customers
                    </h2>
                    <div className="flex gap-4">
                        <button className="h-12 w-12 rounded-full border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                            <IconArrowLeft className="h-6 w-6" />
                        </button>
                        <button className="h-12 w-12 rounded-full border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                            <IconArrowRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar scroll-smooth snap-x">
                    {TESTIMONIALS.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} {...testimonial} />
                    ))}
                    {/* Duplicating for mock carousel effect */}
                    {TESTIMONIALS.map((testimonial) => (
                        <TestimonialCard key={`dup-${testimonial.id}`} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({ name, rating, verified, text }: { name: string, rating: number, verified: boolean, text: string }) {
    return (
        <div className="min-w-[340px] md:min-w-[400px] border rounded-[20px] p-6 sm:p-8 space-y-4 snap-start">
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <IconStarFilled key={i} className="h-5 w-5 text-yellow-500" />
                ))}
            </div>
            <div className="flex items-center gap-2">
                <span className="text-xl font-bold">{name}</span>
                {verified && <IconCircleCheckFilled className="h-5 w-5 text-green-500" />}
            </div>
            <p className="text-muted-foreground leading-relaxed">
                &quot;{text}&quot;
            </p>
        </div>
    )
}
