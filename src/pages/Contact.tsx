import { useState } from 'react';
import { motion } from 'motion/react';
import { PageTransition } from '../components/Animations';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "3038515e-779d-45e3-b8c6-8aefffcabd66");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success! Message sent." : "Error sending message.");
    if (data.success) {
      event.target.reset();
    }
  };

  return (
    <div id="contact">
      <PageTransition>
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-[10vw] md:text-[6vw] leading-none font-serif font-bold tracking-tighter mb-8 uppercase"
                >
                  Let's <br />
                  <span className="italic font-light text-accent">Connect</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl opacity-80 max-w-md mb-12"
                >
                  I'm currently available for freelance projects and full-time opportunities. Drop a line if you'd like to build something great together.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-widest text-accent mb-2">Email</h3>
                    <a href="mailto:mohammedtaher1763@gmail.com" className="text-2xl md:text-3xl font-serif link-underline break-all">
                      mohammedtaher1763@gmail.com
                    </a>
                  </div>

                  <div className="pt-6">
                    <h3 className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Socials</h3>
                    <div className="flex gap-6 text-lg font-serif">
                      <a href="#" className="link-underline">Twitter</a>
                      <a href="https://www.linkedin.com/in/mohammed-taher-a7a272203/" target="_blank" rel="noopener noreferrer" className="link-underline">LinkedIn</a>
                      <a href="#" className="link-underline">Instagram</a>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <form onSubmit={onSubmit} className="space-y-8 bg-surface p-8 md:p-12 shadow-sm border border-ink/5">
                  <h2 className="text-2xl font-serif font-bold mb-8">Send a Message</h2>

                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest opacity-70">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-transparent border-b border-ink/20 py-3 focus:outline-none focus:border-accent transition-colors rounded-none"
                      placeholder="Mohammed Taher"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest opacity-70">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-transparent border-b border-ink/20 py-3 focus:outline-none focus:border-accent transition-colors rounded-none"
                      placeholder="mohammedtaher1763@gmail.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-medium uppercase tracking-widest opacity-70">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-ink/20 py-3 focus:outline-none focus:border-accent transition-colors resize-none rounded-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-ink text-surface font-medium uppercase tracking-widest text-sm hover:bg-accent transition-colors duration-300"
                  >
                    Submit
                  </button>
                  {result && (
                    <p className={`text-sm font-medium uppercase tracking-widest text-center ${result.includes('Success') ? 'text-green-600' : 'text-accent'}`}>{result}</p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
