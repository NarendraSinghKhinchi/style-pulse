"use client"

import { cn } from "@/lib/utils"

interface ProductTabsProps {
    activeTab: string
    setActiveTab: (tab: string) => void
    reviewCount: number
}

export function ProductTabs({ activeTab, setActiveTab, reviewCount }: ProductTabsProps) {
    const tabs = [
        { id: "details", label: "Product Details" },
        { id: "reviews", label: `Rating & Reviews` },
        { id: "faq", label: "FAQs" }
    ]

    return (
        <div className="border-b">
            <div className="container mx-auto px-4 flex justify-between sm:justify-center sm:gap-16 lg:gap-32">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "py-4 sm:py-6 text-sm sm:text-lg font-medium border-b-2 transition-all relative",
                            activeTab === tab.id
                                ? "border-foreground text-foreground"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
