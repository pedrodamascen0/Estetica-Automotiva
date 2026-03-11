import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Send,
  CheckCircle,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["Rua das Flores, 1234", "Batel, Curitiba – PR"],
    color: "#00b4d8",
  },
  {
    icon: Phone,
    title: "Telefone",
    lines: ["(41) 9 9999-0000", "(41) 3333-0000"],
    color: "#0077b6",
  },
  {
    icon: Clock,
    title: "Horário",
    lines: ["Seg–Sex: 7h às 19h", "Sáb–Dom: 8h às 17h"],
    color: "#2dc653",
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["contato@lavajatopremium.com.br"],
    color: "#f77f00",
  },
];

const services = [
  "Lavagem Simples",
  "Lavagem Completa",
  "Polimento",
  "Higienização",
  "Lavagem Rápida",
  "Pacote Premium",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 bg-[#00b4d8]/10 text-[#0077b6] rounded-full text-sm mb-4"
            style={{ fontWeight: 600 }}
          >
            Fale Conosco
          </span>
          <h2
            className="text-gray-900 mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            Agende seu horário
            <br />
            <span className="text-[#00b4d8]">é rápido e fácil</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            Preencha o formulário e entraremos em contato para confirmar seu agendamento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${info.color}15` }}
                >
                  <info.icon className="w-5 h-5" style={{ color: info.color }} />
                </div>
                <div>
                  <div className="text-gray-900 mb-1" style={{ fontSize: "0.9rem", fontWeight: 700 }}>
                    {info.title}
                  </div>
                  {info.lines.map((line, j) => (
                    <div key={j} className="text-gray-500 text-sm" style={{ lineHeight: 1.6 }}>
                      {line}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="text-gray-900 mb-3" style={{ fontSize: "0.9rem", fontWeight: 700 }}>
                Redes Sociais
              </div>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: "@lavajatopremium", color: "#E1306C" },
                  { icon: Facebook, label: "LavaJato Premium", color: "#1877F2" },
                  { icon: MessageCircle, label: "WhatsApp", color: "#25D366" },
                ].map((social) => (
                  <button
                    key={social.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${social.color}15` }}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" style={{ color: social.color }} />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-gray-900 mb-2" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
                  Mensagem Enviada!
                </h3>
                <p className="text-gray-500 mb-6 max-w-sm" style={{ lineHeight: 1.7 }}>
                  Obrigado pelo contato! Nossa equipe responderá em breve para confirmar seu agendamento.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", service: "", message: "" }); }}
                  className="px-6 py-3 bg-[#00b4d8] text-white rounded-xl text-sm hover:bg-[#0096c7] transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  Novo Agendamento
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-gray-900" style={{ fontSize: "1.15rem", fontWeight: 700 }}>
                  Solicitar Agendamento
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm mb-1.5" style={{ fontWeight: 500 }}>
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]/30 focus:border-[#00b4d8] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-1.5" style={{ fontWeight: 500 }}>
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(00) 9 0000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]/30 focus:border-[#00b4d8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm mb-1.5" style={{ fontWeight: 500 }}>
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]/30 focus:border-[#00b4d8] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm mb-1.5" style={{ fontWeight: 500 }}>
                    Serviço Desejado *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00b4d8]/30 focus:border-[#00b4d8] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Selecione um serviço...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm mb-1.5" style={{ fontWeight: 500 }}>
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Informe o modelo do seu veículo, data preferida ou qualquer observação..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00b4d8]/30 focus:border-[#00b4d8] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white rounded-xl hover:opacity-90 transition-all hover:shadow-lg hover:shadow-[#00b4d8]/30 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ fontWeight: 700, fontSize: "0.95rem" }}
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Solicitação
                    </>
                  )}
                </button>

                <p className="text-gray-400 text-xs text-center" style={{ lineHeight: 1.5 }}>
                  Ao enviar, você concorda com nossa política de privacidade. Respondemos em até 1 hora.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
