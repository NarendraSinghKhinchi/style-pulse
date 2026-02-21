"use client"

import { Input } from "@/components/ui/input"
import { IconMenu2, IconSearch, IconShoppingCart, IconUser, IconX } from "@tabler/icons-react"
import Link from "next/link"
import * as React from "react"

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {/* Top Banner */}
            <div className="bg-foreground text-background py-2 text-center text-xs sm:text-sm px-4">
                <span>Sign up and get 20% off to your first order. </span>
                <button className="underline font-medium decoration-1 underline-offset-4">Sign Up Now</button>
            </div>

            <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center gap-4 lg:gap-10">
                {/* Mobile menu trigger */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <IconMenu2 className="h-6 w-6" />
                </button>

                {/* Logo */}
                <Link href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tighter uppercase mr-auto lg:mr-0">
                    SHOP.CO
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link href="/shop" className="text-sm font-medium hover:text-primary/70 transition-colors">Shop</Link>
                    <Link href="/on-sale" className="text-sm font-medium hover:text-primary/70 transition-colors">On Sale</Link>
                    <Link href="/new-arrivals" className="text-sm font-medium hover:text-primary/70 transition-colors">New Arrivals</Link>
                    <Link href="/brands" className="text-sm font-medium hover:text-primary/70 transition-colors">Brands</Link>
                </div>

                {/* Search Bar - Desktop */}
                <div className="hidden md:flex flex-1 max-w-md relative group">
                    <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-foreground transition-colors" />
                    <Input
                        placeholder="Search for products..."
                        className="pl-10 bg-secondary border-none h-11 rounded-full focus-visible:ring-1 focus-visible:ring-ring"
                    />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 sm:gap-3">
                    <button className="md:hidden p-2">
                        <IconSearch className="h-6 w-6" />
                    </button>
                    <button className="p-2 relative">
                        <IconShoppingCart className="h-6 w-6" />
                        <span className="absolute top-1 right-1 bg-foreground text-background text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">2</span>
                    </button>
                    <button className="p-2">
                        <IconUser className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-background lg:hidden flex flex-col p-6">
                    <div className="flex items-center justify-between mb-10">
                        <Link href="/" className="text-2xl font-extrabold tracking-tighter uppercase">
                            SHOP.CO
                        </Link>
                        <button onClick={() => setIsMobileMenuOpen(false)}>
                            <IconX className="h-7 w-7" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-6">
                        <Link href="/shop" className="text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
                        <Link href="/on-sale" className="text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>On Sale</Link>
                        <Link href="/new-arrivals" className="text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</Link>
                        <Link href="/brands" className="text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>Brands</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
