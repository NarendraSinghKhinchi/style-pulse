"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconArrowRight, IconTag } from "@tabler/icons-react"

export function OrderSummary() {
    return (
        <div className="border rounded-[20px] p-5 sm:p-6 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold">Order Summary</h2>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-lg">Subtotal</span>
                    <span className="font-bold text-lg">$565</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-lg">Discount (-20%)</span>
                    <span className="font-bold text-lg text-red-500">-$113</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-lg">Delivery Fee</span>
                    <span className="font-bold text-lg">$15</span>
                </div>
                <hr className="border-foreground/10" />
                <div className="flex justify-between items-center pt-2">
                    <span className="text-lg sm:text-xl font-bold">Total</span>
                    <span className="text-xl sm:text-2xl font-bold">$467</span>
                </div>
            </div>

            <div className="flex gap-3">
                <div className="relative flex-1 group">
                    <IconTag className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-foreground transition-colors" />
                    <Input
                        placeholder="Add promo code"
                        className="pl-12 bg-secondary border-none h-12 rounded-full focus-visible:ring-1 focus-visible:ring-ring"
                    />
                </div>
                <Button className="h-12 px-6 sm:px-8 rounded-full font-bold">
                    Apply
                </Button>
            </div>

            <Button className="w-full h-14 rounded-full font-bold text-base gap-2">
                Go to Checkout
                <IconArrowRight className="h-5 w-5" />
            </Button>
        </div>
    )
}
