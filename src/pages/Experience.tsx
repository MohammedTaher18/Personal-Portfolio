import { motion } from 'motion/react';
import { PageTransition } from '../components/Animations';

const experiences = [
    {
        id: 1,
        year: "2023",
        title: "BE in Artificial Intelligence & Machine Learning (Final Year)",
        organization: "IMPACT COLLEGE OF ENGINEERING AND APPLIED SCIENCES",
        type: "education"
    },
    {
        id: 2,
        year: "2022 — 2023",
        title: "Quality Inspector",
        organization: "Sansera Engineering Limited, Bommasandra, Bangalore",
        description: "2 years of experience working as a quality inspector in manufacturing.",
        type: "experience"
    },
    {
        id: 3,
        year: "2018",
        title: "Diploma in Mechanical Engineering",
        organization: "DACG (Govt) Polytechnic, Chikkamagaluru",
        type: "education"
    }
];

export default function Experience() {
    return (
        <div id="experience">
            <PageTransition>
                <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[10vw] md:text-[6vw] leading-none font-serif font-bold tracking-tighter mb-20 uppercase"
                        >
                            Experience <br />
                            <span className="italic font-light text-accent">& Education</span>
                        </motion.h1>

                        <div className="space-y-16">
                            {experiences.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex flex-col md:flex-row gap-6 md:gap-12 border-t border-ink/10 pt-8"
                                >
                                    <div className="md:w-1/4 shrink-0">
                                        <p className="text-sm font-medium uppercase tracking-widest text-accent">
                                            {item.year}
                                        </p>
                                    </div>

                                    <div className="md:w-3/4">
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                                            {item.title}
                                        </h2>
                                        <h3 className="text-lg opacity-80 mb-4 font-medium">
                                            {item.organization}
                                        </h3>
                                        {item.description && (
                                            <p className="text-base opacity-70 leading-relaxed max-w-2xl">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-16 flex justify-center md:justify-start"
                        >
                            <a
                                href="Mohammed_Taher_CV.pdf"
                                download="Mohammed_Taher_CV.pdf"
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-ink text-ink font-medium uppercase tracking-widest text-sm overflow-hidden"
                            >
                                <span className="relative z-10 group-hover:text-surface transition-colors duration-500">My Resume</span>
                                <div className="absolute inset-0 bg-ink transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </PageTransition>
        </div>
    );
}
