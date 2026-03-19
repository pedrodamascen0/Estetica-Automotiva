import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Users, Leaf, ThumbsUp } from "lucide-react";

const teamImage =
  "https://images.unsplash.com/photo-1694678505383-676d78ea3b96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwdGVhbSUyMHdvcmtlcnMlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MjU0MTg2OXww&ixlib=rb-4.1.0&q=80&w=1080";

const carImage =
  "https://images.unsplash.com/photo-1761312834150-4beefff097a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjbGVhbiUyMGNhciUyMGV4dGVyaW9yJTIwd2FzaHxlbnwxfHx8fDE3NzI1NDM2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080";

const values = [
  {
    icon: Award,
    title: "Excelência",
    description: "Usamos apenas produtos premium e técnicas avançadas para entregar resultados impecáveis.",
    color: "#00b4d8",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais treinados e certificados com anos de experiência em detalhamento automotivo.",
    color: "#0077b6",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Utilizamos processos e produtos biodegradáveis que respeitam o meio ambiente.",
    color: "#2dc653",
  },
  {
    icon: ThumbsUp,
    title: "Satisfação Garantida",
    description: "Se não ficou perfeito, refazemos. Sua satisfação é nossa prioridade número um.",
    color: "#f77f00",
  },
];

export function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Text + Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text Side */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block px-4 py-1.5 bg-[#00b4d8]/10 text-[#0077b6] rounded-full text-sm mb-5"
              style={{ fontWeight: 600 }}
            >
              Nossa História
            </span>
            <h2
              className="text-gray-900 mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, lineHeight: 1.2 }}
            >
              Cuidando do seu carro{" "}
              <span className="text-[#00b4d8]">com paixão</span>{" "}
              há 1 anos
            </h2>
            <p className="text-gray-500 mb-5" style={{ lineHeight: 1.8 }}>
              Fundado em 2026, o <strong className="text-gray-700">Estética Automotiva Premium</strong> nasceu
              da paixão por carros e do compromisso com a excelência. O que começou como um pequeno
              negócio familiar cresceu e se tornou referência em detalhamento automotivo em Curitiba.
            </p>
            <p className="text-gray-500 mb-8" style={{ lineHeight: 1.8 }}>
              Nossa missão é simples: devolver ao seu veículo o brilho e a beleza que ele merece,
              utilizando as melhores técnicas e produtos do mercado, com respeito ao meio ambiente
              e total transparência no atendimento.
            </p>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "+100", label: "Clientes" },
                { value: "2", label: "Anos" },
                { value: "5", label: "Especialistas" },
              ].map((s, i) => (
                <div key={i} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-[#00b4d8]" style={{ fontSize: "1.6rem", fontWeight: 800 }}>
                    {s.value}
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5" style={{ fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Images Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={carImage}
                alt="Carro limpo"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#00b4d8]/10 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#00b4d8]" />
                </div>
                <div>
                  <div className="text-gray-900" style={{ fontSize: "0.95rem", fontWeight: 700 }}>
                    Top Rated
                  </div>
                  <div className="text-yellow-500 text-xs">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-500 text-xs" style={{ lineHeight: 1.5 }}>
                Melhor lava jato da região por 2 anos consecutivos
              </p>
            </motion.div>

            {/* Team Image Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-6 -right-6 w-28 h-28 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
            >
              <img src={teamImage} alt="Nossa equipe" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3
              className="text-gray-900"
              style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 700 }}
            >
              Por que nos escolher?
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#00b4d8]/30 hover:shadow-lg transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <value.icon className="w-6 h-6" style={{ color: value.color }} />
                </div>
                <h4 className="text-gray-900 mb-2" style={{ fontSize: "1rem", fontWeight: 700 }}>
                  {value.title}
                </h4>
                <p className="text-gray-500 text-sm" style={{ lineHeight: 1.6 }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
