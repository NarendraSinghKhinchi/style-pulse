"use client"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { CartItem } from "@/components/cart-item"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Newsletter } from "@/components/newsletter"
import { OrderSummary } from "@/components/order-summary"
import { PRODUCTS } from "@/lib/constants"

export default function CartPage() {
    const breadcrumbItems = [
        { label: "Cart", href: "/cart" }
    ]

    // Mock cart items based on our PRODUCTS
    const cartItems = [
        {
            ...PRODUCTS[0],
            size: "Large",
            color: "White",
            quantity: 1
        },
        {
            ...PRODUCTS[2],
            size: "Medium",
            color: "Red",
            quantity: 1
        },
        {
            ...PRODUCTS[1],
            size: "Large",
            color: "Blue",
            quantity: 1
        }
    ]

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="container mx-auto px-4 pb-12 sm:pb-20">
                    <Breadcrumbs items={breadcrumbItems} />

                    <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-8 sm:mb-10">
                        Your Cart
                    </h1>

                    <div className="flex flex-col lg:flex-row gap-5 items-start">
                        {/* Cart Items List */}
                        <div className="w-full lg:flex-1 border rounded-[20px] p-5 sm:p-6 mb-5 lg:mb-0">
                            <div className="divide-y">
                                {cartItems.map((item) => (
                                    <CartItem key={item.id} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <aside className="w-full lg:w-[400px] flex-shrink-0">
                            <OrderSummary />
                        </aside>
                    </div>
                </div>

                <div className="relative -mb-[120px] mt-20">
                    <Newsletter />
                </div>
            </main>
            <Footer />
        </div>
    )
}
