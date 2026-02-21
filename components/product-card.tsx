import { cn } from "@/lib/utils"
import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
    id: string
    name: string
    price: number
    originalPrice?: number
    rating: number
    image: string
    discount?: string
    className?: string
}

export function ProductCard({
    id,
    name,
    price,
    originalPrice,
    rating,
    image,
    discount,
    className,
}: ProductCardProps) {
    // Simple rating stars logic
    const renderStars = (rating: number) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<IconStarFilled key={i} className="h-4 w-4 text-yellow-500" />)
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<IconStarHalfFilled key={i} className="h-4 w-4 text-yellow-500" />)
            } else {
                stars.push(<IconStar key={i} className="h-4 w-4 text-yellow-500" />)
            }
        }
        return stars
    }

    return (
        <Link href={`/product/${id}`} className={cn("group cursor-pointer space-y-4 block", className)}>
            <div className="relative aspect-square overflow-hidden rounded-[20px] bg-secondary">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {discount && (
                    <div className="absolute top-4 left-4 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold">
                        {discount}
                    </div>
                )}
            </div>
            <div className="space-y-1">
                <h3 className="font-bold text-lg leading-tight group-hover:underline">{name}</h3>
                <div className="flex items-center gap-2">
                    <div className="flex">{renderStars(rating)}</div>
                    <span className="text-sm font-medium">{rating}/<span className="text-muted-foreground">5</span></span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">${price}</span>
                    {originalPrice && (
                        <span className="text-2xl font-bold text-muted-foreground line-through">${originalPrice}</span>
                    )}
                </div>
            </div>
        </Link>
    )
}
