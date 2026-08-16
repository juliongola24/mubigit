import { Heart, Target, Eye, Leaf, Award, MapPin, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WHATSAPP = 'https://wa.me/244925204540?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Mubissule';

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-primary-dark text-primary-foreground">
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl" />
          <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="gold-divider" />
                <span className="text-accent text-xs sm:text-sm uppercase tracking-[0.25em] font-medium">
                  Sobre o Centro
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
                A nossa missão é tratar a <span className="text-gradient italic font-medium">causa</span>,
                não apenas o sintoma.
              </h1>
              <p className="text-base sm:text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
                O Mubissule é um centro de medicina natural fundado em Angola que une fitoterapia
                tradicional, ciência e cuidado humano para devolver equilíbrio à sua saúde.
              </p>
            </div>
          </div>
        </section>

        {/* MISSÃO / VISÃO / VALORES */}
        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium">Princípios</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              O que nos move
            </h2>
            <div className="flex justify-center"><span className="gold-divider" /></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, t: 'Missão', d: 'Oferecer tratamentos naturais eficazes que respeitam o corpo e devolvem qualidade de vida ao paciente.' },
              { icon: Eye, t: 'Visão', d: 'Ser referência em medicina natural na África lusófona, integrando saber tradicional e prática clínica.' },
              { icon: Heart, t: 'Valores', d: 'Ética, escuta atenta, transparência e compromisso com cada história que entra na nossa porta.' },
            ].map((b) => (
              <div key={b.t} className="group bg-card rounded-2xl p-7 border border-border shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-secondary group-hover:bg-primary transition-colors flex items-center justify-center mb-5">
                  <b.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">{b.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HISTÓRIA */}
        <section className="bg-gradient-to-b from-secondary to-background py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-primary text-accent flex items-center justify-center shadow-card">
                <Leaf className="w-8 h-8" />
              </div>
              <div>
                <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium">A nossa história</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                  Uma década de cuidado natural
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    O Mubissule nasceu da convicção de que a medicina natural — quando praticada
                    com rigor — pode resolver aquilo que muitos consideram irreversível: infertilidade,
                    desequilíbrios hormonais, distúrbios crónicos.
                  </p>
                  <p>
                    Há mais de doze anos atendemos pacientes em Luanda combinando fitoterapia
                    angolana, escuta clínica detalhada e acompanhamento contínuo. Cada plano é
                    construído à medida da pessoa, nunca à medida do diagnóstico.
                  </p>
                  <p>
                    Acreditamos que a saúde não se compra em frascos: constrói-se com tempo,
                    consciência e plantas que conhecem o nosso corpo há séculos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, t: '12+ anos', d: 'De prática clínica em medicina natural.' },
              { icon: Leaf, t: 'Fitoterapia rastreável', d: 'Plantas selecionadas e de origem confiável.' },
              { icon: ShieldCheck, t: 'Acompanhamento real', d: 'Reavaliações periódicas e suporte contínuo.' },
              { icon: MapPin, t: 'Sede em Luanda', d: 'Atendimento presencial e remoto.' },
            ].map((b) => (
              <div key={b.t} className="p-6 rounded-xl bg-card border border-border shadow-card">
                <div className="w-10 h-10 rounded-lg bg-primary text-accent flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5" />
                </div>
                <p className="font-display text-xl font-bold text-foreground mb-1">{b.t}</p>
                <p className="text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-dark text-primary-foreground py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Pronto para começar a sua jornada?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Marque uma avaliação inicial e descubra o que a medicina natural pode fazer por si.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href={WHATSAPP} target="_blank" rel="noopener"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-[1.03] transition-transform">
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
              <a href="tel:+244925204540"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-accent/40 hover:bg-accent/10 font-semibold transition-colors">
                <Phone className="w-5 h-5 text-accent" />
                925 204 540
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SobreNos;
