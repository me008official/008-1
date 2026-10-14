'use client';
import {
    Activity,
    ArrowUp,
    Calendar,
    CheckCircle2,
    ChevronDown,
    CloudDownload,
    Cpu,
    Database,
    FileCode,
    FileText,
    FolderTree,
    Gauge,
    GitBranch,
    GitCommit,
    HardDriveDownload,
    Layers,
    Lock,
    Mic2,
    MonitorDown,
    Network,
    PackageCheck,
    Radio,
    Server,
    ShieldAlert,
    ShieldCheck,
    Sparkles,
    Target,
    Terminal,
    Workflow,
    Zap,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

const features = [
    { id: 'production', label: 'Production' },
    { id: 'systems', label: 'Systems' },
    { id: 'design', label: 'Design' },
    { id: 'project', label: 'Project' }
]

const featureHighlights = {
    'production': [
        { icon: Gauge, label: 'High-concurrency performance' },
        { icon: ShieldCheck, label: 'Enterprise-level security' },
        { icon: Zap, label: 'Real-world traffic management' },
    ],
    systems: [
        { icon: PackageCheck, label: 'Ready-to-deploy source code' },
        { icon: FolderTree, label: 'Clean project organization' },
        { icon: FileText, label: 'End-to-end documentation' },
    ],
    design: [
        { icon: Database, label: 'Scalable database schemas' },
        { icon: Layers, label: 'High-performance caching layers' },
        { icon: Network, label: 'Microservices architecture' },
    ],
    project: [
        { icon: Target, label: 'Real industry challenges' },
        { icon: Workflow, label: 'Product-focused execution' },
        { icon: Sparkles, label: 'Zero filler content' },
    ],
}

function FeatureList({ items }) {
    return (
        <ul className="text-muted-foreground mt-8 divide-y *:flex *:items-center *:gap-3 *:py-3">
            {items.map(({ icon: Icon, label }) => (
                <li key={label}>
                    <Icon className="size-4 text-primary" />
                    {label}
                </li>
            ))}
        </ul>
    )
}

export default function FeaturesSection() {
    const [activeId, setActiveId] = useState('production')
    const sectionRefs = useRef({})

    const scrollToFeature = (id) => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActiveId(id)
    }

    useEffect(() => {
        const sections = features.map((feature) => sectionRefs.current[feature.id]).filter(section => section != null)

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                const nextId = visible[0]?.target.id
                if (nextId) setActiveId(nextId)
            },
            { rootMargin: '-25% 0px -55% 0px', threshold: [0.15, 0.35, 0.55, 0.75] }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight">
                    <span className="text-foreground">Built for Developers </span> <br /> Who Want Real Engineering Skills
                </h2>
                <div className="mt-16 grid gap-6 md:mt-32 lg:grid-cols-[auto_1fr]">
                    <div className="sticky top-24 h-fit w-56 max-lg:hidden">
                        <div className="text-muted-foreground text-sm">Product</div>
                        <div className="-ml-4 mt-4 flex flex-col *:justify-start">
                            {features.map((feature) => (
                                <Button
                                    key={feature.id}
                                    type="button"
                                    variant="ghost"
                                    data-state={activeId === feature.id ? 'active' : undefined}
                                    onClick={() => scrollToFeature(feature.id)}
                                    className="not-data-[state=active]:text-muted-foreground hover:bg-transparent">
                                    {feature.label}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-16 md:gap-32">
                        {/* Section 1: Production */}
                        <div
                            ref={(element) => { sectionRefs.current['production'] = element }}
                            id="production"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">Production-Grade Architecture</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">Build secure,</span> high-concurrency services designed to handle heavy production traffic seamlessly.
                                    </p>
                                </div>
                                <FeatureList items={featureHighlights['production']} />
                            </div>
                            <div className="border-border/50 bg-foreground/2 relative flex aspect-square rounded-3xl border p-3 md:col-span-3">
                                <CodeIllustration />
                            </div>
                        </div>

                        {/* Section 2: Systems */}
                        <div
                            ref={(element) => { sectionRefs.current.systems = element }}
                            id="systems"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">Complete Full-Stack Systems</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">Access ready-to-deploy</span> backend source code, clean project structures, and complete documentation.
                                    </p>
                                </div>
                                <FeatureList items={featureHighlights.systems} />
                            </div>
                            <div className="border-border/50 bg-foreground/2 relative flex aspect-square rounded-3xl border p-3 md:col-span-3">
                                <SystemsIllustration />
                            </div>
                        </div>

                        {/* Section 3: Design */}
                        <div
                            ref={(element) => { sectionRefs.current.design = element }}
                            id="design"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">System Design First</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">Master scalable database schema design,</span> caching layers, and <span className="rounded bg-emerald-500/10 px-1.5 text-emerald-500">microservices architecture from scratch</span>.
                                    </p>
                                </div>
                                <FeatureList items={featureHighlights.design} />
                            </div>
                            <div className="border-border/50 bg-foreground/2 relative flex aspect-square rounded-3xl border p-3 md:col-span-3">
                                <DesignIllustration />
                            </div>
                        </div>

                        {/* Section 4: Project */}
                        <div
                            ref={(element) => { sectionRefs.current.project = element }}
                            id="project"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">Hands-On Project Learning</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">Solve actual industry challenges</span> through practical, product-focused implementations—no fluff tutorials.
                                    </p>
                                </div>
                                <FeatureList items={featureHighlights.project} />
                            </div>
                            <div className="border-border/50 relative flex aspect-square rounded-3xl border bg-zinc-100 p-3 md:col-span-3">
                                <DownloadIllustration />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

/* 1. Production Section Illustration */
function CodeIllustration() {
    return (
        <div aria-hidden className="z-1 absolute inset-4 m-auto h-fit w-full max-w-md font-mono">
            <div className="bg-white text-zinc-800 border border-zinc-200 rounded-xl shadow-2xl shadow-black/10 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100/90 border-b border-zinc-200 text-xs">
                    <div className="flex items-center gap-2">
                        <Terminal className="size-3.5 text-zinc-600" />
                        <span className="text-zinc-600 font-medium">server.ts</span>
                    </div>
                    <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <ShieldCheck className="size-3" /> SSL Active
                    </span>
                </div>

                <div className="p-4 text-xs leading-relaxed space-y-1.5 bg-zinc-50/50">
                    <div className="flex gap-3">
                        <span className="text-zinc-400 select-none w-4 text-right">1</span>
                        <span><span className="text-purple-600">import</span> &#123; Cluster &#125; <span className="text-purple-600">from</span> <span className="text-amber-600">'@008/concurrency'</span>;</span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-zinc-400 select-none w-4 text-right">2</span>
                        <span><span className="text-purple-600">import</span> &#123; RateLimit &#125; <span className="text-purple-600">from</span> <span className="text-amber-600">'@008/security'</span>;</span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-zinc-400 select-none w-4 text-right">3</span>
                        <span className="text-zinc-400 italic flex items-center gap-1.5"><Lock className="size-3 text-amber-500 inline" /> // Enterprise Security Guard</span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-zinc-400 select-none w-4 text-right">4</span>
                        <span><span className="text-blue-600">const</span> app = <span className="text-amber-600">createCluster</span>(&#123; workers: <span className="text-orange-600">8</span> &#125;);</span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-zinc-400 select-none w-4 text-right">5</span>
                        <span>app.<span className="text-blue-600">use</span>(<span className="text-emerald-700">RateLimit</span>(&#123; reqPerSec: <span className="text-orange-600">50000</span> &#125;));</span>
                    </div>
                </div>

                <div className="bg-zinc-100 border-t border-zinc-200 p-2.5 flex items-center justify-between text-[11px] text-zinc-600">
                    <span className="flex items-center gap-1.5 font-sans"><Gauge className="size-3.5 text-amber-500" /> High Performance</span>
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-100 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="size-3" /> 100% Passed
                    </span>
                </div>
            </div>
        </div>
    )
}

/* 2. Systems Section Illustration */
function SystemsIllustration() {
    return (
        <div aria-hidden className="z-1 absolute inset-4 m-auto h-fit w-full max-w-md font-mono">
            <div className="bg-white text-zinc-800 border border-zinc-200 rounded-xl shadow-2xl shadow-black/10 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100/90 border-b border-zinc-200 text-xs">
                    <span className="text-zinc-600 font-medium flex items-center gap-2">
                        <FolderTree className="size-3.5 text-blue-500" /> project-root/
                    </span>
                    <span className="text-[10px] bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
                        <GitBranch className="size-3" /> main
                    </span>
                </div>

                <div className="p-4 text-xs space-y-2 bg-zinc-50/50 font-sans">
                    <div className="flex items-center gap-2 text-zinc-700 font-medium">
                        <FolderTree className="size-4 text-amber-500" /> src/
                    </div>
                    <div className="pl-6 space-y-1.5 border-l border-zinc-200 ml-2">
                        <div className="flex items-center justify-between text-zinc-600 hover:bg-zinc-100 p-1.5 rounded">
                            <span className="flex items-center gap-2"><Cpu className="size-3.5 text-blue-400" /> controllers/</span>
                            <span className="text-[10px] text-zinc-400">logic</span>
                        </div>
                        <div className="flex items-center justify-between text-zinc-600 hover:bg-zinc-100 p-1.5 rounded">
                            <span className="flex items-center gap-2"><Layers className="size-3.5 text-blue-400" /> services/</span>
                            <span className="text-[10px] text-zinc-400">layers</span>
                        </div>
                        <div className="flex items-center justify-between text-zinc-800 font-medium bg-zinc-100 p-1.5 rounded">
                            <span className="flex items-center gap-2"><FileCode className="size-3.5 text-emerald-600" /> routes.ts</span>
                            <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded flex items-center gap-1">
                                <GitCommit className="size-3" /> Synced
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-100 border-t border-zinc-200 p-2.5 text-xs text-zinc-500 flex justify-between items-center">
                    <span className="flex items-center gap-1.5"><FileText className="size-3.5 text-zinc-500" /> Full Docs</span>
                    <span className="text-zinc-800 font-semibold flex items-center gap-1">
                        <PackageCheck className="size-3 text-amber-500" /> Ready to Deploy
                    </span>
                </div>
            </div>
        </div>
    )
}

/* 3. System Design Illustration */
function DesignIllustration() {
    return (
        <div aria-hidden className="z-1 absolute inset-4 m-auto h-fit w-full max-w-md">
            <div className="bg-white border border-zinc-200 rounded-xl p-4 shadow-2xl shadow-black/10 space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-2 text-xs">
                    <span className="font-semibold text-zinc-700 flex items-center gap-1.5">
                        <Network className="size-3.5 text-indigo-600" /> Microservices Architecture
                    </span>
                    <span className="text-[10px] bg-indigo-50 text-indigo-600 border border-indigo-200 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
                        <Radio className="size-3 text-indigo-500 animate-pulse" /> Live Mesh
                    </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-medium">
                    <div className="bg-indigo-50 text-indigo-700 border border-indigo-200 p-2.5 rounded-lg space-y-1.5">
                        <Server className="size-4 mx-auto text-indigo-600" />
                        <div className="text-[10px] text-indigo-500">API Gateway</div>
                        <div className="font-bold text-xs">Edge Router</div>
                    </div>

                    <div className="bg-amber-50 text-amber-700 border border-amber-200 p-2.5 rounded-lg space-y-1.5">
                        <Zap className="size-4 mx-auto text-amber-500 fill-amber-500" />
                        <div className="text-[10px] text-amber-600">Cache Layer</div>
                        <div className="font-bold text-xs">Redis Cluster</div>
                    </div>

                    <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 p-2.5 rounded-lg space-y-1.5">
                        <Database className="size-4 mx-auto text-emerald-600" />
                        <div className="text-[10px] text-emerald-600">Schema DB</div>
                        <div className="font-bold text-xs">PostgreSQL</div>
                    </div>
                </div>

                <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-2.5 text-[11px] text-zinc-600 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-medium">
                        <Activity className="size-3.5 text-emerald-500" /> Scalable Schema
                    </span>
                    <span className="font-mono text-xs text-zinc-800 bg-zinc-200/80 px-2 py-0.5 rounded">&lt; 5ms Latency &gt;</span>
                </div>
            </div>
        </div>
    )
}

/* 4. Project Section Illustration */
function DownloadIllustration() {
    return (
        <div className="z-1 absolute inset-0 m-auto size-fit scale-95 font-sans">
            <Button variant="secondary" className="bg-white/90 inset-ring inset-ring-zinc-300 ml-1 backdrop-blur shadow-sm" size="sm" render={<div />} nativeButton={false}>
                <HardDriveDownload className="opacity-75 text-zinc-800" />
                <span className="border-r border-zinc-300 pr-2 font-medium text-zinc-800">Download Source Code</span>
                <ChevronDown className="opacity-50 text-zinc-800" />
            </Button>

            <div className="shadow-black/10 ring-black/5 mt-3 min-w-60 rounded-2xl bg-white p-1.5 shadow-xl ring *:cursor-pointer space-y-1">
                <div className="peer flex gap-2.5 rounded-xl px-3 py-2 hover:bg-zinc-100 transition-colors">
                    <MonitorDown className="size-4 translate-y-0.5 text-zinc-800" />
                    <div className="space-y-0.5">
                        <div className="text-xs font-semibold text-zinc-800 flex items-center gap-1.5">
                            Full Source Package (.zip) <FileCode className="size-3 text-blue-500" />
                        </div>
                        <div className="text-xs text-zinc-500">Real industry challenges</div>
                    </div>
                </div>

                <div className="not-peer-hover:bg-zinc-100 flex gap-2.5 rounded-xl px-3 py-2 transition-colors">
                    <CloudDownload className="size-4 translate-y-0.5 text-zinc-800" />
                    <div className="space-y-0.5">
                        <div className="text-xs font-semibold text-zinc-800 flex items-center gap-1.5">
                            GitHub Repository Access <Sparkles className="size-3 text-amber-500" />
                        </div>
                        <div className="text-xs text-zinc-500">Zero filler content</div>
                    </div>
                </div>
            </div>
        </div>
    )
}