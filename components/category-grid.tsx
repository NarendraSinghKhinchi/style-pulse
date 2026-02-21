import { CATEGORIES } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export function CategoryGrid() {
    return (
        <section className="py-12 sm:py-20">
            <div className="container mx-auto px-4">
                <div className="bg-[#F2F0F1] rounded-[40px] p-6 sm:p-16 space-y-12 sm:space-y-16">
                    <h2 className="text-3xl sm:text-5xl font-black text-center uppercase tracking-tighter">
                        Browse by dress style
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* Casual - 1/3 width */}
                        <CategoryCard
                            name={CATEGORIES[0].name}
                            image={CATEGORIES[0].image}
                            href={CATEGORIES[0].href}
                        />
                        {/* Formal - 2/3 width */}
                        <CategoryCard
                            name={CATEGORIES[1].name}
                            image={CATEGORIES[1].image}
                            href={CATEGORIES[1].href}
                            className="md:col-span-2"
                        />
                        {/* Party - 2/3 width */}
                        <CategoryCard
                            name={CATEGORIES[2].name}
                            image={CATEGORIES[2].image}
                            href={CATEGORIES[2].href}
                            className="md:col-span-2"
                        />
                        {/* Gym - 1/3 width */}
                        <CategoryCard
                            name={CATEGORIES[3].name}
                            image={CATEGORIES[3].image}
                            href={CATEGORIES[3].href}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

function CategoryCard({ name, image, href, className }: { name: string, image: string, href: string, className?: string }) {
    return (
        <Link
            href={href}
            className={cn(
                "relative h-[190px] sm:h-[289px] overflow-hidden rounded-[20px] group bg-white",
                className
            )}
        >
            <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl sm:text-4xl font-bold">{name}</h3>
            </div>
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
        </Link>
    )
}
