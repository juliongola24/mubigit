import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home, ArrowLeft, Leaf, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WHATSAPP = 'https://wa.me/244925204540?text=Ol%C3%A1%2C%20cheguei%20a%20uma%20p%C3%A1gina%20que%20n%C3%A3o%20existe%20no%20site%20Mubissule';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 relative overflow-hidden bg-primary-dark text-primary-foreground flex items-center justify-center px-4 py-20">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative text-center max-w-2xl mx-auto">
          <div className="relative mb-8">
            <div className="font-display text-[140px] sm:text-[200px] font-black text-accent/15 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-accent/40">
                <Leaf className="w-12 h-12 sm:w-14 sm:h-14 text-accent" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="gold-divider" />
            <span className="text-accent text-xs uppercase tracking-[0.25em] font-medium">Página não encontrada</span>
            <span className="gold-divider" />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Esta trilha levou a um <span className="text-gradient italic font-medium">caminho fechado</span>.
          </h1>
          <p className="text-primary-foreground/75 mb-10 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
            A página que procura pode ter sido movida, renomeada ou está temporariamente
            indisponível. Vamos ajudá-lo a voltar ao bom caminho.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-[1.03] transition-transform">
              <Home className="w-5 h-5" /> Ir para o Início
            </a>
            <button onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-accent/40 hover:bg-accent/10 font-semibold transition-colors">
              <ArrowLeft className="w-5 h-5 text-accent" /> Voltar
            </button>
            <a href={WHATSAPP} target="_blank" rel="noopener"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-accent/40 hover:bg-accent/10 font-semibold transition-colors">
              <MessageCircle className="w-5 h-5 text-accent" /> Falar conosco
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
