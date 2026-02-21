import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
    return (
        <section className="bg-[#F2F0F1] overflow-hidden lg:h-[calc(100vh-120px)] flex flex-col lg:flex-row items-center relative">
            <div className="container mx-auto px-4 flex-1 pt-12 lg:pt-0 z-10 flex flex-col justify-center">
                <div className="max-w-xl space-y-6 lg:space-y-10">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] uppercase tracking-tighter">
                        Find clothes that matches your style
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <Button className="w-full sm:w-56 h-14 rounded-full text-base font-bold transition-all duration-300 hover:scale-105">
                        Shop Now
                    </Button>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 lg:pt-4">
                        <div className="space-y-1">
                            <h3 className="text-2xl sm:text-4xl font-bold">200+</h3>
                            <p className="text-muted-foreground text-xs sm:text-sm">International Brands</p>
                        </div>
                        <div className="space-y-1 border-l border-foreground/10 pl-8">
                            <h3 className="text-2xl sm:text-4xl font-bold">2,000+</h3>
                            <p className="text-muted-foreground text-xs sm:text-sm">High-Quality Products</p>
                        </div>
                        <div className="space-y-1 border-l border-foreground/10 pl-8 hidden md:block">
                            <h3 className="text-2xl sm:text-4xl font-bold">30,000+</h3>
                            <p className="text-muted-foreground text-xs sm:text-sm">Happy Customers</p>
                        </div>
                        <div className="space-y-1 md:hidden col-span-2 text-center pt-4 border-t border-foreground/10">
                            <h3 className="text-2xl sm:text-4xl font-bold">30,000+</h3>
                            <p className="text-muted-foreground text-xs sm:text-sm">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative flex-1 w-full h-[500px] lg:h-full mt-10 lg:mt-0 lg:absolute right-0 top-0 lg:w-1/2">
                <Image
                    src="https://images.unsplash.com/photo-1549063523-8758397a2334?q=80&w=2000&auto=format&fit=crop"
                    alt="Style Pulse Hero"
                    fill
                    className="object-cover lg:object-contain object-bottom select-none pointer-events-none"
                    priority
                />
                {/* Decorative Stars */}
                <div className="absolute top-[10%] right-[10%] opacity-20 lg:opacity-100 scale-50 lg:scale-100">
                    <StarIcon className="h-24 w-24" />
                </div>
                <div className="absolute top-[40%] left-[5%] opacity-20 lg:opacity-100 scale-50 lg:scale-100">
                    <StarIcon className="h-14 w-14" />
                </div>
            </div>
        </section>
    )
}

function StarIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="currentColor"
            className={className}
        >
            <path d="M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z" />
        </svg>
    )
}
