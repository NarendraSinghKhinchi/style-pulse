import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

interface BreadcrumbsProps {
    items: { label: string; href: string }[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center gap-2 text-sm sm:text-base py-6 sm:py-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            {items.map((item, index) => (
                <React.Fragment key={item.href}>
                    <IconChevronRight className="h-4 w-4 text-muted-foreground" />
                    <Link
                        href={item.href}
                        className={index === items.length - 1 ? "font-medium" : "text-muted-foreground hover:text-foreground transition-colors"}
                    >
                        {item.label}
                    </Link>
                </React.Fragment>
            ))}
        </nav>
    )
}

import * as React from "react";

