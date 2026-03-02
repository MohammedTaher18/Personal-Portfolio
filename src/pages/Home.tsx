import { motion } from 'motion/react';
import { PageTransition } from '../components/Animations';

export default function Home() {
  return (
    <div id="home">
      <PageTransition>
        <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
          {/* Animated background element */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-[60vw] h-[60vw] rounded-full bg-accent/10 blur-[120px] -z-10"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="max-w-7xl mx-auto w-full pt-20 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-24 relative z-10">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-sm md:text-base font-medium uppercase tracking-[0.3em] mb-6 text-accent">
                  Mohammed Taher — Creative Developer
                </h2>
                <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] xl:text-[7vw] leading-[0.85] font-serif font-bold tracking-tighter mb-12 uppercase">
                  I'm <br />
                  <span className="text-outline italic font-light">Mohammed</span> <br />
                  Taher.
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-8"
              >
                <p className="max-w-md text-base leading-relaxed opacity-80 font-serif">
                  Hey, I'm an AI and software development engineer. I love building things that actually matter—whether that's training intelligent models, designing seamless user experiences, or writing solid back-end systems. I'm always exploring new technologies and figuring out how to make software feel more natural and intuitive for the people using it.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-surface shadow-2xl shrink-0"
            >
              <img
                src="/profile.jpg"
                alt="Mohammed Taher"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
