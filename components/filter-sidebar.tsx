"use client"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { IconAdjustmentsHorizontal, IconCheck, IconChevronRight, IconChevronUp, IconX } from "@tabler/icons-react"
import * as React from "react"

const CATEGORIES_LIST = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"]
const COLORS = [
    { name: "Green", hex: "#00FF00" },
    { name: "Red", hex: "#FF0000" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Orange", hex: "#FF8C00" },
    { name: "Cyan", hex: "#00BFFF" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Purple", hex: "#8A2BE2" },
    { name: "Pink", hex: "#FF1493" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#000000" },
]
const SIZES = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"]
const DRESS_STYLES = ["Casual", "Formal", "Party", "Gym"]

export function FilterSidebar({ className, onClose }: { className?: string, onClose?: () => void }) {
    const [priceRange, setPriceRange] = React.useState([50, 200])
    const [selectedColor, setSelectedColor] = React.useState<string | null>(null)
    const [selectedSize, setSelectedSize] = React.useState("Large")

    return (
        <div className={cn("bg-white border rounded-[20px] p-5 sm:p-6 space-y-6 w-full max-w-xs", className)}>
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Filters</h2>
                {onClose ? (
                    <button onClick={onClose} className="sm:hidden">
                        <IconX className="h-6 w-6" />
                    </button>
                ) : (
                    <IconAdjustmentsHorizontal className="h-6 w-6 text-muted-foreground hidden sm:block" />
                )}
            </div>

            <hr className="border-foreground/10" />

            {/* Sub-categories */}
            <div className="space-y-4">
                {CATEGORIES_LIST.map((cat) => (
                    <button key={cat} className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground transition-colors group">
                        <span className="text-base font-medium">{cat}</span>
                        <IconChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                ))}
            </div>

            <hr className="border-foreground/10" />

            {/* Price */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Price</h3>
                    <IconChevronUp className="h-5 w-5" />
                </div>
                <Slider
                    defaultValue={[50, 200]}
                    max={500}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                />
                <div className="flex items-center justify-between text-base font-medium">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>

            <hr className="border-foreground/10" />

            {/* Colors */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Colors</h3>
                    <IconChevronUp className="h-5 w-5" />
                </div>
                <div className="flex flex-wrap gap-3">
                    {COLORS.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.name)}
                            className={cn(
                                "h-9 w-9 rounded-full flex items-center justify-center transition-all ring-offset-2 ring-primary border",
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

            {/* Size */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Size</h3>
                    <IconChevronUp className="h-5 w-5" />
                </div>
                <div className="flex flex-wrap gap-2">
                    {SIZES.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={cn(
                                "px-5 py-2.5 rounded-full text-sm font-medium transition-all",
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

            {/* Dress Style */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Dress Style</h3>
                    <IconChevronUp className="h-5 w-5" />
                </div>
                <div className="space-y-4">
                    {DRESS_STYLES.map((style) => (
                        <button key={style} className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground transition-colors group">
                            <span className="text-base font-medium">{style}</span>
                            <IconChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    ))}
                </div>
            </div>

            <Button className="w-full h-12 rounded-full font-bold">
                Apply Filter
            </Button>
        </div>
    )
}
