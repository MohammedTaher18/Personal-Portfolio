import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 mix-blend-difference text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="font-serif text-xl font-bold tracking-tight z-50">
          MOHAMMED TAHER
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest z-50">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <a href={link.href} className="link-underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 z-50">
          <a href="mailto:mohammedtaher1763@gmail.com" className="hover:text-accent transition-colors"><Mail size={20} /></a>
          <a href="https://github.com/MohammedTaher18" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/mohammed-taher-a7a272203/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>
    </nav>
  );
}
