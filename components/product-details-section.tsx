"use client"

import { Specification } from "@/lib/constants"

interface ProductDetailsSectionProps {
    specifications?: Specification[]
}

export function ProductDetailsSection({ specifications = [] }: ProductDetailsSectionProps) {
    if (specifications.length === 0) {
        return (
            <div className="py-20 text-center text-muted-foreground">
                No product details available.
            </div>
        )
    }

    return (
        <div className="space-y-8 py-8">
            <h2 className="text-xl sm:text-2xl font-bold">Product Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {specifications.map((spec, index) => (
                    <div key={index} className="space-y-2">
                        <dt className="font-semibold text-foreground">{spec.label}</dt>
                        <dd className="text-muted-foreground leading-relaxed">{spec.value}</dd>
                    </div>
                ))}
            </div>
        </div>
    )
}
