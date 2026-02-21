import { Button } from "@/components/ui/button"
import { PRODUCTS } from "@/lib/constants"
import { ProductCard } from "./product-card"

interface ProductGridSectionProps {
    title: string
    category: "New Arrivals" | "Top Selling"
}

export function ProductGridSection({ title, category }: ProductGridSectionProps) {
    const filteredProducts = PRODUCTS.filter((p) => p.category === category)

    return (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 space-y-12 sm:space-y-16">
                <h2 className="text-3xl sm:text-5xl font-black text-center uppercase tracking-tighter">
                    {title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>

                <div className="flex justify-center pt-4">
                    <Button variant="outline" className="w-full sm:w-56 h-14 rounded-full text-base font-bold">
                        View All
                    </Button>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-20">
                <hr className="border-foreground/10" />
            </div>
        </section>
    )
}
