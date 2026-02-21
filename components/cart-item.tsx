"use client"

import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react"
import Image from "next/image"
import * as React from "react"

interface CartItemProps {
    id: string
    name: string
    price: number
    image: string
    size: string
    color: string
    quantity: number
}

export function CartItem({ name, price, image, size, color, quantity: initialQuantity }: CartItemProps) {
    const [quantity, setQuantity] = React.useState(initialQuantity)

    return (
        <div className="flex gap-4 py-6 border-b last:border-0 items-center">
            <div className="relative h-[99px] w-[99px] sm:h-[124px] sm:w-[124px] bg-secondary rounded-[16px] overflow-hidden flex-shrink-0">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex-1 flex flex-col justify-between h-full min-w-0 py-1">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <h3 className="text-base sm:text-xl font-bold truncate pr-6">{name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">Size: <span className="text-foreground/80">{size}</span></p>
                        <p className="text-xs sm:text-sm text-muted-foreground">Color: <span className="text-foreground/80">{color}</span></p>
                    </div>
                    <button className="text-red-500 hover:scale-110 transition-transform">
                        <IconTrash className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                </div>

                <div className="flex justify-between items-end mt-2">
                    <span className="text-xl sm:text-2xl font-bold">${price}</span>

                    <div className="flex items-center bg-secondary rounded-full h-10 px-4 gap-4 sm:gap-6">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="hover:scale-110 transition-transform"
                        >
                            <IconMinus className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                        <span className="font-bold w-4 text-center text-sm sm:text-base">{quantity}</span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="hover:scale-110 transition-transform"
                        >
                            <IconPlus className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
