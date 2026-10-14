import { Cpu, Zap } from 'lucide-react';

export default function ContentSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-12">
                    <h2 className="max-w-md text-balance text-4xl font-medium tracking-tight lg:text-5xl">Start Your Backend Journey — Free & Structured Learning</h2>
                    <div className="space-y-6 lg:space-y-12">
                        <p className="text-muted-foreground text-balance text-lg">Access comprehensive guides, foundational tutorials, and open-source roadmaps to build your core competencies without spending a dime.</p>

                        <div className="grid gap-4 pt-6 sm:grid-cols-2">
                            <p className="text-muted-foreground text-balance text-lg">
                                <span className="text-foreground font-medium">
                                    <Zap className="inline size-4 -translate-y-0.5" /> Core.
                                </span>{' '}
                                 Backend Fundamentals (Node.js, PHP, Databases)
                            </p>

                            <p className="text-muted-foreground text-balance text-lg">
                                <span className="text-foreground font-medium">
                                    <Cpu className="inline size-4 -translate-y-0.5" /> Advanced.
                                </span>{' '}
                                System Design & Scaling
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
