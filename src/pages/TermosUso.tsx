import { FileText, Mail, BookOpen, Copyright, ShieldAlert, Scale, Link2, RefreshCw, Gavel, MessageCircle, AlertTriangle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sections = [
  {
    icon: BookOpen,
    title: '1. Aceitação dos termos',
    body: <p>Ao aceder e utilizar o site do Mubissule, concorda com estes Termos de Uso. Caso não concorde com qualquer parte, por favor não utilize o site.</p>,
  },
  {
    icon: AlertTriangle,
    title: '2. Natureza do conteúdo',
    body: (
      <>
        <p>O conteúdo deste site tem carácter exclusivamente informativo e educacional sobre saúde natural e bem-estar.</p>
        <div className="mt-4 bg-destructive/10 border border-destructive/20 rounded-xl p-4">
          <p className="text-destructive font-medium text-sm">
            ⚠️ Importante: o conteúdo NÃO substitui consulta, diagnóstico ou tratamento profissional.
            Consulte sempre um profissional de saúde qualificado.
          </p>
        </div>
      </>
    ),
  },
  {
    icon: Copyright,
    title: '3. Propriedade intelectual',
    body: (
      <>
        <p>Todo o conteúdo (textos, imagens, gráficos, logótipos) é propriedade do Mubissule ou dos seus licenciadores.</p>
        <p className="mt-3 font-medium text-foreground">É permitido:</p>
        <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
          <li>Partilhar links para os nossos artigos</li>
          <li>Citar trechos com devida atribuição</li>
        </ul>
        <p className="mt-3 font-medium text-foreground">É proibido:</p>
        <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
          <li>Reproduzir conteúdo integral sem autorização</li>
          <li>Usar para fins comerciais sem permissão</li>
          <li>Modificar ou criar obras derivadas sem autorização</li>
        </ul>
      </>
    ),
  },
  {
    icon: ShieldAlert,
    title: '4. Uso aceitável',
    body: (
      <>
        <p>Ao utilizar o site, concorda em:</p>
        <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
          <li>Não usar o site para fins ilegais</li>
          <li>Não tentar aceder a áreas restritas</li>
          <li>Não distribuir vírus ou código malicioso</li>
          <li>Não recolher informações de outros utilizadores</li>
          <li>Respeitar os direitos de propriedade intelectual</li>
        </ul>
      </>
    ),
  },
  {
    icon: Scale,
    title: '5. Limitação de responsabilidade',
    body: (
      <>
        <p>O Mubissule não se responsabiliza por:</p>
        <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
          <li>Decisões tomadas com base no conteúdo do site</li>
          <li>Danos diretos ou indiretos resultantes do uso</li>
          <li>Indisponibilidade temporária do site</li>
          <li>Conteúdo de sites externos referenciados</li>
        </ul>
      </>
    ),
  },
  {
    icon: Link2,
    title: '6. Links externos',
    body: <p>O site pode conter links para sites externos. Não controlamos esses conteúdos nem nos responsabilizamos pelas suas políticas.</p>,
  },
  {
    icon: RefreshCw,
    title: '7. Modificações dos termos',
    body: <p>Reservamo-nos o direito de modificar estes Termos a qualquer momento. As alterações entram em vigor imediatamente após publicação.</p>,
  },
  {
    icon: Gavel,
    title: '8. Lei aplicável',
    body: <p>Estes Termos são regidos pelas leis da República de Angola. Qualquer disputa será resolvida nos tribunais competentes de Angola.</p>,
  },
];

const TermosUso = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-primary-dark text-primary-foreground">
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative container mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center max-w-3xl">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/15 flex items-center justify-center">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="gold-divider" />
              <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium">Documento legal</span>
              <span className="gold-divider" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Termos de <span className="text-gradient italic font-medium">Uso</span>
            </h1>
            <p className="text-primary-foreground/70 text-sm">Última atualização: Janeiro de 2025</p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 max-w-3xl">
          <div className="space-y-5">
            {sections.map((s) => (
              <article key={s.title}
                className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-card hover:shadow-card-hover transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-secondary text-primary flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground pt-1">{s.title}</h2>
                </div>
                <div className="text-muted-foreground leading-relaxed pl-0 sm:pl-[60px]">{s.body}</div>
              </article>
            ))}

            {/* Contato */}
            <article className="bg-primary-dark text-primary-foreground rounded-2xl p-6 sm:p-8 shadow-card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold pt-1">9. Contacto</h2>
                </div>
                <p className="text-primary-foreground/85 mb-5 sm:pl-[60px]">
                  Para dúvidas sobre estes Termos de Uso, escreva-nos:
                </p>
                <div className="sm:pl-[60px]">
                  <a href="mailto:mubissule@gmail.com"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-[1.03] transition-transform">
                    <Mail className="w-4 h-4" /> mubissule@gmail.com
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermosUso;
