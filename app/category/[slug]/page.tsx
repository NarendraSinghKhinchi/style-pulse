"use client"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { FilterSidebar } from "@/components/filter-sidebar"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Newsletter } from "@/components/newsletter"
import { Pagination } from "@/components/pagination"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { PRODUCTS } from "@/lib/constants"
import { IconAdjustmentsHorizontal, IconChevronDown } from "@tabler/icons-react"
import * as React from "react"

interface PageProps {
    params: Promise<{ slug: string }>
}

export default function CategoryPage({ params }: PageProps) {
    const { slug } = React.use(params)
    const [isFilterOpen, setIsFilterOpen] = React.useState(false)

    // Filter products based on categories in constants or show all if "all"
    const filteredProducts = slug === "all"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category.toLowerCase().includes(slug.toLowerCase()) || (slug === "casual" && p.category === "New Arrivals"))

    const breadcrumbItems = [
        { label: "Shop", href: "/category/casual" },
        { label: slug.charAt(0).toUpperCase() + slug.slice(1), href: `/category/${slug}` }
    ]

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="container mx-auto px-4 pb-12 sm:pb-20">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Desktop */}
                        <aside className="hidden lg:block w-72 flex-shrink-0">
                            <FilterSidebar />
                        </aside>

                        {/* Main Content */}
                        <div className="flex-1 space-y-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-baseline gap-2">
                                    <h1 className="text-2xl sm:text-3xl font-bold capitalize">{slug}</h1>
                                    <span className="text-sm sm:text-base text-muted-foreground">Showing 1-10 of 100 Products</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                                        Sort by:
                                        <button className="flex items-center gap-1 font-bold text-foreground">
                                            Most Popular
                                            <IconChevronDown className="h-4 w-4" />
                                        </button>
                                    </div>
                                    {/* Filter Button Mobile */}
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        className="lg:hidden h-10 w-10 rounded-full bg-secondary"
                                        onClick={() => setIsFilterOpen(true)}
                                    >
                                        <IconAdjustmentsHorizontal className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>

                            {/* Product Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} {...product} />
                                ))}
                            </div>

                            <Pagination />
                        </div>
                    </div>
                </div>

                <div className="relative -mb-[120px] mt-20">
                    <Newsletter />
                </div>
            </main>
            <Footer />

            {/* Mobile Filter Drawer */}
            {isFilterOpen && (
                <div className="fixed inset-0 z-[100] bg-black/40 lg:hidden">
                    <div className="absolute bottom-0 left-0 right-0 max-h-[90vh] overflow-y-auto bg-white rounded-t-[20px] p-6 animate-in slide-in-from-bottom-2 duration-300">
                        <FilterSidebar onClose={() => setIsFilterOpen(false)} className="border-none p-0 max-w-none" />
                    </div>
                </div>
            )}
        </div>
    )
}
