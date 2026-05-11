import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Educação', path: '/educacao' },
  { name: 'Dados', path: '/dados' },
  { name: 'Inserir Dados', path: '/inserir-dados' },
  { name: 'Metodologia', path: '/metodologia' },
  { name: 'Sobre', path: '/sobre' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-bento-navy text-white shadow-lg h-16 flex items-center shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-bento-forest rounded-xl flex items-center justify-center font-bold text-xl border border-teal-400/30 group-hover:bg-teal-700 transition-colors shadow-sm">
              N
            </div>
            <span className="text-xl font-black tracking-tighter">Neo<span className="text-bento-accent">Uro</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-bold uppercase tracking-widest">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all duration-300 hover:text-white relative group/link ${
                  location.pathname === link.path ? 'text-white' : 'text-teal-100/70'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-bento-accent rounded-full"
                  />
                )}
              </Link>
            ))}
            <div className="flex items-center px-3 py-1 bg-teal-800/50 rounded-full border border-teal-600 ml-4">
              <span className="text-[10px] uppercase tracking-widest text-teal-300 font-black">TCC 2024</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="touch-target text-teal-100/80 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-bento-navy md:hidden pt-20 px-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-3xl font-black tracking-tighter ${
                      location.pathname === link.path ? 'text-bento-accent' : 'text-white/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-10 border-t border-white/10 mt-auto pb-10">
                <p className="text-teal-100/40 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Plataforma Acadêmica</p>
                <div className="p-4 bg-teal-900/50 rounded-2xl border border-teal-800">
                  <p className="text-xs text-teal-100/70 leading-relaxed font-medium">
                    Produto tecnológico desenvolvido para o Trabalho de Conclusão Anual - NeoUro 2024.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
