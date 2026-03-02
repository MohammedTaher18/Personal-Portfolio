import { motion } from 'motion/react';
import { PageTransition } from '../components/Animations';

const projects = [
  {
    id: 1,
    title: "Object Detection using Deep Learning",
    description: "A computer vision application powered by YOLOv8 AI Technology. It features real-time object detection capabilities for images, videos, and live webcam feeds with a custom graphical user interface.",
    tags: ["Python", "YOLOv8", "Deep Learning", "Computer Vision"]
  }
];

export default function Projects() {
  return (
    <div id="projects">
      <PageTransition>
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[10vw] md:text-[6vw] leading-none font-serif font-bold tracking-tighter mb-20 uppercase"
            >
              Selected <br />
              <span className="italic font-light text-accent">Works</span>
            </motion.h1>

            <div className="space-y-24">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col border-t border-ink/10 pt-12"
                >
                  <div className="w-full flex flex-col justify-center">
                    <div className="flex gap-3 mb-6 flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium uppercase tracking-widest border border-ink/20 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{project.title}</h2>
                    <p className="text-lg opacity-70 mb-8 leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
