import { motion } from "motion/react";
import { ChevronDown, Star, Shield, Clock } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1761934658038-d0e6792378b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwcHJvZmVzc2lvbmFsJTIwZGV0YWlsaW5nJTIwc2hpbnl8ZW58MXx8fHwxNzcyNTQzNjUyfDA&ixlib=rb-4.1.0&q=80&w=1080";

const badges = [
  { icon: Star, text: "4.9/5 Avaliações" },
  { icon: Shield, text: "Garantia de Qualidade" },
  { icon: Clock, text: "Atendimento Rápido" },
];

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1e]"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lava Jato Premium"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent" />
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#00b4d8]/10"
            style={{
              width: `${100 + i * 60}px`,
              height: `${100 + i * 60}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00b4d8]/15 border border-[#00b4d8]/30 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-pulse" />
            <span className="text-[#00b4d8] text-sm" style={{ fontWeight: 500 }}>
              Lavagem Profissional em Curitiba
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.15 }}
          >
            Seu carro merece o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0096c7]">
              melhor cuidado
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-white/70 mb-10"
            style={{ fontSize: "1.1rem", lineHeight: 1.75 }}
          >
            Lavagem completa, polimento e higienização com produtos premium.
            Atendemos com hora marcada para o seu conforto e comodidade.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <button
              onClick={() => scrollTo("contato")}
              className="px-8 py-4 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white rounded-xl hover:opacity-90 transition-all hover:shadow-xl hover:shadow-[#00b4d8]/30 active:scale-95"
              style={{ fontWeight: 700, fontSize: "1rem" }}
            >
              Agendar Lavagem
            </button>
            <button
              onClick={() => scrollTo("servicos")}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all active:scale-95"
              style={{ fontWeight: 600, fontSize: "1rem" }}
            >
              Ver Serviços
            </button>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            {badges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
              >
                <badge.icon className="w-4 h-4 text-[#00b4d8]" />
                <span className="text-white/80 text-sm" style={{ fontWeight: 500 }}>
                  {badge.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-white/5 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5.000+", label: "Clientes Satisfeitos" },
              { value: "8 anos", label: "De Experiência" },
              { value: "98%", label: "Taxa de Satisfação" },
              { value: "20min", label: "Tempo Médio" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-white" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs mt-0.5" style={{ fontWeight: 400 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollTo("servicos")}
        className="absolute bottom-24 right-8 hidden lg:flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs" style={{ fontWeight: 400, writingMode: "vertical-rl" }}>
          scroll
        </span>
        <ChevronDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
}
