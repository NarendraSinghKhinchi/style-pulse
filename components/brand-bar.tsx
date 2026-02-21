import { BRANDS } from "@/lib/constants"

export function BrandBar() {
    return (
        <div className="bg-foreground py-8 sm:py-12">
            <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
                {BRANDS.map((brand) => (
                    <span
                        key={brand.name}
                        className="text-background text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity cursor-default select-none"
                    >
                        {brand.name}
                    </span>
                ))}
            </div>
        </div>
    )
}
