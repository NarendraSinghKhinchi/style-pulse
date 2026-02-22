"use client"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Newsletter } from "@/components/newsletter"
import { ProductDetailsSection } from "@/components/product-details-section"
import { ProductGallery } from "@/components/product-gallery"
import { ProductGridSection } from "@/components/product-grid-section"
import { ProductInfo } from "@/components/product-info"
import { ProductTabs } from "@/components/product-tabs"
import { ReviewSection } from "@/components/review-section"
import { PRODUCTS } from "@/lib/constants"
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
                        reviewCount={product.reviews?.length || 0}
                    />
                    <div className="container max-w-7xl mx-auto px-4">
                        {activeTab === "reviews" && <ReviewSection reviews={product.reviews} />}
                        {activeTab === "details" && <ProductDetailsSection specifications={product.specifications} />}
                        {activeTab === "faq" && <FAQSection faqs={product.faqs} />}
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
