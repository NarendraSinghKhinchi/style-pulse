"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { TESTIMONIALS } from "@/lib/constants"
import { IconCircleCheckFilled, IconStarFilled } from "@tabler/icons-react"
import Autoplay from "embla-carousel-autoplay"

export function TestimonialSection() {
    return (
        <section className="py-12 sm:py-20 overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 space-y-12 sm:space-y-16">
                <div className="flex items-end justify-between">
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter max-w-lg">
                        Our Happy Customers
                    </h2>
                </div>

                <div className="relative">
                    <Carousel
                        className="w-full"
                        opts={{
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 1000,
                            }),
                        ]}
                    >
                        <CarouselContent className="ml-0">
                            {TESTIMONIALS.map((testimonial) => (
                                <CarouselItem key={testimonial.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                    <TestimonialCard {...testimonial} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({ name, rating, verified, text }: { name: string, rating: number, verified: boolean, text: string }) {
    return (
        <div className="border rounded-[20px] p-6 sm:p-8 space-y-4 h-full">
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
