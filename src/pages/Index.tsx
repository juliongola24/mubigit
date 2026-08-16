import { useMemo } from 'react';
import {
  Phone, MessageCircle, Leaf, Sparkles, HeartPulse, Stethoscope,
  Flower2, Hand, Activity, ShieldCheck, ArrowRight, CheckCircle2,
  Star, Award, Users, MapPin, Clock
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { artigos } from '@/data/artigos';
import heroImage from '@/assets/mubissule-promo.jpg';

const WHATSAPP = 'https://wa.me/244925204540?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20no%20Mubissule';

// === Serviços principais ===
const servicos = [
  {
    icon: Sparkles,
    titulo: 'Desintoxicação',
    desc: 'Programas de limpeza natural do organismo com fitoterápicos selecionados.',
  },
  {
    icon: Hand,
    titulo: 'Massagem Terapêutica',
    desc: 'Técnicas que aliviam dores, relaxam o corpo e restauram a vitalidade.',
  },
  {
    icon: Stethoscope,
    titulo: 'Check-up Geral',
    desc: 'Avaliação completa do estado de saúde por apenas 5.000 Kz.',
    destaque: true,
  },
  {
    icon: ShieldCheck,
    titulo: 'Acompanhamento',
    desc: 'Plano personalizado com revisões periódicas e suporte contínuo.',
  },
];

// === Áreas clínicas ===
const areas = [
  {
    icon: Flower2,
    titulo: 'Ginecologia',
    cor: 'from-rose-700 to-rose-900',
    items: [
      'Infertilidade',
      'Menopausa precoce',
      'Infecção urinária',
      'Menstruação irregular',
      'Quistos e miomas uterinos',
      'Inflamação pélvica',
      'Falta de apetite sexual (mulher)',
      'Corrimento vaginal',
      'Baixa produção vaginal',
    ],
  },
  {
    icon: HeartPulse,
    titulo: 'Urologia',
    cor: 'from-blue-800 to-blue-950',
    items: [
      'Infertilidade',
      'Infecção urinária',
      'Impotência sexual',
      'Ejaculação precoce',
      'Próstata',
      'Fraca produção de esperma',
      'Falta de apetite sexual (homem)',
    ],
  },
  {
    icon: Activity,
    titulo: 'Outros Tratamentos',
    cor: 'from-emerald-800 to-emerald-950',
    items: [
      'Hipertensão (tensão alta)',
      'Hipotensão (tensão baixa)',
      'Má circulação sanguínea',
      'Gastrite e problemas intestinais',
      'Atividade renal e hepática',
      'Colesterol e triglicerídeos',
      'Açúcar elevado',
      'Vitaminas para grávidas',
      'Saúde natural geral',
    ],
  },
];

const stats = [
  { num: '+10', label: 'Anos de experiência' },
  { num: '+5mil', label: 'Pacientes atendidos' },
  { num: '18', label: 'Províncias servidas' },
  { num: '100%', label: 'Satisfação dos pacientes' },
];

const Index = () => {
  // Reaproveita os artigos como "Condições tratadas" — pega 6 destacados
  const condicoes = useMemo(() => artigos.slice(0, 6), []);

  return (
    <>
      <Header />

      <main>
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-primary-dark text-primary-foreground">
          <div className="absolute inset-0">
            <img src={heroImage} alt="" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-primary-dark/40" />
          </div>

          {/* Decorative gold accents */}
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl" />

          <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="gold-divider" />
                <span className="text-accent text-xs sm:text-sm uppercase tracking-[0.25em] font-medium">
                  Centro de Medicina Natural · Angola
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6">
                Saúde natural,
                <br />
                <span className="text-gradient italic font-medium">vida em equilíbrio</span>.
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
                Há mais de uma década unimos a sabedoria da fitoterapia angolana com o
                rigor da prática clínica — para tratar a causa, não apenas o sintoma.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-md gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-[1.03] transition-transform"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar pelo WhatsApp
                </a>
                <a
                  href="tel:+244925204540"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-md border border-accent/40 text-primary-foreground hover:bg-accent/10 font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  925 204 540
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl">
                {stats.map((s) => (
                  <div key={s.label} className="border-l-2 border-accent/60 pl-3">
                    <p className="font-display text-2xl sm:text-3xl font-bold text-accent">{s.num}</p>
                    <p className="text-[11px] sm:text-xs text-primary-foreground/60 uppercase tracking-wider mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAIXA DE VALORES ============ */}
        <section className="bg-secondary border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              {[
                { icon: Leaf, title: 'Tratamento natural', desc: 'Fitoterapia de origem rastreável' },
                { icon: Award, title: 'Profissionais experientes', desc: 'Equipa com vários anos de prática' },
                { icon: MapPin, title: 'Sede em Luanda', desc: 'Atendimento presencial e remoto' },
              ].map((b) => (
                <div key={b.title} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-card">
                    <b.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{b.title}</p>
                    <p className="text-xs text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SERVIÇOS ============ */}
        <section id="servicos" className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium">Nossos Serviços</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Cuidado integral, <em className="text-primary not-italic">naturalmente</em>.
            </h2>
            <div className="flex justify-center"><span className="gold-divider" /></div>
            <p className="text-muted-foreground mt-5">
              Cada consulta é desenhada à volta da sua história e do seu corpo —
              nunca à volta de protocolos genéricos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicos.map((s) => (
              <div
                key={s.titulo}
                className={`group relative p-6 sm:p-7 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                  s.destaque
                    ? 'bg-primary text-primary-foreground border-accent/40 shadow-card-hover'
                    : 'bg-card border-border shadow-card hover:shadow-card-hover'
                }`}
              >
                {s.destaque && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-semibold">
                    Destaque
                  </span>
                )}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
                  s.destaque ? 'bg-accent/20' : 'bg-secondary group-hover:bg-primary group-hover:text-accent transition-colors'
                }`}>
                  <s.icon className={`w-6 h-6 ${s.destaque ? 'text-accent' : 'text-primary group-hover:text-accent'} transition-colors`} />
                </div>
                <h3 className={`font-display text-xl font-bold mb-2 ${s.destaque ? 'text-accent' : 'text-foreground'}`}>
                  {s.titulo}
                </h3>
                <p className={`text-sm leading-relaxed ${s.destaque ? 'text-primary-foreground/85' : 'text-muted-foreground'}`}>
                  {s.desc}
                </p>
                {s.destaque && (
                  <p className="mt-4 font-display text-2xl text-accent font-bold">5.000 Kz</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ============ ÁREAS CLÍNICAS ============ */}
        <section id="areas" className="bg-gradient-to-b from-secondary to-background py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium">Áreas Clínicas</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
                O que tratamos
              </h2>
              <div className="flex justify-center"><span className="gold-divider" /></div>
              <p className="text-muted-foreground mt-5">
                Acompanhamos condições de Ginecologia, Urologia e várias outras áreas
                com abordagens da medicina natural.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {areas.map((area) => (
                <div
                  key={area.titulo}
                  className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-shadow flex flex-col"
                >
                  <div className={`bg-gradient-to-br ${area.cor} text-primary-foreground p-6 flex items-center gap-3`}>
                    <div className="w-12 h-12 rounded-full bg-card/20 backdrop-blur flex items-center justify-center">
                      <area.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">Área</p>
                      <h3 className="font-display text-2xl font-bold">{area.titulo}</h3>
                    </div>
                  </div>
                  <ul className="p-6 space-y-2.5 flex-1">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                    <li className="flex items-center gap-2 text-sm text-muted-foreground italic pt-1">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>E outras condições…</span>
                    </li>
                  </ul>
                  <div className="p-6 pt-0">
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-accent transition-colors"
                    >
                      Falar sobre {area.titulo.toLowerCase()} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SOBRE ============ */}
        <section id="sobre" className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card-hover">
                <img src={heroImage} alt="Centro Mubissule" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-card rounded-xl shadow-card-hover p-5 max-w-[240px] border border-accent/20">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                    <Star className="w-6 h-6 text-accent-foreground" fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">4.9 / 5</p>
                    <p className="text-xs text-muted-foreground">Avaliação dos pacientes</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium">Sobre o Centro</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-5 leading-tight">
                Mais que uma clínica,
                <br />
                <em className="text-primary not-italic">um jeito gentil de cuidar.</em>
              </h2>
              <span className="gold-divider block mb-6" />

              <p className="text-muted-foreground leading-relaxed mb-4">
                O <strong className="text-foreground">Mubissule — Centro de Medicina Natural</strong> nasceu
                da convicção de que a saúde acontece quando corpo, mente e tradição
                conversam. Combinamos fitoterapia angolana, técnicas terapêuticas
                manuais e escuta clínica atenta.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Tratamos cada paciente como pessoa única — não como diagnóstico.
                O resultado é um atendimento humano, eficaz e sem promessas vazias.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Users, t: 'Atendimento humano', d: 'Conversamos consigo, não com protocolos.' },
                  { icon: Leaf, t: 'Plantas rastreáveis', d: 'Origem conhecida e qualidade garantida.' },
                  { icon: ShieldCheck, t: 'Acompanhamento real', d: 'Não desaparecemos depois da consulta.' },
                  { icon: Clock, t: 'Tempo dedicado', d: 'Consultas longas, sem pressa.' },
                ].map((b) => (
                  <div key={b.t} className="flex gap-3">
                    <div className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center flex-shrink-0">
                      <b.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{b.t}</p>
                      <p className="text-xs text-muted-foreground leading-snug">{b.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/sobre.html"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Conhecer o nosso método <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ============ CONDIÇÕES TRATADAS (reaproveita artigos) ============ */}
        <section id="condicoes" className="bg-secondary py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium">Biblioteca Clínica</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
                  Condições que tratamos
                </h2>
                <span className="gold-divider block mt-4" />
              </div>
              <p className="text-muted-foreground max-w-md">
                Conheça em detalhe algumas das condições mais comuns acompanhadas
                no nosso centro, com explicações claras escritas pela nossa equipe clínica.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {condicoes.map((c) => (
                <a
                  key={c.id}
                  href={`/artigo/${c.slug}.html`}
                  className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={c.imagem}
                      alt={c.titulo}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-medium">
                      Condição clínica
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-2 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {c.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{c.resumo}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      Ler mais <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="/condicoes.html"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Ver todas as condições <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ============ CTA FINAL ============ */}
        <section id="contato" className="relative overflow-hidden gradient-dark text-primary-foreground">
          <div className="absolute inset-0 opacity-10">
            <img src={heroImage} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 left-0 right-0 h-1 gradient-gold" />

          <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <Leaf className="w-10 h-10 text-accent mx-auto mb-5" />
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Pronto para começar a sua
                <br />
                <em className="text-gradient not-italic">jornada de cura natural?</em>
              </h2>
              <p className="text-primary-foreground/75 text-base sm:text-lg mb-10 max-w-xl mx-auto">
                Marque o seu Check-up Geral por apenas <strong className="text-accent">5.000 Kz</strong> e
                comece com o pé direito.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-[1.03] transition-transform"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar pelo WhatsApp
                </a>
                <a
                  href="tel:+244925204540"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-card/10 backdrop-blur border border-accent/30 hover:bg-card/20 font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  Ligar: 925 204 540
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-10 border-t border-primary-foreground/10">
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Clock className="w-5 h-5 text-accent" />
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-primary-foreground/50">Horário</p>
                    <p className="text-sm font-semibold">Seg–Sáb · 08h–18h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-primary-foreground/50">Localização</p>
                    <p className="text-sm font-semibold">Luanda · Angola</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Phone className="w-5 h-5 text-accent" />
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-primary-foreground/50">Telefone</p>
                    <p className="text-sm font-semibold">+244 925 204 540</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full gradient-gold shadow-gold flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-5 h-5 text-accent-foreground" />
        <span className="absolute inset-0 rounded-full animate-ping bg-accent/40 opacity-75" />
      </a>
    </>
  );
};

export default Index;
