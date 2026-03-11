import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Cliente há 3 anos",
    text: "Incrível! Meu carro saiu como se fosse zero quilômetro. A atenção aos detalhes é impressionante. Recomendo a todos!",
    rating: 5,
    initials: "CE",
    color: "#00b4d8",
  },
  {
    name: "Ana Paula Martins",
    role: "Cliente há 1 ano",
    text: "O melhor lava jato que já frequentei. Atendimento excelente, preço justo e resultado sempre impecável.",
    rating: 5,
    initials: "AP",
    color: "#0077b6",
  },
  {
    name: "Roberto Silva",
    role: "Cliente há 2 anos",
    text: "Fiz o pacote premium e ficou sensacional. A cristalização durou meses e a pintura ficou protegida. Vale cada centavo!",
    rating: 5,
    initials: "RS",
    color: "#f77f00",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-[#0a0f1e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00b4d8]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0077b6]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 bg-[#00b4d8]/15 text-[#00b4d8] rounded-full text-sm mb-4"
            style={{ fontWeight: 600 }}
          >
            Depoimentos
          </span>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            O que nossos clientes dizem
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#00b4d8]/40" />
              </div>

              <p className="text-white/70 text-sm mb-6" style={{ lineHeight: 1.7 }}>
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: t.color, fontSize: "0.8rem", fontWeight: 700 }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm" style={{ fontWeight: 600 }}>
                    {t.name}
                  </div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
