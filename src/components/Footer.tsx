import { Droplets, Instagram, Facebook, MessageCircle, ArrowUp } from "lucide-react";

const footerLinks = {
  Serviços: [
    "Lavagem Simples",
    "Lavagem Completa",
    "Polimento",
    "Higienização",
    "Lavagem Rápida",
    "Pacote Premium",
  ],
  Empresa: ["Sobre Nós", "Nossa Equipe", "Depoimentos", "Blog"],
  Contato: [
    "Rua das Flores, 1234 – Batel",
    "Curitiba – PR, 80000-000",
    "(41) 9 9999-0000",
    "contato@lavajatopremium.com.br",
  ],
};

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#050a18] text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white mb-1" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
              Pronto para deixar seu carro brilhando?
            </h3>
            <p className="text-white/80 text-sm">
              Agende agora e ganhe 10% de desconto na primeira lavagem completa.
            </p>
          </div>
          <button
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-shrink-0 px-7 py-3.5 bg-white text-[#0077b6] rounded-xl hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            style={{ fontWeight: 700, fontSize: "0.95rem" }}
          >
            Agendar Agora
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span className="text-white" style={{ fontSize: "1rem", fontWeight: 700 }}>
                Lava<span className="text-[#00b4d8]">Jato</span> Premium
              </span>
            </div>
            <p className="text-white/50 text-sm mb-5" style={{ lineHeight: 1.7 }}>
              Seu carro merece o melhor cuidado. Desde 2016 oferecendo excelência em lavagem
              e detalhamento automotivo em Curitiba.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, color: "#E1306C" },
                { icon: Facebook, color: "#1877F2" },
                { icon: MessageCircle, color: "#25D366" },
              ].map(({ icon: Icon, color }, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white mb-4" style={{ fontSize: "0.9rem", fontWeight: 700 }}>
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link, i) => (
                  <li key={i}>
                    <span className="text-white/50 text-sm hover:text-white/80 cursor-pointer transition-colors" style={{ lineHeight: 1.5 }}>
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} LavaJato Premium. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/30 text-sm cursor-pointer hover:text-white/50 transition-colors">
              Política de Privacidade
            </span>
            <span className="text-white/30 text-sm cursor-pointer hover:text-white/50 transition-colors">
              Termos de Uso
            </span>
            <button
              onClick={scrollTop}
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00b4d8]/20 flex items-center justify-center transition-colors"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4 text-white/50 hover:text-[#00b4d8]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
