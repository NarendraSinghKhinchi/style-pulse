import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconMail } from "@tabler/icons-react"

export function Newsletter() {
    return (
        <section className="container mx-auto px-4 relative z-20">
            <div className="bg-foreground text-background rounded-[20px] p-8 sm:p-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter flex-1 leading-[1.1]">
                    STAY UP TO DATE ABOUT OUR LATEST OFFERS
                </h2>

                <div className="w-full lg:max-w-md space-y-4">
                    <div className="relative">
                        <IconMail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            placeholder="Enter your email address"
                            className="pl-12 bg-background text-foreground h-12 rounded-full border-none"
                        />
                    </div>
                    <Button className="w-full h-12 rounded-full font-bold bg-background text-foreground hover:bg-background/90">
                        Subscribe to Newsletter
                    </Button>
                </div>
            </div>
        </section>
    )
}
