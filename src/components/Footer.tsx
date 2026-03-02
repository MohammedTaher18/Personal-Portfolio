import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-ink/10 mt-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-2xl font-bold uppercase">MOHAMMED TAHER</div>
        <div className="text-sm font-medium uppercase tracking-widest opacity-60">
          © {new Date().getFullYear()} All Rights Reserved
        </div>
        <div className="flex gap-6 text-sm font-medium uppercase tracking-widest items-center">
          <a href="mailto:mohammedtaher1763@gmail.com" className="hover:text-accent transition-colors"><Mail size={20} /></a>
          <a href="#" className="hover:text-accent transition-colors"><Github size={20} /></a>
          <a href="#" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
