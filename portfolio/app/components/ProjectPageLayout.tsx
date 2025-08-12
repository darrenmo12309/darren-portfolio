'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Calendar } from 'lucide-react';

type PreviewItem = { type: 'image' | 'video'; src: string; alt?: string };

type ProjectLayoutProps = {
    backHref?: string;
    title: string;
    subtitle?: string;
    period?: string;
    tags?: string[];
    description: string;
    image?: string;
    github?: string;
    live?: string;
    overview?: string;
    tech?: string[];
    projectDescription?: string[];
    features?: string[];
    preview?: PreviewItem[];
    children?: React.ReactNode;
};

export default function ProjectLayout({
    backHref = '/',
    title,
    subtitle,
    period,
    tags = [],
    description,
    image,
    github,
    live,
    overview,
    tech = [],
    projectDescription = [],
    features,
    preview,
    children,
}: ProjectLayoutProps) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0b14] to-purple-900/20 text-white">
            <section className="relative border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
                    <Link
                        href={backHref}
                        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to projects
                    </Link>

                    <div className="mt-6 grid md:grid-cols-[1fr,380px] gap-8 items-start">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-5xl font-bold"
                            >
                                {title}
                            </motion.h1>
                            {subtitle && <p className="text-lg text-gray-300 mt-2">{subtitle}</p>}

                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 mt-4">
                                {period && (
                                    <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                                        <Calendar className="w-4 h-4" /> {period}
                                    </span>
                                )}
                                {tags.map((t) => (
                                    <span
                                        key={t}
                                        className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-300 mt-6 max-w-2xl">{description}</p>

                            <div className="flex gap-3 mt-6">
                                {github && (
                                    <Link
                                        href={github}
                                        className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 inline-flex items-center gap-2"
                                    >
                                        <Github className="w-4 h-4" /> GitHub
                                    </Link>
                                )}
                                {live && (
                                    <Link
                                        href={live}
                                        className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 inline-flex items-center gap-2"
                                    >
                                        <ExternalLink className="w-4 h-4" /> Live
                                    </Link>
                                )}
                            </div>
                        </div>
                        {image && (
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                                <div className="relative aspect-video rounded-xl overflow-hidden">
                                    <Image src={image} alt={title} fill className="object-cover" />
                                    <div className="absolute inset-0 bg-black/30" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 py-10 md:py-14 grid lg:grid-cols-[1fr,320px] gap-10">
                <div className="space-y-10">
                    {(overview || children) && (
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
                            {overview && <p className="text-gray-300">{overview}</p>}
                            {children}
                        </div>
                    )}
                    {tech.length > 0 && (
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                            <div className="flex flex-wrap gap-2">
                                {tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {projectDescription.length > 0 && (
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                {projectDescription.map((f) => (
                                    <li key={f}>{f}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {features && features.length > 0 && (
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                {features.map((r) => (
                                    <li key={r}>{r}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {preview && preview.length > 0 && (
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <h2 className="text-2xl font-semibold mb-4">Preview</h2>

                            {preview.length === 1 ? (
                                <div className="relative w-full">
                                    {preview[0].type === 'image' ? (
                                        <Image
                                            src={preview[0].src}
                                            alt={preview[0].alt || `${title} preview`}
                                            width={1200} // Set a fixed width so Next.js can size it
                                            height={800} // Height can match your image's natural ratio
                                            className="w-full h-auto object-contain rounded-xl"
                                            priority
                                        />
                                    ) : (
                                        <video
                                            src={preview[0].src}
                                            className="w-full h-auto object-contain rounded-xl"
                                            controls
                                        />
                                    )}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {preview.map((p, idx) => (
                                        <div key={idx} className="relative w-full">
                                            {p.type === 'image' ? (
                                                <Image
                                                    src={p.src}
                                                    alt={p.alt || `${title} preview ${idx + 1}`}
                                                    width={800}
                                                    height={600}
                                                    className="w-full h-auto object-contain rounded-xl"
                                                />
                                            ) : (
                                                <video
                                                    src={p.src}
                                                    className="w-full h-auto object-contain rounded-xl"
                                                    controls
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>


                <aside className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                        <h3 className="font-semibold mb-3">Quick facts</h3>
                        <ul className="text-sm text-gray-300 space-y-2">
                            {period && <li><span className="text-gray-400">Timeline:</span> {period}</li>}
                            {tags?.length ? <li><span className="text-gray-400">Tags:</span> {tags.join(', ')}</li> : null}
                            {tech?.length ? <li><span className="text-gray-400">Tech:</span> {tech.join(', ')}</li> : null}
                        </ul>
                    </div>
                </aside>



            </section>
        </div>
    );
}
