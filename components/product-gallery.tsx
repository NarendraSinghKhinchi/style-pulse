"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import * as React from "react"

interface ProductGalleryProps {
    images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
    const [activeImage, setActiveImage] = React.useState(images[0])

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible no-scrollbar">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={cn(
                            "relative h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 flex-shrink-0 overflow-hidden rounded-[20px] border-2 transition-all",
                            activeImage === img ? "border-foreground" : "border-transparent bg-secondary"
                        )}
                    >
                        <Image
                            src={img}
                            alt={`Product preview ${idx + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 aspect-[4/5] rounded-[20px] overflow-hidden bg-secondary">
                <Image
                    src={activeImage}
                    alt="Product main image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    )
}
