import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-secondary/50 pt-20 mt-20 relative overflow-hidden">
            {/* Newsletter Section */}
            <div className="container max-w-7xl mx-auto px-4 absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 hidden lg:block">
                {/* Newsletter content will be handled by a separate section for better mobile handling, but this is a placeholder for the "floating" effect if desired */}
            </div>

            <div className="container max-w-7xl mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-0">
                {/* Brand and Description */}
                <div className="max-w-xs space-y-6">
                    <Link href="/" className="text-3xl font-extrabold tracking-tighter uppercase">
                        STYLE_PULSE
                    </Link>
                    <p className="text-muted-foreground leading-relaxed">
                        We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
                    </p>
                    <div className="flex items-center gap-3">
                        <a href="#" className="h-10 w-10 rounded-full border bg-background flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300">
                            <IconBrandTwitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="h-10 w-10 rounded-full border bg-background flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300">
                            <IconBrandFacebook className="h-5 w-5" />
                        </a>
                        <a href="#" className="h-10 w-10 rounded-full border bg-background flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300">
                            <IconBrandInstagram className="h-5 w-5" />
                        </a>
                        <a href="#" className="h-10 w-10 rounded-full border bg-background flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300">
                            <IconBrandGithub className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 flex-1 gap-12">
                    <div className="space-y-6">
                        <h4 className="font-bold uppercase tracking-widest text-sm">Company</h4>
                        <div className="flex flex-col gap-4 text-muted-foreground">
                            <Link href="/" className="hover:text-foreground transition-colors">About</Link>
                            <Link href="/category/casual" className="hover:text-foreground transition-colors">Features</Link>
                            <Link href="/category/formal" className="hover:text-foreground transition-colors">Works</Link>
                            <Link href="/category/gym" className="hover:text-foreground transition-colors">Career</Link>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-bold uppercase tracking-widest text-sm">Help</h4>
                        <div className="flex flex-col gap-4 text-muted-foreground">
                            <Link href="#" className="hover:text-foreground transition-colors">Customer Support</Link>
                            <Link href="#" className="hover:text-foreground transition-colors">Delivery Details</Link>
                            <Link href="#" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
                            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-bold uppercase tracking-widest text-sm">FAQ</h4>
                        <div className="flex flex-col gap-4 text-muted-foreground">
                            <Link href="#" className="hover:text-foreground transition-colors">Account</Link>
                            <Link href="#" className="hover:text-foreground transition-colors">Manage Deliveries</Link>
                            <Link href="#" className="hover:text-foreground transition-colors">Orders</Link>
                            <Link href="#" className="hover:text-foreground transition-colors">Payments</Link>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-bold uppercase tracking-widest text-sm">Resources</h4>
                        <div className="flex flex-col gap-4 text-muted-foreground">
                            <Link href="#" className="hover:text-foreground transition-colors">Free eBooks</Link>
                            <Link href="#" className="hover:text-foreground transition-colors">Development Tutorial</Link>
                            <Link href="#" className="hover:text-foreground transition-colors">How to - Blog</Link>
                            <Link href="#" className="hover:text-foreground transition-colors">Youtube Playlist</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t bg-secondary/80">
                <div className="container max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-muted-foreground text-sm">STYLE_PULSE © 2000-2023, All Rights Reserved</p>
                    <div className="flex items-center gap-4">
                        {/* Mock payment icons */}
                        <div className="h-8 w-12 bg-white rounded border flex items-center justify-center font-bold text-[10px] text-blue-800">VISA</div>
                        <div className="h-8 w-12 bg-white rounded border flex items-center justify-center font-bold text-[10px] text-orange-600">MC</div>
                        <div className="h-8 w-12 bg-white rounded border flex items-center justify-center font-bold text-[10px] text-blue-600">PayPal</div>
                        <div className="h-8 w-12 bg-white rounded border flex items-center justify-center font-bold text-[10px] text-black">Pay</div>
                        <div className="h-8 w-12 bg-white rounded border flex items-center justify-center font-bold text-[10px] text-blue-400">G Pay</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
