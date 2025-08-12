'use client';

import { motion } from 'framer-motion';

export default function AboutMe() {
    return (
        <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
            >
                About Me
            </motion.h2>

            <div className="relative max-w-3xl mx-auto">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-fuchsia-500/20 via-sky-500/20 to-emerald-500/20 blur-xl" />
                <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 shadow-xl">
                    <div className="px-6 md:px-10 py-8 md:py-10 text-center text-gray-300 space-y-6 text-base md:text-lg leading-relaxed">
                        <p>
                            Hi there! My name is Darren Mo, and I&apos;m currently a junior at the University of Pennsylvania pursuing a Bachelor of Science in Computer Science.
                        </p>
                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <p>
                            I started programming in my first year of college, and since then I have developed a passion for building software. My interests range from building developer tools in research oriented settings to creating personal applications that make life more convenient for everyone.
                        </p>
                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <p>
                            In my free time, I enjoy swimming, playing golf, reading manga, and spending time with friends and family. I also love to travel and I am a huge foodie, always on the lookout for new culinary experiences.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}