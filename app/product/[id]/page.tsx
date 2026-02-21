"use client"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Newsletter } from "@/components/newsletter"
import { ProductGallery } from "@/components/product-gallery"
import { ProductGridSection } from "@/components/product-grid-section"
import { ProductInfo } from "@/components/product-info"
import { ProductTabs } from "@/components/product-tabs"
import { ReviewSection } from "@/components/review-section"
import { PRODUCTS, REVIEWS } from "@/lib/constants"
import { notFound } from "next/navigation"
import * as React from "react"

interface PageProps {
    params: Promise<{ id: string }>
}

export default function ProductPage({ params }: PageProps) {
    const { id } = React.use(params)
    const product = PRODUCTS.find((p) => p.id === id)
    const [activeTab, setActiveTab] = React.useState("reviews")

    if (!product) {
        notFound()
    }

    const breadcrumbItems = [
        { label: "Shop", href: "/shop" },
        { label: "Men", href: "/shop/men" },
        { label: "T-shirts", href: "/shop/men/t-shirts" },
        { label: product.name, href: `/product/${product.id}` }
    ]

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="container mx-auto px-4 pb-12">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20">
                        <ProductGallery images={product.images || [product.image]} />
                        <ProductInfo product={product} />
                    </div>
                </div>

                <div className="mt-12 sm:mt-20">
                    <ProductTabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        reviewCount={REVIEWS.length}
                    />
                    <div className="container mx-auto px-4">
                        {activeTab === "reviews" && <ReviewSection />}
                        {activeTab === "details" && (
                            <div className="py-20 text-center text-muted-foreground">
                                Product specifications and detailed information content goes here.
                            </div>
                        )}
                        {activeTab === "faq" && (
                            <div className="py-20 text-center text-muted-foreground">
                                Frequently Asked Questions content goes here.
                            </div>
                        )}
                    </div>
                </div>

                <ProductGridSection title="You Might Also Like" category="Top Selling" />

                <div className="relative -mb-[120px] mt-20">
                    <Newsletter />
                </div>
            </main>
            <Footer />
        </div>
    )
}
