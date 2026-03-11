import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check, Sparkles, Droplets, Wind, Shield, Zap, Star } from "lucide-react";

const services = [
  {
    icon: Droplets,
    name: "Lavagem Simples",
    price: "R$ 25",
    description: "Lavagem externa completa com shampoo automotivo de alta qualidade.",
    features: [
      "Lavagem externa",
      "Enxágue completo",
      "Secagem com flanela",
      "Limpeza de rodas",
    ],
    color: "#00b4d8",
    popular: false,
  },
  {
    icon: Sparkles,
    name: "Lavagem Completa",
    price: "R$ 60",
    description: "Lavagem interna e externa com aspiração e limpeza de painel.",
    features: [
      "Lavagem externa",
      "Aspiração interna",
      "Limpeza de painel",
      "Limpeza de vidros",
      "Secagem com flanela",
    ],
    color: "#0077b6",
    popular: true,
  },
  {
    icon: Shield,
    name: "Polimento",
    price: "R$ 150",
    description: "Polimento e proteção da pintura com cera de alta durabilidade.",
    features: [
      "Lavagem completa",
      "Polimento 3 etapas",
      "Aplicação de cera",
      "Proteção UV",
      "Espelhamento",
    ],
    color: "#023e8a",
    popular: false,
  },
  {
    icon: Wind,
    name: "Higienização",
    price: "R$ 200",
    description: "Higienização completa de interior com ozônio e produtos bactericidas.",
    features: [
      "Higienização a vapor",
      "Tratamento com ozônio",
      "Limpeza de bancos",
      "Teto e carpetes",
      "Eliminação de odores",
    ],
    color: "#48cae4",
    popular: false,
  },
  {
    icon: Zap,
    name: "Lavagem Rápida",
    price: "R$ 35",
    description: "Lavagem expressa em 15 minutos para quem tem pressa.",
    features: [
      "Lavagem externa rápida",
      "Secagem automática",
      "Limpeza de vidros",
    ],
    color: "#90e0ef",
    popular: false,
  },
  {
    icon: Star,
    name: "Pacote Premium",
    price: "R$ 350",
    description: "Serviço completo com todos os tratamentos para máximo brilho.",
    features: [
      "Lavagem completa",
      "Polimento total",
      "Higienização interna",
      "Cristalização",
      "Proteção cerâmica",
      "Odorizante premium",
    ],
    color: "#f77f00",
    popular: false,
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative bg-white rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 group border ${
        service.popular
          ? "border-[#00b4d8] ring-2 ring-[#00b4d8]/20"
          : "border-gray-100 hover:border-[#00b4d8]/30"
      }`}
    >
      {service.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className="px-4 py-1 text-white text-xs rounded-full bg-gradient-to-r from-[#00b4d8] to-[#0077b6]"
            style={{ fontWeight: 600 }}
          >
            Mais Popular
          </span>
        </div>
      )}

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
        style={{ backgroundColor: `${service.color}15` }}
      >
        <service.icon className="w-6 h-6" style={{ color: service.color }} />
      </div>

      <h3 className="text-gray-900 mb-1" style={{ fontSize: "1.05rem", fontWeight: 700 }}>
        {service.name}
      </h3>
      <p className="text-gray-500 text-sm mb-4" style={{ lineHeight: 1.6 }}>
        {service.description}
      </p>

      <div className="mt-auto">
        <div className="mb-4">
          <span className="text-gray-900" style={{ fontSize: "1.6rem", fontWeight: 800 }}>
            {service.price}
          </span>
          <span className="text-gray-400 text-sm ml-1">/veículo</span>
        </div>

        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <Check className="w-2.5 h-2.5" style={{ color: service.color }} />
              </div>
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
          className={`w-full py-3 rounded-xl text-sm transition-all active:scale-95 ${
            service.popular
              ? "bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white hover:opacity-90 hover:shadow-lg hover:shadow-[#00b4d8]/25"
              : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
          }`}
          style={{ fontWeight: 600 }}
        >
          Agendar
        </button>
      </div>
    </motion.div>
  );
}

export function Services() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 bg-[#00b4d8]/10 text-[#0077b6] rounded-full text-sm mb-4"
            style={{ fontWeight: 600 }}
          >
            Nossos Serviços
          </span>
          <h2
            className="text-gray-900 mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            Escolha o serviço ideal
            <br />
            <span className="text-[#00b4d8]">para o seu veículo</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            Oferecemos desde lavagens simples até tratamentos completos de detalhamento
            automotivo com os melhores produtos do mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
