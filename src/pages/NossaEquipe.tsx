import { Linkedin, Mail, Users, Phone, MessageCircle, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WHATSAPP = 'https://wa.me/244925204540?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipa%20Mubissule';

const equipe = [
  {
    nome: 'Júlio Ngola',
    cargo: 'Fundador & Coordenador Clínico',
    foto: '/equipe/enf-julio-ngola.webp',
    bio: 'Técnico em Enfermagem Geral. Idealizador do Mubissule.',
    linkedin: 'https://facebook.com/imjuliogomes',
    email: 'mubissule@gmail.com',
  },
];

const NossaEquipe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-primary-dark text-primary-foreground">
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="gold-divider" />
                <span className="text-accent text-xs sm:text-sm uppercase tracking-[0.25em] font-medium">
                  Equipa Mubissule
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
                Pessoas que tratam <span className="text-gradient italic font-medium">pessoas</span>.
              </h1>
              <p className="text-base sm:text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
                Profissionais de saúde dedicados à medicina natural, que ouvem antes de prescrever
                e acompanham cada paciente até ao fim do tratamento.
              </p>
            </div>
          </div>
        </section>

        {/* EQUIPA */}
        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium">Quem somos</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Conheça quem cuida de si
            </h2>
            <div className="flex justify-center"><span className="gold-divider" /></div>
          </div>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipe.map((m) => (
              <article key={m.nome}
                className="group bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 overflow-hidden">
                <div className="relative bg-gradient-to-b from-secondary to-background pt-8 pb-6 text-center">
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary text-accent font-semibold flex items-center gap-1">
                      <Award className="w-3 h-3" /> Fundador
                    </span>
                  </div>
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ring-accent/30 shadow-card">
                    <img src={m.foto} alt={m.nome} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{m.nome}</h3>
                  <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">{m.cargo}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{m.bio}</p>
                  <div className="flex justify-center gap-2">
                    <a href={m.linkedin} target="_blank" rel="noopener"
                      className="w-10 h-10 rounded-lg bg-secondary text-primary hover:bg-primary hover:text-accent transition-colors flex items-center justify-center"
                      aria-label="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={`mailto:${m.email}`}
                      className="w-10 h-10 rounded-lg bg-secondary text-primary hover:bg-primary hover:text-accent transition-colors flex items-center justify-center"
                      aria-label="Email">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* JUNTE-SE */}
        <section className="bg-gradient-to-b from-secondary to-background py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <div className="bg-primary-dark text-primary-foreground rounded-2xl p-8 sm:p-12 shadow-card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                  Quer fazer parte da equipa?
                </h2>
                <p className="text-primary-foreground/80 mb-6 max-w-xl">
                  Procuramos profissionais comprometidos com a medicina natural e o cuidado
                  humano. Envie-nos a sua candidatura.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="mailto:mubissule@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-[1.03] transition-transform">
                    <Mail className="w-4 h-4" /> Enviar candidatura
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noopener"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-accent/40 hover:bg-accent/10 font-semibold transition-colors">
                    <MessageCircle className="w-4 h-4 text-accent" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NossaEquipe;
