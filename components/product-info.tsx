"use client"

import { Button } from "@/components/ui/button"
import { Product } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { IconCheck, IconMinus, IconPlus, IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react"
import * as React from "react"

interface ProductInfoProps {
    product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
    const [selectedColor, setSelectedColor] = React.useState(product.colors[0].name)
    const [selectedSize, setSelectedSize] = React.useState(product.sizes[2]) // Default to Large/3rd
    const [quantity, setQuantity] = React.useState(1)

    const renderStars = (rating: number) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<IconStarFilled key={i} className="h-5 w-5 text-yellow-500" />)
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<IconStarHalfFilled key={i} className="h-5 w-5 text-yellow-500" />)
            } else {
                stars.push(<IconStar key={i} className="h-5 w-5 text-yellow-500" />)
            }
        }
        return stars
    }

    return (
        <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-tight">
                    {product.name}
                </h1>
                <div className="flex items-center gap-3">
                    <div className="flex gap-1">{renderStars(product.rating)}</div>
                    <span className="text-sm font-medium">{product.rating}/<span className="text-muted-foreground">5</span></span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold">${product.price}</span>
                    {product.originalPrice && (
                        <>
                            <span className="text-3xl font-bold text-muted-foreground line-through">${product.originalPrice}</span>
                            <span className="bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold">
                                {product.discount}
                            </span>
                        </>
                    )}
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                    {product.description}
                </p>
            </div>

            <hr className="border-foreground/10" />

            {/* Select Color */}
            <div className="space-y-4">
                <p className="text-muted-foreground">Select Colors</p>
                <div className="flex gap-4">
                    {product.colors.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.name)}
                            className={cn(
                                "h-9 w-9 rounded-full flex items-center justify-center transition-all ring-offset-2 ring-primary",
                                selectedColor === color.name ? "ring-2" : "hover:ring-1"
                            )}
                            style={{ backgroundColor: color.hex }}
                        >
                            {selectedColor === color.name && (
                                <IconCheck className={cn("h-5 w-5", color.name === "White" ? "text-black" : "text-white")} />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <hr className="border-foreground/10" />

            {/* Choose Size */}
            <div className="space-y-4">
                <p className="text-muted-foreground">Choose Size</p>
                <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={cn(
                                "px-6 py-3 rounded-full text-sm font-medium transition-all",
                                selectedSize === size
                                    ? "bg-foreground text-background"
                                    : "bg-secondary text-muted-foreground hover:bg-muted"
                            )}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <hr className="border-foreground/10" />

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 pt-4">
                <div className="flex items-center bg-secondary rounded-full h-14 px-4 gap-6">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="hover:scale-110 transition-transform"
                    >
                        <IconMinus className="h-5 w-5" />
                    </button>
                    <span className="font-bold w-4 text-center">{quantity}</span>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="hover:scale-110 transition-transform"
                    >
                        <IconPlus className="h-5 w-5" />
                    </button>
                </div>
                <Button className="flex-1 h-14 rounded-full text-base font-bold">
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}
