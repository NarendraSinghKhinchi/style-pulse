import { BrandBar } from "@/components/brand-bar"
import { CategoryGrid } from "@/components/category-grid"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Newsletter } from "@/components/newsletter"
import { ProductGridSection } from "@/components/product-grid-section"
import { TestimonialSection } from "@/components/testimonial-section"

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <Hero />
                <BrandBar />
                <div className="mt-3 md:mt-8"></div>
                <ProductGridSection title="New Arrivals" category="New Arrivals" />
                <ProductGridSection title="Top Selling" category="Top Selling" />
                <CategoryGrid />
                <TestimonialSection />
                <div className="relative -mb-[120px]">
                    <Newsletter />
                </div>
            </main>
            <Footer />
        </div>
    )
}