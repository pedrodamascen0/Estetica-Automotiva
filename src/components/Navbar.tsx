import { useState, useEffect } from "react";
import { Menu, X, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "sobre", "servicos", "contato"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] rounded-lg flex items-center justify-center shadow-lg shadow-[#00b4d8]/30 group-hover:shadow-[#00b4d8]/50 transition-shadow">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="text-white" style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.02em" }}>
            Estética<span className="text-[#00b4d8]"> Automotiva</span> Premium
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative text-sm transition-colors duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#00b4d8]"
                    : "text-white/80 hover:text-white"
                }`}
                style={{ fontWeight: 500 }}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00b4d8] rounded-full"
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contato")}
              className="px-5 py-2.5 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white rounded-lg text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-[#00b4d8]/30 active:scale-95"
              style={{ fontWeight: 600 }}
            >
              Agendar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0a0f1e]/98 backdrop-blur-lg border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-[#00b4d8]/20 text-[#00b4d8]"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contato")}
                className="mt-2 px-4 py-3 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white rounded-lg text-sm text-center"
                style={{ fontWeight: 600 }}
              >
                Agendar Agora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
