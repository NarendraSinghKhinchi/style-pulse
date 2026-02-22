"use client"

import { FAQ } from "@/lib/constants"
import { IconChevronDown } from "@tabler/icons-react"
import * as React from "react"

interface FAQSectionProps {
    faqs?: FAQ[]
}

export function FAQSection({ faqs = [] }: FAQSectionProps) {
    const [openId, setOpenId] = React.useState<string | null>(null)

    return (
        <div className="space-y-6 py-8">
            <h2 className="text-xl sm:text-2xl font-bold">Frequently Asked Questions</h2>

            <div className="space-y-4">
                {faqs.map((faq) => (
                    <FAQItem
                        key={faq.id}
                        {...faq}
                        isOpen={openId === faq.id}
                        onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                    />
                ))}
            </div>

            {faqs.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    No FAQs available for this product.
                </div>
            )}
        </div>
    )
}

interface FAQItemProps extends FAQ {
    isOpen: boolean
    onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
    return (
        <div className="border rounded-lg overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors font-medium"
            >
                <span className="text-lg">{question}</span>
                <IconChevronDown
                    className={`h-5 w-5 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <div className="px-6 py-4 bg-muted/30 border-t text-muted-foreground leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    )
}
