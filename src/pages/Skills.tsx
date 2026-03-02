import { motion } from 'motion/react';
import { PageTransition } from '../components/Animations';

export default function Skills() {
  const skills = [
    { category: "Core Languages", items: ["HTML", "CSS", "Python", "SQL"] },
    { category: "Frameworks & Libraries", items: ["React", "Tailwind CSS", "Node.js", "Express"] },
    { category: "Tools & Technologies", items: ["Git", "GitHub", "Figma", "VS Code"] },
  ];

  return (
    <div id="skills">
      <PageTransition>
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[10vw] md:text-[6vw] leading-none font-serif font-bold tracking-tighter mb-20 uppercase"
            >
              Technical <br />
              <span className="italic font-light text-accent">Capabilities</span>
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {skills.map((skillGroup, idx) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <h3 className="text-sm font-medium uppercase tracking-widest text-accent mb-8 pb-4 border-b border-ink/10">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-4">
                    {skillGroup.items.map((item) => (
                      <li key={item} className="text-xl font-serif">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
