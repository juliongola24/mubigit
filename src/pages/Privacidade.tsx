import { Shield, Mail, Lock, Cookie, Share2, UserCheck, FileWarning, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sections = [
  {
    icon: FileWarning,
    title: '1. Informações que recolhemos',
    body: (
      <>
        <p>O Mubissule recolhe informações limitadas para melhorar a experiência:</p>
        <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
          <li>Dados de navegação anónimos (páginas visitadas, tempo de leitura)</li>
          <li>Informações do dispositivo (navegador, sistema operativo)</li>
          <li>Localização aproximada (país/região)</li>
          <li>Dados fornecidos voluntariamente em formulários e contactos</li>
        </ul>
      </>
    ),
  },
  {
    icon: UserCheck,
    title: '2. Como usamos as suas informações',
    body: (
      <>
        <p>Utilizamos as informações recolhidas para:</p>
        <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
          <li>Melhorar conteúdos e serviços do centro</li>
          <li>Personalizar a experiência do visitante</li>
          <li>Analisar tendências de uso do site</li>
          <li>Responder a dúvidas, pedidos de consulta e contactos</li>
        </ul>
      </>
    ),
  },
  {
    icon: Cookie,
    title: '3. Cookies e tecnologias similares',
    body: (
      <>
        <p>Usamos cookies para lembrar preferências, analisar tráfego e exibir conteúdos relevantes. Pode geri-los nas definições do seu navegador.</p>
      </>
    ),
  },
  {
    icon: Share2,
    title: '4. Partilha de dados',
    body: (
      <>
        <p>Não vendemos informações pessoais. Podemos partilhar dados com:</p>
        <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
          <li>Serviços de análise (Google Analytics)</li>
          <li>Autoridades legais quando exigido por lei</li>
        </ul>
      </>
    ),
  },
  {
    icon: Lock,
    title: '5. Segurança dos dados',
    body: <p>Aplicamos medidas técnicas e organizacionais para proteger as suas informações contra acesso não autorizado, alteração ou destruição.</p>,
  },
  {
    icon: UserCheck,
    title: '6. Os seus direitos',
    body: (
      <>
        <p>Tem o direito de:</p>
        <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
          <li>Aceder aos seus dados pessoais</li>
          <li>Solicitar correção de dados incorretos</li>
          <li>Solicitar a exclusão dos seus dados</li>
          <li>Retirar consentimento a qualquer momento</li>
        </ul>
      </>
    ),
  },
];

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-primary-dark text-primary-foreground">
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative container mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center max-w-3xl">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/15 flex items-center justify-center">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="gold-divider" />
              <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium">Documento legal</span>
              <span className="gold-divider" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Política de <span className="text-gradient italic font-medium">Privacidade</span>
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
                  <h2 className="font-display text-xl sm:text-2xl font-bold pt-1">7. Contacto</h2>
                </div>
                <p className="text-primary-foreground/85 mb-5 sm:pl-[60px]">
                  Para questões sobre esta política ou para exercer os seus direitos, escreva-nos:
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

export default Privacidade;
