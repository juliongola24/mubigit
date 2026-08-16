import { Mail, Phone, MapPin, Clock, Leaf } from 'lucide-react';
import mubissuleLogo from '@/assets/mubissule-logo.png';

const Footer = () => {
  return (
    <footer className="gradient-dark text-primary-foreground mt-12 sm:mt-20 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 gradient-gold w-full" />

      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img src={mubissuleLogo} alt="Mubissule" className="h-14 w-auto object-contain" />
              <div>
                <p className="font-display text-xl font-bold text-accent">MUBISSULE</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">Medicina Natural</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Centro de Medicina Natural dedicado a cuidar da sua saúde com terapias integrativas, fitoterapia e acompanhamento clínico personalizado.
            </p>
            <p className="font-serif italic text-accent text-sm">
              "Saúde natural, vida em equilíbrio."
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-display text-base mb-4 text-accent">Serviços</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="/#servicos" className="hover:text-accent transition-colors">Desintoxicação</a></li>
              <li><a href="/#servicos" className="hover:text-accent transition-colors">Massagem terapêutica</a></li>
              <li><a href="/#areas" className="hover:text-accent transition-colors">Ginecologia natural</a></li>
              <li><a href="/#areas" className="hover:text-accent transition-colors">Urologia natural</a></li>
              <li><a href="/#contato" className="hover:text-accent transition-colors">Check-up Geral · 5.000 Kz</a></li>
            </ul>
          </div>

          {/* Centro */}
          <div className="hidden sm:block">
            <h3 className="font-display text-base mb-4 text-accent">O Centro</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="/sobre.html" className="hover:text-accent transition-colors">Sobre Mubissule</a></li>
              <li><a href="/equipe.html" className="hover:text-accent transition-colors">Nossa Equipe</a></li>
              <li><a href="/#condicoes" className="hover:text-accent transition-colors">Condições Tratadas</a></li>
              <li><a href="/downloads.html" className="hover:text-accent transition-colors">Apps & Recursos</a></li>
              <li><a href="/privacidade.html" className="hover:text-accent transition-colors">Privacidade</a></li>
              <li><a href="/termos.html" className="hover:text-accent transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-base mb-4 text-accent">Contato</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/244925204540" className="hover:text-accent transition-colors">
                  +244 925 204 540
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="break-all">mubissule@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Luanda · Angola</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Seg–Sáb · 08h00 – 18h00</span>
              </li>
            </ul>

            {/* Mobile only - O Centro links */}
            <div className="sm:hidden mt-5">
              <h3 className="font-display text-base mb-3 text-accent">O Centro</h3>
              <ul className="space-y-2 text-xs text-primary-foreground/70">
                <li><a href="/sobre.html" className="hover:text-accent">Sobre</a></li>
                <li><a href="/equipe.html" className="hover:text-accent">Equipe</a></li>
                <li><a href="/privacidade.html" className="hover:text-accent">Privacidade</a></li>
                <li><a href="/termos.html" className="hover:text-accent">Termos</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/50 flex items-center gap-1.5">
            <Leaf className="w-3 h-3 text-accent" />
            © {new Date().getFullYear()} Mubissule · Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-primary-foreground/40 text-center sm:text-right">
            Centro de Medicina Natural.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
